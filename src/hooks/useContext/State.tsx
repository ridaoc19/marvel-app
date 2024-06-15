import { useReducer } from 'react';
import { getCharacterComics, getCharacters, toggleFavorite } from '../../services/api';
import { initialStateMarvel, reducer, TypeReducer } from './reducer';

interface FilterParams {
	type: 'filter';
	search: string;
}

interface FavoritesParams {
	type: 'favorites';
	search: boolean;
}

interface CharacterParams {
	type: 'all';
}

export type CharactersFilterParams = FilterParams | FavoritesParams | CharacterParams;

function StateMarvel() {
	const [marvelState, marvelDispatch] = useReducer(reducer, initialStateMarvel);

	const requestCharacters = async () => {
		marvelDispatch({ type: TypeReducer.LOADING, payload: true });

		try {
			const data = await getCharacters();
			marvelDispatch({
				type: TypeReducer.CHARACTER_UPDATE,
				payload: {
					isLoading: false,
					character: data,
					characterFilter: {
						data: data,
						type: 'all',
					},
				},
			});
		} catch (error) {
			marvelDispatch({
				type: TypeReducer.ERROR,
				payload: {
					isLoading: false,
					isError: true,
					errors: [...marvelState.errors, 'Failed to load marvels'],
				},
			});
		}
	};

	const charactersFilter = async (param: CharactersFilterParams) => {
		marvelDispatch({ type: TypeReducer.LOADING, payload: true });

		const filteredCharacter = marvelState.character.filter(({ name, favorite }) => {
			switch (param.type) {
				case 'favorites':
					return param.search === favorite;
				case 'filter':
					return name.toLowerCase().includes(param.search.toLowerCase());
				default:
					return marvelState.character;
			}
		});

		marvelDispatch({
			type: TypeReducer.CHARACTER_FILTER,
			payload: {
				isLoading: false,
				characterFilter: {
					data: filteredCharacter,
					type: param.type,
				},
			},
		});
	};

	const requestComic = async (id: string) => {
		marvelDispatch({ type: TypeReducer.LOADING, payload: true });

		try {
			const data = await getCharacterComics(id);
			marvelDispatch({
				type: TypeReducer.COMICS_UPDATE,
				payload: {
					isLoading: false,
					comics: data,
				},
			});
		} catch (error) {
			marvelDispatch({
				type: TypeReducer.ERROR,
				payload: {
					isLoading: false,
					isError: true,
					errors: [...marvelState.errors, 'Failed to load episodes'],
				},
			});
		}
	};

	const toggleFavoriteCharacter = (id: number, location: string) => {
		toggleFavorite(id);
		requestCharacters();
		if (location !== '/') {
			requestComic(id.toString());
		}
	};

	return {
		marvelState,
		marvelDispatch,
		requestCharacters,
		requestComic,
		toggleFavoriteCharacter,
		charactersFilter,
	};
}

export default StateMarvel;
