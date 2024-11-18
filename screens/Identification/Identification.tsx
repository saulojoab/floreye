import OutlinedButton from "@/components/OutlinedButton/OutlinedButton";
import {
  Bold,
  CloseContainer,
  Container,
  PlantDescription,
  PlantImage,
  PlantImageContainer,
  PlantImageOverlay,
  PlantInformationContainer,
  PlantTitle,
  PlantTitleContainer,
  StyledLinearGradient,
} from "./Identification.style";
import IconButton from "@/components/IconButton/IconButton";
import { useLocalSearchParams, useNavigation, useRouter } from "expo-router";
import { IPredictionResult } from "../Picture/Picture.type";

export default function Identification() {
  const { plants: plantsString } = useLocalSearchParams();
  const { navigate } = useNavigation();

  console.log(plantsString);

  return (
    <Container>
      <PlantImageContainer>
        <PlantImage
          source={{
            uri: "https://mondiniplantas.cdn.magazord.com.br/img/2024/06/produto/5339/muda-mirtilo-mondini-plantas.png?ims=800x800",
          }}
        />
        <PlantImageOverlay>
          <CloseContainer>
            <IconButton
              name="times"
              onPress={() => navigate("index" as never)}
              noBg
            />
          </CloseContainer>
          <StyledLinearGradient
            colors={["rgba(25,25,25,1)", "transparent", "transparent"]}
          />
        </PlantImageOverlay>
      </PlantImageContainer>
      <PlantInformationContainer>
        <PlantTitleContainer>
          <PlantTitle>Blueberry</PlantTitle>
        </PlantTitleContainer>

        <PlantDescription>
          The scientific name of the <Bold>INSERT</Bold> is <Bold>INSERT</Bold>.
          She is from the <Bold>INSERT</Bold> family.
        </PlantDescription>

        <PlantDescription>
          It is also known as: <Bold>INSERT</Bold>
        </PlantDescription>
      </PlantInformationContainer>
      <OutlinedButton text="+ Add to Favorites" onPress={() => {}} />
    </Container>
  );
}
