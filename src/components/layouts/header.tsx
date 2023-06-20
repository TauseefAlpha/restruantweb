import {
  AppBar,
  Avatar,
  Box,
  Divider,
  Drawer,
  IconButton,
  Toolbar,
  Typography,
  Tooltip,
  Menu,
  MenuItem,
} from "@mui/material";
import React, { useState } from "react";
import "../../styles/Headerstyles.css";
import RamenDiningIcon from "@mui/icons-material/RamenDining";
import { Link, useNavigate } from "react-router-dom";

import MenuIcon from "@mui/icons-material/Menu";

const Header = () => {
  const [mobilescreen, setMobilescreen] = useState<boolean>(false);
  const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(
    null
  );

  const navigate = useNavigate();

  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };

  const handledrawerToggle = () => {
    setMobilescreen(!mobilescreen);
  };

  //drawer function which diectly return
  const drawer = (
    <Box onClick={handledrawerToggle} sx={{ textAlign: "center", p: 1 }}>
      <Typography variant="h5" color={"#9e9d24"} sx={{ flexGrow: 1, my: 2 }}>
        <RamenDiningIcon />
        FoodResturant
      </Typography>
      <Divider />
      <ul className="mobile-menu">
        <li>
          <Link to="/home">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
        <li>
          <Link to="/gallary">Gallary</Link>
        </li>
        <li>
          <Link to="/menu">Menu</Link>
        </li>
      </ul>
    </Box>
  );

  return (
    <Box>
      <AppBar sx={{ bgcolor: "black" }}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            sx={{ mr: 2, display: { sm: "none" } }}
            onClick={handledrawerToggle}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h5" color={"#9e9d24"} sx={{ flexGrow: 1 }}>
            <RamenDiningIcon />
            FoodResturant
          </Typography>
          <Box sx={{ display: { xs: "none", sm: "block" } }}>
            <ul className="navigation-menu">
              <li>
                <Link to="/home">Home</Link>
              </li>
              <li>
                <Link to="/about">About</Link>
              </li>
              <li>
                <Link to="/contact">Contact</Link>
              </li>
              <li>
                <Link to="/gallary">Gallary</Link>
              </li>
              <li>
                <Link to="/menu">Menu</Link>
              </li>
            </ul>
          </Box>

          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar
                  alt="Remy Sharp"
                  src="https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aHVtYW58ZW58MHx8MHx8fDA%3D&w=1000&q=80"
                />
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: "45px" }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={Boolean(anchorElUser)}
              onClose={() => {
                setAnchorElUser(null);
              }}
            >
              <MenuItem
                onClick={() => {
                  localStorage.removeItem("accessToken");
                  navigate("/");
                }}
              >
                <Typography>LogOut</Typography>
              </MenuItem>
            </Menu>
          </Box>
        </Toolbar>
      </AppBar>

      <Box component={"nav"}>
        <Drawer
          variant="temporary"
          open={mobilescreen}
          onClick={handledrawerToggle}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": { boxSizing: "border-box", width: "230px" },
          }}
        >
          {drawer}
        </Drawer>
      </Box>
      <Box sx={{ padding: 0 }}>
        <Toolbar />
      </Box>
    </Box>
  );
};

export default Header;
