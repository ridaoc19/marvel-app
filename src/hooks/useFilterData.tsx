import { useContext, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { CreateContext } from './useContext';
import { MarvelState } from './useContext/reducer';

function useFilterData(): MarvelState & { totalFavorites: number } {
	const { marvelState, requestCharacters, requestComic } = useContext(CreateContext);
	const { characterId } = useParams<{ characterId: string }>();

	useEffect(() => {
		if (marvelState.character.length === 0) requestCharacters();
		if (characterId) requestComic(characterId);
		// eslint-disable-next-line
	}, [characterId]);

	return {
		...marvelState,
		totalFavorites: marvelState.character.filter(e => e.favorite).length,
	};
}

export default useFilterData;
