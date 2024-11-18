import Icon from "@expo/vector-icons/FontAwesome5";
import { StyledIconButton } from "./IconButton.style";
import { IIconButton } from "./IconButton.type";

export default function IconButton({ name, onPress }: IIconButton) {
  return (
    <StyledIconButton onPress={onPress}>
      <Icon name={name} size={20} color="white" />
    </StyledIconButton>
  );
}
