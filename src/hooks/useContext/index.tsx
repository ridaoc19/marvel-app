import { createContext, ReactNode } from 'react';
import { initialStateMarvel } from './reducer';
import StateMarvel, { CharactersFilterParams } from './State';

type MarvelStateReturn = ReturnType<typeof StateMarvel>;

const initialStateContext: MarvelStateReturn = {
	charactersFilter: async (data: CharactersFilterParams) => console.warn(data),
	marvelDispatch: () => console.warn('podcastDispatch is empty'),
	requestCharacters: async () => console.warn('requestPodcasts is empty'),
	requestComic: async (id: string) => console.warn(id),
	toggleFavoriteCharacter: (id: number) => console.warn(id),
	marvelState: initialStateMarvel,
};

export const CreateContext = createContext<MarvelStateReturn>(initialStateContext);

export const StoreContext = ({ children }: { children: ReactNode }) => {
	const podcasts = StateMarvel();

	return <CreateContext.Provider value={podcasts}>{children}</CreateContext.Provider>;
};
