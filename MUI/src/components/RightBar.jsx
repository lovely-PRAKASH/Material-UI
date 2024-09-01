import {
  Avatar,
  AvatarGroup,
  Box,
  Divider,
  ImageList,
  ImageListItem,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Typography,
} from "@mui/material";
import React from "react";
import anglePic from "../assets/avatars/angle.jpg";
import gokuPic from "../assets/avatars/goku.jpg";
import captionShieldpic from "../assets/avatars/captianShield.jpg";
import deadPoolPic from "../assets/avatars/deadPool.jpg";
import gostRaiderPic from "../assets/avatars/gostRaider.jpg";
import gymGirlPic from "../assets/avatars/gymGirl.jpg";

function RightBar() {
  return (
    <Box
      // bgcolor="pink"
      flex={2}
      p={2}
      sx={{ display: { xs: "none", sm: "block" } }}
    >
      <Box position="fixed" width={300}>
        <Typography variant="h6" fontWeight={100}>
          OnlineFriends
        </Typography>
        <AvatarGroup max={7} >
          <Avatar alt="Remy Sharp" src={captionShieldpic} />
          <Avatar alt="Travis Howard" src={gokuPic} />
          <Avatar alt="Travis Howard" src={anglePic} />
          <Avatar alt="Cindy Baker" src={gymGirlPic} />
          <Avatar alt="Trevor Henderson" src="" />
          <Avatar alt="Agnes Walker" src={deadPoolPic} />
          <Avatar alt="Trevor Henderson" src={gostRaiderPic} />
          <Avatar alt="Trevor Henderson" src="" />
          <Avatar alt="Trevor Henderson" src="" />
        </AvatarGroup>
        <Typography variant="h6" fontWeight={100} mt={2} mb={2}>
          Latest Photos
        </Typography>
        <ImageList cols={3} rowHeight={100} gap={5}>
          <ImageListItem>
            <img src="https://material-ui.com/static/images/image-list/breakfast.jpg" />
          </ImageListItem>
          <ImageListItem>
            <img src="https://material-ui.com/static/images/image-list/burgers.jpg" />
          </ImageListItem>
          <ImageListItem>
            <img src="https://material-ui.com/static/images/image-list/Camera.jpg" />
          </ImageListItem>
          <ImageListItem>
            <img src="https://material-ui.com/static/images/image-list/Honey.jpg" />
          </ImageListItem>
          <ImageListItem>
            <img src="https://material-ui.com/static/images/image-list/Hats.jpg" />
          </ImageListItem>
          <ImageListItem>
            <img src="https://material-ui.com/static/images/image-list/Honey.jpg" />
          </ImageListItem>
        </ImageList>
        <Typography variant="h6" fontWeight={100} mt={2}>
          Latest Converation
        </Typography>
        <List
          sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}
        >
          <ListItem alignItems="flex-start">
            <ListItemAvatar>
              <Avatar alt="Remy Sharp" src="https://material-ui.com/static/images/avatar/1.jpg" />
            </ListItemAvatar>
            <ListItemText
              primary="Brunch this weekend?"
              secondary={
                <React.Fragment>
                  <Typography
                    component="span"
                    variant="body2"
                    sx={{ color: "text.primary", display: "inline" }}
                  >
                    Ali Connors
                  </Typography>
                  {" — I'll be in your neighborhood doing errands this…"}
                </React.Fragment>
              }
            />
          </ListItem>
          <Divider variant="inset" component="li" />
          <ListItem alignItems="flex-start">
            <ListItemAvatar>
              <Avatar alt="Travis Howard" src="/static/images/avatar/2.jpg" />
            </ListItemAvatar>
            <ListItemText
              primary="Summer BBQ"
              secondary={
                <React.Fragment>
                  <Typography
                    component="span"
                    variant="body2"
                    sx={{ color: "text.primary", display: "inline" }}
                  >
                    to Scott, Alex, Jennifer
                  </Typography>
                  {" — Wish I could come, but I'm out of town this…"}
                </React.Fragment>
              }
            />
          </ListItem>
          <Divider variant="inset" component="li" />
          <ListItem alignItems="flex-start">
            <ListItemAvatar>
              <Avatar alt="Cindy Baker" src="/static/images/avatar/3.jpg" />
            </ListItemAvatar>
            <ListItemText
              primary="Oui Oui"
              secondary={
                <React.Fragment>
                  <Typography
                    component="span"
                    variant="body2"
                    sx={{ color: "text.primary", display: "inline" }}
                  >
                    Sandra Adams
                  </Typography>
                  {" — Do you have Paris recommendations? Have you ever…"}
                </React.Fragment>
              }
            />
          </ListItem>
        </List>
      </Box>
    </Box>
  );
}

export default RightBar;
