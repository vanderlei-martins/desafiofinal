export const getListAllCharacters = (page) => {
	return {
		type: "GET_ALL_CHARACTERS",
		page: page,
	};
};

export const getListAllCharactersSuccess = (characters, favorites) => {
	return {
		type: "GET_ALL_CHARACTERS_SUCCESS",
		payload: {
			characters,
			favorites,
		},
	};
};

export const postFavorite = (id, removeFavorite = false) => {
	return {
		type: "POST_FAVORITE",
		id: id,
		removeFavorite: removeFavorite,
	};
};

export const postFavoriteSuccess = (favorites) => {
	return {
		type: "POST_FAVORITE_SUCCESS",
		payload: {
			favorites,
		},
	};
};

export const getAllCharactersSelector = (state) => state.characters;
export const getFavoritesSelector = (state) => state.favorites;
export const isLoadingSelector = (state) => state.loading;
