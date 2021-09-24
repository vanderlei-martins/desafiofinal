import styled from "styled-components/native";
import { Animated } from "react-native";

export const Container = styled(Animated.View)`
  height: 350px;
`;

export const Header = styled.View`
  flex: 1;
  padding: 0 24px;
`;

export const Row = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const ImageContainer = styled(Animated.View)`
  margin-top: 24px;
  align-items: center;
`;

export const Image = styled.Image`
  width: 280px;
  height: 280px;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
`;

export const Name = styled(Animated.Text)`
  color: #fff;
  font-size: 22px;
  font-weight: 700;
`;

export const Id = styled(Animated.Text)`
  color: #fff;
  font-size: 12px;
  font-weight: 700;
`;
