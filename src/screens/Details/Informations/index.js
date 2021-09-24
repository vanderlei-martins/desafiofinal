import React, { useMemo, useCallback, useRef, useEffect } from "react";
import { Animated, Dimensions, Text } from "react-native";
import { ScrollView } from "react-native-gesture-handler";

import {
  Container,
  SlideWrapper,
  SelectedIndicator,
  Tabs,
  TabButton,
} from "./styles";

import About from "../About";
import Episodes from "../Episodes";

const { width } = Dimensions.get("window");

const tabs = [
  { name: "About", slide: About },
  { name: "Episodes", slide: Episodes },
];
const Informations = ({ character }) => {
  const translateX = useMemo(() => new Animated.Value(0), []);

  const scrollViewRef = useRef < ScrollView > 0;

  const handleChangeSlide = useCallback((index) => {
    if (scrollViewRef.current) {
      scrollViewRef.current.scrollTo({
        x: width * index,
        animated: true,
      });
    }
  }, []);

  const onScroll = Animated.event(
    [
      {
        nativeEvent: {
          contentOffset: {
            x: translateX,
          },
        },
      },
    ],
    { useNativeDriver: false }
  );

  const selectedIndicatorStyle = {
    transform: [
      {
        translateX: translateX.interpolate({
          inputRange: tabs.map((_, index) => width * index),
          outputRange: tabs.map((_, index) => ((width - 48) / 2) * index),
          extrapolate: "clamp",
        }),
      },
    ],
  };

  return (
    <Container>
      <Tabs>
        {tabs.map((tab, index) => {
          return (
            <TabButton key={index} onPress={() => handleChangeSlide(index)}>
              <Text>{tab.name}</Text>
            </TabButton>
          );
        })}
        <SelectedIndicator style={selectedIndicatorStyle} />
      </Tabs>

      <ScrollView
        useRef={scrollViewRef}
        onScroll={onScroll}
        horizontal
        showsHorizontalScrollIndicator={true}
        snapToInterval={width}
        decelerationRate="fast"
        bounces={false}
      >
        {tabs.map(({ slide: Slide }, index) => (
          <SlideWrapper key={index}>
            <Slide character={character} />
          </SlideWrapper>
        ))}
      </ScrollView>
    </Container>
  );
};

export default Informations;
