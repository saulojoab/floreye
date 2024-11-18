import api from "@/services/api";
import { CameraView, CameraViewProps, useCameraPermissions } from "expo-camera";
import { useNavigation, useRouter } from "expo-router";
import { useRef, useState } from "react";
import { IPredictionResult } from "./Picture.type";

export const usePictureService = () => {
  const [permission, requestPermission] = useCameraPermissions();
  const [flash, setFlash] = useState(false);
  const [loading, setLoading] = useState(false);

  const cameraRef = useRef<CameraView | null>(null);

  const { push } = useRouter();

  function toggleFlash() {
    setFlash((f) => !f);
  }

  async function processImage() {
    setLoading(true);

    if (cameraRef.current) {
      const photo = await cameraRef?.current?.takePictureAsync({
        quality: 0.1,
      });

      if (photo) {
        console.log("START IDENTIFIER");
        const formData = new FormData();
        const imageBlob = await fetch(photo.uri).then((res) => res.blob());
        const imageFile = new File([imageBlob], "plant.jpg", {
          type: "image/jpeg",
        });

        formData.append("organs", "auto");
        formData.append("images", imageBlob);

        formData.forEach((value, key) => console.log(key, value));

        const response = await api.post("/v2/identify/all", formData, {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        });

        console.log(response);

        if (response.data) {
          const plants = response.data.results as IPredictionResult[];

          push({
            pathname: "/identification",
            params: { plants: JSON.stringify(plants) },
          });
        }
      }
    }

    setLoading(false);
  }

  return {
    permission,
    requestPermission,
    flash,
    toggleFlash,
    processImage,
    loading,
    cameraRef,
  };
};
