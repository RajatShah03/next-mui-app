import {
  AppBar,
  CssBaseline,
  Drawer,
  IconButton,
  Toolbar,
  Typography,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import React, { useContext, useState } from "react";
import { Box } from "@mui/system";
import { DarkMode, LightMode } from "@mui/icons-material";
import { ModeContext } from "../theme";
import DrawerMenu from "./DrawerMenu";

const Layout = ({ children }) => {
  const { mode, toggleMode } = useContext(ModeContext);
  const [open, setOpen] = useState(false);

  const toggleDrawer = () => setOpen(!open);

  return (
    <>
      <CssBaseline />
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
            onClick={toggleDrawer}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" sx={{ flexGrow: 1 }}>
            Header
          </Typography>
          <IconButton onClick={toggleMode}>
            {mode === "dark" ? <DarkMode /> : <LightMode />}
          </IconButton>
        </Toolbar>
      </AppBar>
      <Drawer anchor="left" open={open} onClose={toggleDrawer}>
        <DrawerMenu toggle={toggleDrawer} />
      </Drawer>
      {children}
      <footer>
        <Box sx={{ borderTop: 0.5, borderColor: "#ddd", p: 2 }}>
          <Typography variant="body2" color="text.secondary" align="center">
            Footer
          </Typography>
        </Box>
      </footer>
    </>
  );
};

export default Layout;
