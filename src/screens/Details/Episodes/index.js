import React from "react";

import {
  ShadowContainer,
  Container,
  IconPlay,
  Text,
  View,
  Scroll,
} from "./styles";

const Episodes = ({ character }) => {
  return (
    <>
      <Container>
        <Scroll>
          {character.episode.map((episode, index) => {
            let numberEp = episode.split("/");

            return (
              <ShadowContainer>
                <View>
                  <Text>Ep {numberEp[5]}</Text>
                  <Text>
                    <IconPlay name="play" size={22} color="gray"></IconPlay>
                  </Text>
                </View>
              </ShadowContainer>
            );
          })}
        </Scroll>
      </Container>
    </>
  );
};

export default Episodes;
