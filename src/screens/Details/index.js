import React from "react";
import { Animated } from "react-native";
import { PanGestureHandler, State } from "react-native-gesture-handler";
import { Container, Content, DetailsContainer } from "./styles";
import { useRoute } from "@react-navigation/native";
import Summary from "./Summary";
import Header from "./Header";
import Informations from "./Informations";

const Details = () => {
  const route = useRoute();
  const translateY = new Animated.Value(0);

  const character = route.params.character;

  const animatedEvent = Animated.event(
    [
      {
        nativeEvent: {
          translationY: translateY,
        },
      },
    ],
    { useNativeDriver: true }
  );

  const onHandlerStateChanged = (event) => {
    if (event.nativeEvent.oldState === State.ACTIVE) {
      let opened = false;

      const { translationY } = event.nativeEvent;

      if (translationY < -100) {
        opened = true;
      } else {
        opened = false;
        translateY.flattenOffset();
      }

      Animated.timing(translateY, {
        toValue: opened ? -360 : 0,
        duration: 200,
        useNativeDriver: true,
      }).start(() => {
        translateY.extractOffset();
      });
    }
  };

  const detailsStyle = {
    transform: [
      {
        translateY: translateY.interpolate({
          inputRange: [-360, 0, 200],
          outputRange: [-360, 0, 50],
          extrapolate: "clamp",
        }),
      },
    ],
  };

  return (
    <Container>
      <Content>
        <Header translateY={translateY} character={character} />
        <Summary translateY={translateY} character={character} />
        <PanGestureHandler
          onGestureEvent={animatedEvent}
          onHandlerStateChange={onHandlerStateChanged}
        >
          <DetailsContainer style={detailsStyle}>
            <Informations character={character} />
          </DetailsContainer>
        </PanGestureHandler>
      </Content>
    </Container>
  );
};

export default Details;
