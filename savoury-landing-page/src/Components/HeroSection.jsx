import React, { useState } from "react";
import video from "../Images/v3.mp4";
import Logo from "../Images/logo6.png";
import { motion } from "framer-motion";
import HomeIcon from "@mui/icons-material/Home";
import InfoIcon from "@mui/icons-material/Info";
import LocalDiningIcon from "@mui/icons-material/LocalDining";
import BookIcon from "@mui/icons-material/Book";
import CommentRoundedIcon from "@mui/icons-material/CommentRounded";
import PhoneRoundedIcon from "@mui/icons-material/PhoneRounded";
import { HiOutlineBars3 } from "react-icons/hi2";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";

const HeroSection = () => {
  const [openMenu, setOpenMenu] = useState(false);
  const menuOptions = [
    {
      text: "Home",
      icon: <HomeIcon />,
    },
    {
      text: "About",
      icon: <InfoIcon />,
    },
    {
      text: "Recipes",
      icon: <LocalDiningIcon />,
    },
    {
      text: "Blogs",
      icon: <BookIcon />,
    },
    {
      text: "Testmonials",
      icon: <CommentRoundedIcon />,
    },
    {
      text: "Contact",
      icon: <PhoneRoundedIcon />,
    },
  ];
  return (
    <div className="hero-section">
      <div className="overlay"></div>
      <video className="bg-video" src={video} autoPlay loop muted />
      <div className="navbar-section">
        <div className="logo-container">
          <img src={Logo} alt="" className="logo" />
        </div>
        <div className="navbar-links">
          <ul>
            <li>Home</li>
            <li>About</li>
            <li>Recipes</li>
            <li>Blogs</li>
            <li>Testimonials</li>
            <li>Contact</li>
          </ul>
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="order-btn"
          >
            Order
          </motion.button>
        </div>
        <div className="navbar-menu-container">
          <HiOutlineBars3 onClick={() => setOpenMenu(true)} className="menu" />
        </div>
        <Drawer
          open={openMenu}
          onClose={() => setOpenMenu(false)}
          anchor="right"
          className="drawer"
        >
          <Box
            sx={{ width: 250 }}
            role="presentation"
            onClick={() => setOpenMenu(false)}
            onKeyDown={() => setOpenMenu(false)}
            className="box"
          >
            <List className="list">
              {menuOptions.map((item) => (
                <ListItem key={item.text} disablePadding className="listtem">
                  <ListItemButton className="listbtn">
                    <ListItemIcon className="icon">{item.icon}</ListItemIcon>
                    <ListItemText primary={item.text} className="listtext" />
                  </ListItemButton>
                </ListItem>
              ))}
            </List>
            <Divider />
          </Box>
        </Drawer>
      </div>
      <div className="hero-section-text-container">
        <div className="primary-heading">
          <h1 className="main">Food That Makes you Happy</h1>
          <h2 className="sub">
            We treat your Taste Buds with Delicious and Mouth Watering Dishes!
          </h2>
        </div>
      </div>
      <div className="button-tag">
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="btn"
        >
          Savor Dishes!
        </motion.button>
      </div>
    </div>
  );
};

export default HeroSection;
