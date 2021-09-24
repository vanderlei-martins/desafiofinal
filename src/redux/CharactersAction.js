export const getListAllCharacters = (page) => {
    return {
        type: 'GET_ALL_CHARACTERS',
        page: page
    }
}

export const getListAllCharactersSuccess = (characters, nextPage) => {
    return {
        type: 'GET_ALL_CHARACTERS_SUCCESS',
        payload: {
            characters
        }
    }
}

export const getAllCharactersSelector = (state) => state.characters;
export const isLoadingSelector = (state) => state.loading;