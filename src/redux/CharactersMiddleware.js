import * as api from "../services/api/api";
import { deleteFavorite, loadFavorites, setFavorite } from "../services/storage/CharactersStorage";
import { getListAllCharactersSuccess, postFavoriteSuccess } from "./CharactersAction";

export const CharactersMiddleware = (store) => (next) => async (action) => {
	if (action.type === "GET_ALL_CHARACTERS") {
		next(action);
		const characters = await api.getCharacters(action.page);
    const favorites = await loadFavorites();
    store.dispatch(getListAllCharactersSuccess(characters.results, favorites));
		return;
	}
  
  if (action.type === "POST_FAVORITE") {
		next(action);
    if(action.removeFavorite){
      await deleteFavorite(action.id);
    }else{
      await setFavorite(action.id);
    }
    const favorites = await loadFavorites();
    store.dispatch(postFavoriteSuccess(favorites));
		return;
	}
	next(action);
};
