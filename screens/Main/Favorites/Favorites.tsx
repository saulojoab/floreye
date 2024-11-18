import {
  FavoriteContainer,
  FavoriteImage,
  FavoriteContent,
  FavoriteTextContainer,
  FavoriteTitle,
  FavoriteDescription,
  FavoriteButton,
} from "./Favorites.style";
import Icon from "@expo/vector-icons/FontAwesome5";

export default function Favorites() {
  return (
    <FavoriteContainer>
      <FavoriteImage
        source={{
          uri: "https://s2-casaejardim.glbimg.com/4nlGTIoOkf5STNkBySm7UJM09fc=/0x0:1400x933/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_a0b7e59562ef42049f4e191fe476fe7d/internal_photos/bs/2023/q/z/dVB4eHRwmrT9NhAnGBcw/8-como-plantar-morango-saiba-como-fazer-o-plantio-cuidar-e-quando-colher.jpg",
        }}
      />

      <FavoriteContent>
        <FavoriteTextContainer>
          <FavoriteTitle>Favorites</FavoriteTitle>
          <FavoriteDescription>See your favorite plants.</FavoriteDescription>
        </FavoriteTextContainer>
        <FavoriteButton>
          <Icon name="arrow-right" size={24} color="white" />
        </FavoriteButton>
      </FavoriteContent>
    </FavoriteContainer>
  );
}
