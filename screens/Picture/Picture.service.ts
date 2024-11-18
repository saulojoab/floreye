import { useCameraPermissions } from "expo-camera";
import { useNavigation } from "expo-router";
import { useState } from "react";

export const usePictureService = () => {
  const [permission, requestPermission] = useCameraPermissions();
  const [flash, setFlash] = useState(false);
  const [loading, setLoading] = useState(false);

  const { navigate } = useNavigation();

  function toggleFlash() {
    setFlash((f) => !f);
  }

  function processImage() {
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
      navigate("identification" as never);
    }, 2000);
  }

  return {
    permission,
    requestPermission,
    flash,
    toggleFlash,
    processImage,
    loading,
  };
};
