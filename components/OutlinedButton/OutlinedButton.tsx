import { ButtonText, StyledOutlinedButton } from "./OutlinedButton.style";
import { IOutlinedButton } from "./OutlinedButton.type";

export default function OutlinedButton({ text, onPress }: IOutlinedButton) {
  return (
    <StyledOutlinedButton>
      <ButtonText>{text}</ButtonText>
    </StyledOutlinedButton>
  );
}
