import React, { useCallback } from "react";
import { Animated } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import { useNavigation } from "@react-navigation/native";
import { Container, GoBackButton, Text } from "./styles";

const Header = ({ translateY }) => {
  const navigation = useNavigation();

  const handleGoBack = useCallback(() => navigation.goBack(), [navigation]);

  const fadeStyle = {
    opacity: translateY.interpolate({
      inputRange: [-300, -200],
      outputRange: [1, 0],
      extrapolate: "clamp",
    }),
  };

  return (
    <Container>
      <GoBackButton onPress={handleGoBack}>
        <Icon name="arrow-left" color="#fff" size={20} />
      </GoBackButton>

      <Animated.View style={fadeStyle}>
        <Text>Morty Smith</Text>
      </Animated.View>

      <Animated.View style={fadeStyle}>
        <Text>#001</Text>
      </Animated.View>
    </Container>
  );
};

export default Header;
