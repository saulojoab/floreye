import IconButton from "@/components/IconButton/IconButton";
import { NoPermissionContainer, NoPermissionText } from "./NoPermission.style";
import { INoPermission } from "./NoPermission.type";

export default function NoPermission({ requestPermission }: INoPermission) {
  return (
    <NoPermissionContainer>
      <NoPermissionText>
        We need your permission to show the camera.
      </NoPermissionText>
      <IconButton onPress={requestPermission} name="camera" />
    </NoPermissionContainer>
  );
}
