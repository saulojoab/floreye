import { FlatList } from "react-native";
import {
  CarouselContainer,
  CarouselDescription,
  CarouselImage,
  CarouselTitle,
} from "./RecentPlants.style";

export default function RecentPlants() {
  const uri =
    "https://mondiniplantas.cdn.magazord.com.br/img/2024/06/produto/5339/muda-mirtilo-mondini-plantas.png?ims=800x800";

  return (
    <FlatList
      horizontal
      data={[
        {
          uri: uri,
          title: "Plant 1",
          description: "Description 1",
        },
        {
          uri: uri,
          title: "Plant 2",
          description: "Description 2",
        },
        {
          uri: uri,
          title: "Plant 3",
          description: "Description 3",
        },
      ]}
      renderItem={({ item }) => (
        <CarouselContainer>
          <CarouselImage source={{ uri: item.uri }} />
          <CarouselTitle>{item.title}</CarouselTitle>
          <CarouselDescription>{item.description}</CarouselDescription>
        </CarouselContainer>
      )}
    />
  );
}
