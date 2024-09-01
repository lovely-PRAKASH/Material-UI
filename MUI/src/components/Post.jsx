import { Favorite, FavoriteBorder, MoreVert, Share } from "@mui/icons-material";
import {
  Avatar,
  Box,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  CardMedia,
  Checkbox,
  IconButton,
  Typography,
} from "@mui/material";
import React from "react";
import spidermanPic from "../assets/spider-man.jpg";
const Post = () => {
  return (
    <Box flex={4} mt={2}>
      <Box>
        <Card>
          <CardHeader
            avatar={
              <Avatar sx={{ bgcolor: "darkviolet" }} aria-label="recipe">
                LP
              </Avatar>
            }
            action={
              <IconButton aria-label="settings">
                <MoreVert />
              </IconButton>
            }
            title="Lovely_Prakash007"
            subheader="March 27, 2002"
          />
          <CardMedia
            component="img"
            height="20%"
            image={spidermanPic}
            alt="Spiderman post"
          />
          <CardContent>
            <Typography variant="body2" sx={{ color: "text.secondary" }}>
              This impressive paella is a perfect party dish and a fun meal to
              cook together with your guests. Add 1 cup of frozen peas along
              with the mussels, if you like.
            </Typography>
          </CardContent>
          <CardActions disableSpacing>
            <IconButton aria-label="add to favorites">
              <Checkbox
                icon={<FavoriteBorder />}
                checkedIcon={<Favorite sx={{ color: "red" }} />}
              />
            </IconButton>
            <IconButton aria-label="share">
              <Share />
            </IconButton>
          </CardActions>
        </Card>
      </Box>
    </Box>
  );
};

export default Post;
