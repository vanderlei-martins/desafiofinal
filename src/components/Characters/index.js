import React, { useEffect, useState } from "react";
import { StyleSheet, ImageBackground, Image } from "react-native";
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
} from "../../redux/CharactersAction";

import Card from "./Card";

export default function Characters() {
  const [page, setPage] = useState(1);
  const dispatch = useDispatch();
  const listCharacters = useSelector(getAllCharactersSelector);
  const [charactersByFilter, setCharactersByFilter] = useState([]);

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
      return;
    }

    let filteredCharacteres = listCharacters.filter((character) => {
      let pos = character.name.toLowerCase().indexOf(text.toLowerCase());
      return pos != -1;
    });

    setCharactersByFilter(filteredCharacteres);
  }

  function renderCharacter() {
    return charactersByFilter.length !== 0
      ? charactersByFilter
      : listCharacters;
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
