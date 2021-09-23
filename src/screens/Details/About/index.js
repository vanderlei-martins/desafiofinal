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

const About = () => {
  return (
    <>
      <Section>
        <SectionContent>
          <SectionSubtitle>Status</SectionSubtitle>
          <SectionText key="2" style={{ marginRight: 8 }}>
            Alive
          </SectionText>
        </SectionContent>
        <SectionContent>
          <SectionSubtitle>Species</SectionSubtitle>
          <SectionText key="2" style={{ marginRight: 8 }}>
            Human
          </SectionText>
        </SectionContent>
        <SectionContent>
          <SectionSubtitle>Gender</SectionSubtitle>
          <SectionText key="1" style={{ marginRight: 16 }}>
            <Text bold>Male </Text>

            <>
              <Icon
                name={"male" === "male" ? "mars" : "venus"}
                color={"male" === "male" ? "#6890F0" : "#EE99AC"}
                size={16}
              />
              {"  "}
            </>
          </SectionText>
        </SectionContent>

        <SectionContent>
          <SectionSubtitle>Origin</SectionSubtitle>

          <SectionText key="2" style={{ marginRight: 8 }}>
            Earth
          </SectionText>
        </SectionContent>
        <SectionContent>
          <SectionSubtitle>Location</SectionSubtitle>

          <SectionText key="2" style={{ marginRight: 8 }}>
            Earth
          </SectionText>
        </SectionContent>
      </Section>
    </>
  );
};

export default About;
