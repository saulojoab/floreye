import {
  Camera,
  CameraHeader,
  CameraShutterContainer,
  Container,
  ControlsContainer,
  StyledLinearGradient,
} from "./Picture.style";
import IconButton from "@/components/IconButton/IconButton";
import Icon from "@expo/vector-icons/FontAwesome5";
import { TouchableOpacity, View } from "react-native";
import { useNavigation } from "expo-router";
import NoPermission from "./NoPermission/NoPermission";
import { usePictureService } from "./Picture.service";
import React from "react";
import LoadingContainer from "./LoadingContainer/LoadingContainer";

export default function PictureScreen() {
  const {
    flash,
    permission,
    requestPermission,
    toggleFlash,
    loading,
    processImage,
    cameraRef,
  } = usePictureService();

  const { navigate } = useNavigation();

  if (!permission) {
    return <View />;
  }

  if (!permission.granted) {
    return <NoPermission requestPermission={requestPermission} />;
  }

  return (
    <Container>
      <Camera facing="back" flash={flash ? "on" : "off"} ref={cameraRef}>
        {loading ? (
          <LoadingContainer />
        ) : (
          <>
            <StyledLinearGradient
              colors={[
                "rgba(25,25,25,0.8)",
                "transparent",
                "rgba(25,25,25,0.8)",
              ]}
            />

            <ControlsContainer>
              <CameraHeader>
                <Icon
                  name="arrow-left"
                  color="white"
                  size={24}
                  onPress={() => navigate("index" as never)}
                />
                <TouchableOpacity onPress={toggleFlash}>
                  <Icon name={"bolt"} color="white" size={24} />
                </TouchableOpacity>
              </CameraHeader>

              <CameraShutterContainer>
                <IconButton onPress={processImage} name="camera" />
              </CameraShutterContainer>
            </ControlsContainer>
          </>
        )}
      </Camera>
    </Container>
  );
}
