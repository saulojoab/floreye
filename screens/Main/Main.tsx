import Search from "@/components/Search/Search";
import {
  Container,
  Information,
  InformationContainer,
  InformationNumber,
  InformationTitle,
} from "./Main.styles";
import Favorites from "./Favorites/Favorites";
import RecentPlants from "./RecentPlants/RecentPlants";
import IconButton from "@/components/IconButton/IconButton";
import { useState } from "react";
import React from "react";
import { useNavigation } from "expo-router";

export default function MainScreen() {
  const [isSearching, setIsSearching] = useState(false);

  const { navigate } = useNavigation();

  return (
    <Container>
      <Search
        placeholder="Search"
        onFocus={() => setIsSearching(true)}
        onBlur={() => setIsSearching(false)}
      />
      {isSearching ? (
        <></>
      ) : (
        <>
          <Favorites />
          <RecentPlants />
          <InformationContainer>
            <Information>
              <InformationTitle>Plants</InformationTitle>
              <InformationNumber>100</InformationNumber>
            </Information>
            <Information>
              <InformationTitle>Remaining Today</InformationTitle>
              <InformationNumber>10</InformationNumber>
            </Information>
          </InformationContainer>
          <IconButton
            onPress={() => navigate("camera" as never)}
            name="camera"
          />
        </>
      )}
    </Container>
  );
}
