import AsyncStorage from "@react-native-async-storage/async-storage";

const KEY_FAVORITES = 'favorite_characters';

export async function loadFavorites(){
  const storage = await AsyncStorage.getItem('favorite_characters');
  
  return JSON.parse(storage);
}

export async function setFavorite(id){
  let favorites = await loadFavorites();
  
  favorites.push(id);
  await AsyncStorage.setItem('favorite_characters', JSON.stringify(favorites));

}


export async function deleteFavorite(id){
  const favorites = await loadFavorites();
  const favoritesWithoutID = favorites.filter((favorito) => {
    return favorito !== id;
  });
  
  await AsyncStorage.setItem('favorite_characters', JSON.stringify(favoritesWithoutID));

}