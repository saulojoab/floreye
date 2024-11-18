import { LinearGradient } from "expo-linear-gradient";
import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
`;

export const PlantImageContainer = styled.View`
  flex: 1;
`;

export const PlantImage = styled.Image`
  flex: 1;
`;

export const PlantInformationContainer = styled.View`
  padding: 20px;
  flex: 1;
`;

export const PlantTitleContainer = styled.View`
  flex-direction: row;
  align-items: center;
  gap: 10px;
  justify-content: space-between;
  margin-bottom: 20px;
`;

export const PlantTitle = styled.Text`
  font-size: 26px;
  font-weight: 600;
  color: white;
`;

export const PlantDescription = styled.Text`
  font-size: 16px;
  font-weight: 300;
  color: white;
  margin-bottom: 20px;
`;

export const Bold = styled.Text`
  font-weight: 600;
`;

export const PlantImageOverlay = styled.View`
  flex: 1;
  position: absolute;
  width: 100%;
  height: 100%;
`;

export const StyledLinearGradient = styled(LinearGradient)`
  flex: 1;
  position: absolute;
  width: 100%;
  height: 100%;
`;

export const CloseContainer = styled.View`
  position: absolute;
  top: 20px;
  right: 20px;
  z-index: 10;
`;
