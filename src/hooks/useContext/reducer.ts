export enum TypeReducer {
	LOADING = 'LOADING',
	CLEAR = 'CLEAR',
	CHARACTER_UPDATE = 'CHARACTER_UPDATE',
	CHARACTER_FILTER = 'CHARACTER_FILTER',
	COMICS_UPDATE = 'COMICS_UPDATE',
	ERROR = 'ERROR',
}

export interface TypeReducerMap {
	[TypeReducer.LOADING]: {
		type: TypeReducer.LOADING;
		payload: boolean;
	};
	[TypeReducer.CLEAR]: {
		type: TypeReducer.CLEAR;
	};
	[TypeReducer.CHARACTER_UPDATE]: {
		type: TypeReducer.CHARACTER_UPDATE;
		payload: Omit<MarvelState, 'errors' | 'comics' | 'isError'>;
	};
	[TypeReducer.CHARACTER_FILTER]: {
		type: TypeReducer.CHARACTER_FILTER;
		payload: Omit<MarvelState, 'errors' | 'comics' | 'isError' | 'character'>;
	};
	[TypeReducer.COMICS_UPDATE]: {
		type: TypeReducer.COMICS_UPDATE;
		payload: Omit<MarvelState, 'errors' | 'isError' | 'character' | 'characterFilter'>;
	};
	[TypeReducer.ERROR]: {
		type: TypeReducer.ERROR;
		payload: Pick<MarvelState, 'errors' | 'isError' | 'isLoading'>;
	};
}

export interface AppAction<T> {
	type: keyof T;
	payload: T[keyof T];
}

export type Reducer = (state: MarvelState, action: TypeReducerMap[TypeReducer]) => MarvelState;

export interface MarvelState {
	character: Character[];
	characterFilter: {
		data: Character[];
		type: 'filter' | 'favorites' | 'all';
	};
	comics: ComicDetail;
	errors: string[];
	isLoading: boolean;
	isError: boolean;
}

export const initialStateMarvel: MarvelState = {
	character: [],
	characterFilter: {
		data: [],
		type: 'filter',
	},
	comics: {
		id: 0,
		name: '',
		image: '',
		description: '',
		favorite: false,
		comics: [],
	},
	errors: [],
	isError: false,
	isLoading: false,
};

const reducer: Reducer = (state, action) => {
	switch (action.type) {
		case TypeReducer.LOADING:
			return { ...state, isLoading: action.payload };

		case TypeReducer.CHARACTER_UPDATE:
			return { ...state, ...action.payload };

		case TypeReducer.CHARACTER_FILTER:
			return { ...state, ...action.payload };

		case TypeReducer.COMICS_UPDATE:
			return { ...state, ...action.payload };

		case TypeReducer.CLEAR:
			return initialStateMarvel;

		case TypeReducer.ERROR:
			return { ...state, ...action.payload };

		default:
			return state;
	}
};

export { reducer };
