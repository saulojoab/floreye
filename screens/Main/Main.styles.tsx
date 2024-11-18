import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  background-color: #191919;
  padding: 20px;
  gap: 20px;
`;

export const InformationContainer = styled.View`
  flex-direction: row;
  gap: 10px;
`;

export const Information = styled.View`
  flex: 1;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const InformationTitle = styled.Text`
  font-size: 14px;
  font-weight: 300;
  color: white;
`;

export const InformationNumber = styled.Text`
  font-size: 19px;
  font-weight: 900;
  color: white;
  margin-top: -3px;
`;

export const GuideContainer = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

export const GuideText = styled.Text`
  font-size: 16px;
  font-weight: 300;
  color: white;
  text-align: center;
`;
