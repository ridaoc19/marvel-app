const BASE_URL_MARVEL = 'https://gateway.marvel.com:443/v1/public';

const fetchFromMarvel = async (endpoint: string) => {
	const url = `${BASE_URL_MARVEL}${endpoint}&ts=${process.env.REACT_APP_TS}&apikey=${process.env.REACT_APP_API_KEY}&hash=${process.env.REACT_APP_HASH}`;
	try {
		const response = await fetch(url);
		if (!response.ok) {
			throw new Error(`Error fetching data: ${response.statusText}`);
		}
		const data = await response.json();
		return data;
	} catch (error) {
		console.error('Failed to fetch data from Marvel API:', error);
		throw error;
	}
};

const getCachedDataMarvel = (key: string) => {
	const cached = localStorage.getItem(key);
	if (cached) {
		const { data, timestamp } = JSON.parse(cached);
		if (Date.now() - timestamp < 24 * 60 * 60 * 1000) {
			return data;
		}
	}
	return null;
};

const setCachedDataMarvel = (key: string, data: Character[] | ComicDetail) => {
	localStorage.setItem(key, JSON.stringify({ data, timestamp: Date.now() }));
};

//!

export const getCharacters = async (): Promise<Character[]> => {
	const cached = getCachedDataMarvel('characters');
	if (cached) {
		return cached;
	}

	const {
		data: { results },
	}: ApiCharacter.Character = await fetchFromMarvel('/characters?limit=50');

	const filterCharacter: Character[] = results.map(
		({ id, name, description, thumbnail: { extension, path } }) => {
			return {
				id,
				name,
				description,
				image: `${path}.${extension}`,
				favorite: false,
			};
		},
	);

	setCachedDataMarvel('characters', filterCharacter);
	return filterCharacter;
};
//!
export const getCharacterComics = async (characterId: string): Promise<ComicDetail> => {
	const cached = getCachedDataMarvel(`comics-${characterId}`);
	if (cached) {
		return cached;
	}
	const characters = await getCharacters();

	const {
		data: { results },
	}: ApiComic.Comic = await fetchFromMarvel(`/characters/${characterId}/comics?`);
	console.log(results)
	const findCharacter = characters.find(character => character.id === Number(characterId));
	
	if (!findCharacter) throw new Error(`Error character`);
	const filterComics: ComicDetail = {
		id: findCharacter.id,
		name: findCharacter.name,
		description: findCharacter.description,
		image: findCharacter.image,
		favorite: findCharacter.favorite,
		comics:
			results
				.map(({ id, title, modified, thumbnail: { extension, path } }) => {
					return {
						id,
						title,
						modified: new Date(modified).getFullYear(),
						image: `${path}.${extension}`,
					};
				})
				.sort((a, b) => b.modified - a.modified)
				.slice(0, 20) ?? [],
	};

	setCachedDataMarvel(`comics-${characterId}`, filterComics);
	return filterComics;
};

export const toggleFavorite = (characterId: number) => {
	const characters = getCachedDataMarvel('characters') || [];

	const updatedCharacters = characters.map((character: Character) =>
		character.id === characterId ? { ...character, favorite: !character.favorite } : character,
	);

	setCachedDataMarvel('characters', updatedCharacters);

	const cachedComicDetail = getCachedDataMarvel(`comics-${characterId}`);
	if (cachedComicDetail) {
		const updatedComicDetail = {
			...cachedComicDetail,
			favorite: !cachedComicDetail.favorite,
		};
		setCachedDataMarvel(`comics-${characterId}`, updatedComicDetail);
	}
};
