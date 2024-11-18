import styled from "styled-components/native";

export const CarouselContainer = styled.TouchableOpacity`
  flex-direction: column;
  gap: 5px;
  flex: 1;
  margin-right: 10px;
`;

export const CarouselImage = styled.Image`
  width: 152px;
  height: 152px;
  border-radius: 12px;
`;

export const CarouselTitle = styled.Text`
  font-size: 16px;
  font-weight: 700;
  color: white;
`;

export const CarouselDescription = styled.Text`
  font-size: 14px;
  font-weight: 300;
  color: white;
  margin-top: -3px;
`;
