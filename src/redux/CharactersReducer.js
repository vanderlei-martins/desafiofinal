const INITIAL_STATE = {
    characters: [],
    loading: false,
    nextPage: '',
}

export const CharactersReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
		case "GET_ALL_CHARACTERS":
			return {
				...state,
				loading: true,
			};
		case "GET_ALL_CHARACTERS_SUCCESS":
			return {
				...state,
				loading: false,
				characters: [...state.characters, ...action.payload.characters],
                nextPage: action.payload.nextPage
			};
		default:
			return state;
	}
}