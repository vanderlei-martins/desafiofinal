import React, { useEffect, useState } from "react";
import { StyleSheet, ImageBackground, Image, Text,TouchableOpacity } from "react-native";
import {
  SafeArea,
  Container,
  ListCharacters,
  Background,
  SearchView,
  SearchTextInput,
} from "./styles";
import { useSelector, useDispatch } from "react-redux";

import {
  getListAllCharacters,
  getAllCharactersSelector,
  getFavoritesSelector,
} from "../../redux/CharactersAction";

import Card from "./Card";
import { getCharacter, getCharacterByIds } from "../../services/api/api";

export default function Characters() {
  const [page, setPage] = useState(1);
  const dispatch = useDispatch();
  const listCharacters = useSelector(getAllCharactersSelector);
  const [charactersByFilter, setCharactersByFilter] = useState([]);
  const [charactersFavoritesByFilter, setCharactersFavoritesByFilter] = useState([]);
  const [showOnlyFavorites, setShowOnlyFavorites] = useState(false);
  const [charactersIsFavorite, setCharactersIsFavorite] = useState([]);
  const arFavorites = useSelector(getFavoritesSelector);

  useEffect(() => {
    dispatch(getListAllCharacters());
  }, []);

  async function getMoreCharacters() {
    let nextPage = page + 1;
    await setPage(nextPage);
    await dispatch(getListAllCharacters(nextPage));
  }

  function filterCharacters(text) {
    if (!text) {
      setCharactersByFilter([]);
      setCharactersFavoritesByFilter([]);
      return;
    }
    if(showOnlyFavorites){
      return filterOnlyOnCharactersFavorites(text);
    }
    let filteredCharacteres = listCharacters.filter((character) => {
      let pos = character.name.toLowerCase().indexOf(text.toLowerCase());
      return pos != -1;
    });

    setCharactersByFilter(filteredCharacteres);
  }

  function filterOnlyOnCharactersFavorites(text){
    let filteredCharacteres = charactersIsFavorite.filter((character) => {
      let pos = character.name.toLowerCase().indexOf(text.toLowerCase());
      return pos != -1;
    });

    setCharactersFavoritesByFilter(filteredCharacteres);
  }

  function renderCharacter() {
    if(showOnlyFavorites){
      return renderListFavorites();
    }

    return charactersByFilter.length !== 0
      ? charactersByFilter
      : listCharacters;
  }

  function renderListFavorites(){
    return charactersFavoritesByFilter.length !== 0
      ? charactersFavoritesByFilter
      : charactersIsFavorite;
  }

  async function showOnlyCharactersFavorites(show) {

		if (show) {
			let data = [];
			for (const id of arFavorites) {
				let result = await getCharacter(id);
				data.push(result);
			}
			setCharactersIsFavorite(data);
		} else {
			setCharactersIsFavorite([]);
		}

		setShowOnlyFavorites(show);
  }

  return (
    <ImageBackground
      source={require("../../img/teste4.jpg")}
      resizeMode="cover"
      style={styles.image}
    >
      <SafeArea>
        <Container>
          <Image
            style={{ width: 308, height: 100, border: 2 }}
            source={require("../../img/title1.png")}
          />
          <SearchView>
            <SearchTextInput
              autoCapitalize="none"
              autoCorrect={false}
              clearButtonMode="always"
              onChangeText={(text) => filterCharacters(text)}
              placeholder="Digite o nome do personagem"
            />
          </SearchView>
          <TouchableOpacity onPress={() => showOnlyCharactersFavorites(!showOnlyFavorites)}><Text>Somente favoritos</Text></TouchableOpacity>

          <ListCharacters
            showsVerticalScrollIndicator={false}
            data={renderCharacter()}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => {
              return <Card data={item} />;
            }}
            onEndReached={getMoreCharacters}
            onEndReachedThreshold={0.1}
          />
        </Container>
      </SafeArea>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  image: {
    flex: 1,
  },
});
