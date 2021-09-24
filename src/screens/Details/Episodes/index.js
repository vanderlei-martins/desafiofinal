import React from "react";

import {
  Section,
  SectionTitle,
  SectionContent,
  SectionSubtitle,
  SectionText,
  ShadowContainer,
  Container,
  IconPlay,
  Text,
  View,
} from "./styles";

const Episodes = ({ character }) => {
  console.tron.log("episodios", character.episode);
  return (
    <>
      <Container>
        {character.episode.map((episode, index) => (
          <ShadowContainer>
            <View>
              <Text>Ep {episode.slice(-1)}</Text>

              <Text>
                <IconPlay name="play" size={22} color="gray"></IconPlay>
              </Text>
            </View>
          </ShadowContainer>
        ))}
      </Container>
    </>
  );
};

export default Episodes;
