import styled from "styled-components/native";
import { Dimensions, Animated } from "react-native";

const { width } = Dimensions.get("window");

export const Container = styled(Animated.View)`
  height: 1000px;
  background: #fff;
  border-top-left-radius: 32px;
  border-top-right-radius: 32px;
  padding: 16px 0;
`;

export const Tabs = styled.View`
  padding: 16px 0 24px;
  margin: 0 24px;
  border-bottom-width: 1px;
  border-style: solid;
  border-color: #f0fc;
  position: relative;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
`;

export const TabButton = styled.TouchableOpacity`
  height: 24px;
  width: ${(width - 48) / 2}px;
  align-items: center;
  justify-content: center;
`;

export const SelectedIndicator = styled(Animated.View)`
  height: 2px;
  width: ${(width - 48) / 2}px;
  background: #007;
  position: absolute;
  bottom: -1px;
`;

export const SlideWrapper = styled.View`
  width: ${width}px;
  padding: 24px;
`;
