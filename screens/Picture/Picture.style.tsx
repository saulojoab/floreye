import { CameraView } from "expo-camera";
import { LinearGradient } from "expo-linear-gradient";
import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
`;

export const Camera = styled(CameraView)`
  flex: 1;
`;

export const ControlsContainer = styled.View`
  flex: 1;
  justify-content: space-between;
  padding-bottom: 20px;
`;

export const CameraShutterContainer = styled.View`
  width: 174px;
  align-self: center;
`;

export const CameraHeader = styled.View`
  flex-direction: row;
  justify-content: space-between;
  padding: 30px;
`;

export const StyledLinearGradient = styled(LinearGradient)`
  flex: 1;
  position: absolute;
  width: 100%;
  height: 100%;
`;
