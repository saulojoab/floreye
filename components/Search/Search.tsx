import { InputContainer, StyledTextInput } from "./Search.style";
import Icon from "@expo/vector-icons/FontAwesome5";
import { ISearch } from "./Search.type";

export default function Search({ placeholder, onBlur, onFocus }: ISearch) {
  return (
    <InputContainer>
      <Icon name="search" size={16} color="white" />
      <StyledTextInput
        placeholder={placeholder}
        placeholderTextColor={"white"}
        onFocus={onBlur}
        onBlur={onFocus}
      />
    </InputContainer>
  );
}
