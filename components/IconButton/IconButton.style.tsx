import styled from "styled-components/native";
import { IStyledIconButton } from "./IconButton.type";

export const StyledIconButton = styled.TouchableOpacity<IStyledIconButton>`
  padding: 20px;
  align-items: center;
  justify-content: center;
  background-color: ${({ noBg }) => (noBg ? "transparent" : "#333333")};
  border-radius: 40px;
`;
