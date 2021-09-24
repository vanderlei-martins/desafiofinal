import * as api from "../services/api/api";
import { getListAllCharactersSuccess } from "./CharactersAction";

export const CharactersMiddleware = (store) => (next) => async (action) => {
	if (action.type === "GET_ALL_CHARACTERS") {
		next(action);
		const characters = await api.getCharacters(action.page);
        store.dispatch(getListAllCharactersSuccess(characters.results, characters.info.next));
		return;
	}
	next(action);
};
