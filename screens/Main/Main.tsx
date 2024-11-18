import Search from "@/components/Search/Search";
import {
  Container,
  GuideContainer,
  GuideText,
  Information,
  InformationContainer,
  InformationNumber,
  InformationTitle,
} from "./Main.styles";
import Favorites from "./Favorites/Favorites";
import RecentPlants from "./RecentPlants/RecentPlants";
import IconButton from "@/components/IconButton/IconButton";
import React from "react";
import { useNavigation } from "expo-router";
import { useMainService } from "./Main.service";

export default function MainScreen() {
  const { remainingRequests, totalPlants, favorites, recentPlants } =
    useMainService();

  const { navigate } = useNavigation();

  const shouldDisplayGuide =
    favorites.length === 0 && recentPlants.length === 0;

  return (
    <Container>
      {favorites.length > 0 && <Favorites /*favorites={favorites}*/ />}
      {recentPlants.length > 0 && (
        <RecentPlants /*recentPlants={recentPlants}*/ />
      )}
      {shouldDisplayGuide && (
        <GuideContainer>
          <GuideText>
            Use the Camera button below to identify plants :)
          </GuideText>
        </GuideContainer>
      )}

      <InformationContainer>
        <Information>
          <InformationTitle>Plants</InformationTitle>
          <InformationNumber>{totalPlants}</InformationNumber>
        </Information>
        <Information>
          <InformationTitle>Remaining Today</InformationTitle>
          <InformationNumber>
            {remainingRequests ?? "Not sure yet..."}
          </InformationNumber>
        </Information>
      </InformationContainer>
      <IconButton onPress={() => navigate("camera" as never)} name="camera" />
    </Container>
  );
}
