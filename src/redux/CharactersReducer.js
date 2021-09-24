const INITIAL_STATE = {
    characters: [],
    loading: false,
    favorites: []
}

export const CharactersReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
		case "GET_ALL_CHARACTERS":
    case "POST_FAVORITE":
			return {
				...state,
				loading: true,
			};
		case "GET_ALL_CHARACTERS_SUCCESS":
			return {
				...state,
				loading: false,
				characters: [...state.characters, ...action.payload.characters],
        favorites: action.payload.favorites

			};
		case "POST_FAVORITE_SUCCESS":
			return {
				...state,
				loading: false,
        favorites: action.payload.favorites

			};
		default:
			return state;
	}
}