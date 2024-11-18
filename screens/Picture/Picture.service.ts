import { useCameraPermissions } from "expo-camera";
import { useState } from "react";

export const usePictureService = () => {
  const [permission, requestPermission] = useCameraPermissions();
  const [flash, setFlash] = useState(false);
  const [loading, setLoading] = useState(false);

  function toggleFlash() {
    setFlash((f) => !f);
  }

  function processImage() {
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
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
