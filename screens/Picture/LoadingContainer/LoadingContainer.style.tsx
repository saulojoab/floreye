import styled from "styled-components/native";

export const LoadingOverlay = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  background-color: rgba(0, 0, 0, 0.7);
  position: absolute;
  width: 100%;
  height: 100%;
`;

export const LoadingText = styled.Text`
  font-size: 16px;
  font-weight: 300;
  color: white;
`;
