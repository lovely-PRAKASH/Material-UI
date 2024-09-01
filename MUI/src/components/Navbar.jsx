import {
  AppBar,
  Avatar,
  Badge,
  Box,
  InputBase,
  Menu,
  MenuItem,
  styled,
  Toolbar,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import profilePic from "../assets/profile.jpg";
import { Pets, Mail, Notifications } from "@mui/icons-material";
import SearchIcon from "@mui/icons-material/Search";
import TravelExploreIcon from '@mui/icons-material/TravelExplore';

const StyledToolbar = styled(Toolbar)({
  display: "flex",
  justifyContent: "space-between",
});

const Search = styled("div")(({ theme }) => ({
  backgroundColor: theme.palette.background.paper,
  color: theme.palette.text.primary,
  padding: "0 10px",
  borderRadius: theme.shape.borderRadius,
  width: "40%",
  display:"flex",
  // justifyContent:"center",
  alignItems: "center",
  gap: 10
}));

const Icons = styled(Box)(({ theme }) => ({
  display: "none",
  alignItems: "center",
  gap: "20px",
  [theme.breakpoints.up("sm")]: {
    display: "flex",
  },
}));

const Userbox = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  gap: "20px",
  [theme.breakpoints.up("sm")]: {
    display: "none",
  },
}));

const Navbar = () => {
  const [open, setOpen] = useState(false);
  return (
    <AppBar position="sticky">
      <StyledToolbar>
        <Typography variant="h6" sx={{ display: { xs: "none", sm: "block" } }}>
          {'< Prakash Dev />'}
        </Typography>
        <Pets sx={{ display: { xs: "block", sm: "none" } }} />
        <Search>
          {/* <SearchIcon></SearchIcon> */}
          <TravelExploreIcon ></TravelExploreIcon>
          <InputBase placeholder="Search..." fullWidth/>
        </Search>
        <Icons>
          <Badge badgeContent={4} color="error">
            <Mail />
          </Badge>
          <Badge badgeContent={4} color="error">
            <Notifications />
          </Badge>
          <Avatar
            onClick={(e) => setOpen(true)}
            sx={{ width: "30px", height: "30px" }}
            src={profilePic}
          />
        </Icons>
        <Userbox>
          <Avatar
            onClick={(e) => setOpen(true)}
            sx={{ width: "30px", height: "30px" }}
            src={profilePic}
          />
          <Typography variant="span">Prakash</Typography>
        </Userbox>
      </StyledToolbar>
      <Menu
        id="demo-positioned-menu"
        aria-labelledby="demo-positioned-button"
        open={open}
        onClose={(e) => setOpen(false)}
        anchorOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
      >
        <MenuItem>Profile</MenuItem>
        <MenuItem>Logout</MenuItem>
        <MenuItem>My account</MenuItem>
      </Menu>
    </AppBar>
  );
};

export default Navbar;
