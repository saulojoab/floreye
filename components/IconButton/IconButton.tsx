import Icon from "@expo/vector-icons/FontAwesome5";
import { StyledIconButton } from "./IconButton.style";
import { IIconButton } from "./IconButton.type";

export default function IconButton({ name, onPress, noBg }: IIconButton) {
  return (
    <StyledIconButton onPress={onPress} noBg={noBg}>
      <Icon name={name} size={20} color="white" />
    </StyledIconButton>
  );
}
