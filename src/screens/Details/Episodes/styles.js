import styled from "styled-components/native";
import Icon from "react-native-vector-icons/FontAwesome";

export const Section = styled.View`
  margin-bottom: 32px;
`;

export const SectionTitle = styled.Text`
  margin-bottom: 8px;
`;

export const SectionContent = styled.View`
  margin-top: 16px;
  flex-direction: row;
  align-items: center;
`;

export const SectionSubtitle = styled.Text`
  width: 100px;
`;

export const SectionText = styled.Text``;

export const Container = styled.SafeAreaView`
  height: 70%;
  padding: 10px;
`;

export const ScrollView = styled.ScrollView`
  flex: 1;
`;

export const ShadowContainer = styled.View`
  background: #fff;
  border-radius: 16px;
  box-shadow: 0 6px 8px rgba(0, 0, 0, 0.1);
  padding: 20px;
  margin: 6px;
  height: 60px;
  justify-content: center;
`;
export const View = styled.View`
  align-items: center;
  justify-content: center;
`;
export const Text = styled.Text`
  padding: 3px;
`;

export const IconPlay = styled(Icon)``;
