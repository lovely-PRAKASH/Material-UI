import { Avatar, AvatarGroup, Box, Typography } from "@mui/material";
import React from "react";
import anglePic from '../assets/avatars/angle.jpg';
import gokuPic from '../assets/avatars/goku.jpg';
import captionShieldpic from '../assets/avatars/captianShield.jpg';
import deadPoolPic from '../assets/avatars/deadPool.jpg';
import gostRaiderPic from '../assets/avatars/gostRaider.jpg';
import gymGirlPic from '../assets/avatars/gymGirl.jpg';

function RightBar() {
  return (
    <Box
      // bgcolor="pink"
      flex={2}
      p={2}
      sx={{ display: { xs: "none", sm: "block" } }}
    >
      <Box position="fixed">
        <Typography variant="h6" fontWeight={200}>
          OnlineFriends
        </Typography>
        <AvatarGroup max={4}>
          <Avatar alt="Remy Sharp" src={captionShieldpic} />
          <Avatar alt="Travis Howard" src={gokuPic} />
          <Avatar alt="Cindy Baker" src={gymGirlPic} />
          <Avatar alt="Agnes Walker" src={deadPoolPic} />
          <Avatar alt="Trevor Henderson" src={gostRaiderPic} />
        </AvatarGroup>
      </Box>
    </Box>
  );
}

export default RightBar;
