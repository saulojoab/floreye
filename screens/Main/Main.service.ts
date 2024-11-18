import api from "@/services/api";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useEffect, useState } from "react";

export const useMainService = () => {
  const [remainingRequests, setRemainingRequests] = useState(-1);
  const [totalPlants, setTotalPlants] = useState(0);
  const [favorites, setFavorites] = useState([]);
  const [recentPlants, setRecentPlants] = useState([]);

  const [isSearching, setIsSearching] = useState(false);

  async function getFavorites() {
    const favorites = await AsyncStorage.getItem("favorites");

    if (favorites) {
      setFavorites(JSON.parse(favorites));
    }
  }

  async function getTotalPlants() {
    const total = await AsyncStorage.getItem("totalPlants");

    if (total) {
      setTotalPlants(JSON.parse(total).length);
      setRecentPlants(JSON.parse(total));
    }
  }

  async function getRemainingRequests() {
    const response = await api.get(
      "/v2/quota/daily?day=" + new Date().toISOString().split("T")[0]
    );

    if (response.data) {
      setRemainingRequests(response.data.remaining.identify);
    }
  }

  useEffect(() => {
    getTotalPlants();
    getRemainingRequests();
  }, []);

  return {
    remainingRequests,
    isSearching,
    setIsSearching,
    totalPlants,
    favorites,
    recentPlants,
  };
};
