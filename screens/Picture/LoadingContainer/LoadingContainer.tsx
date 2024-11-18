import { ActivityIndicator } from "react-native";
import { LoadingOverlay, LoadingText } from "./LoadingContainer.style";
import React from "react";

export default function LoadingContainer() {
  return (
    <>
      <LoadingOverlay>
        <ActivityIndicator size={"large"} color="white" />
        <LoadingText>We are identifying the plant...</LoadingText>
      </LoadingOverlay>
    </>
  );
}
