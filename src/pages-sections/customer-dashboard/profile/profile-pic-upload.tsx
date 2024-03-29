import Box from "@mui/material/Box";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import CameraEnhance from "@mui/icons-material/CameraEnhance";
// GLOBAL CUSTOM COMPONENTS
import FlexBox from "components/flex-box/flex-box";

export default function ProfilePicUpload() {
  return (
    <FlexBox alignItems="flex-end" mb={3}>
      <Avatar
        alt="user"
        src="/assets/images/faces/ralph.png"
        sx={{ height: 64, width: 64 }}
      />
    </FlexBox>
  );
}
