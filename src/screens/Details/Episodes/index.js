import React from "react";

import {
  ShadowContainer,
  Container,
  IconPlay,
  Text,
  View,
  ScrollView,
} from "./styles";

const Episodes = ({ character }) => {
  return (
    <>
      <Container>
        <ScrollView>
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
        </ScrollView>
      </Container>
    </>
  );
};

export default Episodes;
