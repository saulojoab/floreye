import styled from "styled-components/native";

export const FavoriteContainer = styled.TouchableOpacity`
  flex-direction: column;
  gap: 10px;
`;

export const FavoriteImage = styled.Image`
  width: 100%;
  height: 272px;
  border-radius: 12px;
`;

export const FavoriteContent = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  gap: 10px;
`;

export const FavoriteTitle = styled.Text`
  font-size: 16px;
  font-weight: 700;
  color: white;
`;

export const FavoriteDescription = styled.Text`
  font-size: 14px;
  font-weight: 300;
  color: white;
`;

export const FavoriteTextContainer = styled.View`
  flex-direction: column;
  gap: 3px;
`;

export const FavoriteButton = styled.TouchableOpacity`
  padding: 10px;
  align-items: center;
`;
