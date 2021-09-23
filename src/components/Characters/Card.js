import { useNavigation } from "@react-navigation/native";
import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  Image,
  Modal,
  TouchableOpacity,
  Button,
} from "react-native";

import {
  ViewCard,
  Name,
  ImgCharacter,
  ViewInfo,
  TextSpecies,
  TextLocation,
} from "./styles";

const Card = ({ data }) => {
  const navigation = useNavigation();

  const handleNavigateCharacter = (data) => {
    console.tron.log("DATA", data);
    navigation.navigate("Details", {
      character: data,
    });
  };
  return (
    <ViewCard>
      <TouchableOpacity onPress={() => handleNavigateCharacter(data)}>
        <ImgCharacter
          source={{
            uri: data.image,
          }}
        />
      </TouchableOpacity>
      <ViewInfo>
        <Name>
          {data.name} <TextSpecies>{data.species}</TextSpecies>
        </Name>
        <TextLocation>
          <Text style={{ fontWeight: "bold" }}>Location:</Text>{" "}
          {data.location.name}
        </TextLocation>
      </ViewInfo>
    </ViewCard>
  );
};

export default Card;
