import React from "react";
import { View, Text } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";

import {
  Section,
  SectionTitle,
  SectionContent,
  SectionSubtitle,
  SectionText,
  ShadowContainer,
} from "./styles";

const About = ({ character }) => {
  return (
    <>
      <Section>
        <SectionContent>
          <SectionSubtitle>Status</SectionSubtitle>
          <SectionText key="2" style={{ marginRight: 8 }}>
            {character.status}
          </SectionText>
        </SectionContent>
        <SectionContent>
          <SectionSubtitle>Species</SectionSubtitle>
          <SectionText key="2" style={{ marginRight: 8 }}>
            {character.species}
          </SectionText>
        </SectionContent>
        <SectionContent>
          <SectionSubtitle>Gender</SectionSubtitle>
          <SectionText key="1" style={{ marginRight: 16 }}>
            <Text bold>{character.gender} </Text>

            <>
              <Icon
                name={character.gender === "Male" ? "mars" : "venus"}
                color={character.gender === "Male" ? "#6890F0" : "#EE99AC"}
                size={16}
              />
              {"  "}
            </>
          </SectionText>
        </SectionContent>

        <SectionContent>
          <SectionSubtitle>Origin</SectionSubtitle>

          <SectionText key="2" style={{ marginRight: 8 }}>
            {character.origin.name}
          </SectionText>
        </SectionContent>
        <SectionContent>
          <SectionSubtitle>Location</SectionSubtitle>

          <SectionText key="2" style={{ marginRight: 8 }}>
            {character.location.name}
          </SectionText>
        </SectionContent>
      </Section>
    </>
  );
};

export default About;
