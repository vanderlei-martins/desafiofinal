import React, { useEffect, useMemo } from "react";
import { Animated, Easing, TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import { deleteFavorite, setFavorite } from "../../../services/storage/CharactersStorage";
import {
  Container,
  Header,
  Row,
  ImageContainer,
  Image,
  Name,
  Id,
} from "./styles";

import { getFavoritesSelector,postFavorite } from "../../../redux/CharactersAction";
import { useDispatch, useSelector } from "react-redux";

const Summary = ({ translateY, character }) => {
  const translateXNumber = useMemo(() => new Animated.Value(100), []);
  const translateXGenera = useMemo(() => new Animated.Value(200), []);
  const arFavorites = useSelector(getFavoritesSelector);
  const dispatch = useDispatch();

  useEffect(() => {
    Animated.parallel([
      Animated.timing(translateXNumber, {
        toValue: 0,
        duration: 300,
        useNativeDriver: true,
      }),

      Animated.timing(translateXGenera, {
        toValue: 0,
        duration: 350,
        useNativeDriver: true,
        easing: Easing.inOut(Easing.quad),
      }),
    ]).start();
  }, [translateXNumber, translateXGenera]);

  const summaryStyle = {
    zIndex: translateY.interpolate({
      inputRange: [-360, 0],
      outputRange: [-1, 2],
      extrapolate: "clamp",
    }),
    opacity: translateY.interpolate({
      inputRange: [-200, 0],
      outputRange: [0, 1],
      extrapolate: "clamp",
    }),
  };

  function isFavorite(id) {
		return arFavorites.indexOf(id) > -1;
	}

  async function setOrRemovefavorite(id) {
		if (isFavorite(id)) {
			await dispatch(postFavorite(id, true));
			return;
		}

    await dispatch(postFavorite(id));
  }

  return (
		<Container style={summaryStyle}>
			<Header>
				<Row>
					<Name>{character.name}</Name>
					<Animated.View testId="FilmsContainer">
						<Id>{`#${character.id}`}</Id>
					</Animated.View>
					<Animated.View testId="FilmsContainer2">
						<TouchableOpacity
							onPress={() =>
								setOrRemovefavorite(character.id)
							}
						>
							<Icon
								name={
									isFavorite(character.id) ? "heart" : "heart-o"
								}
								size={25}
								color="#fff"
							/>
						</TouchableOpacity>
					</Animated.View>
				</Row>
			</Header>
			<ImageContainer>
				<Image
					source={{
						uri: character.image,
					}}
				/>
			</ImageContainer>
		</Container>
  );
};

export default Summary;
