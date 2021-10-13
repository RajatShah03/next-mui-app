import {
  AppBar,
  CssBaseline,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Toolbar,
  Typography,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import React, { useContext, useState } from "react";
import { Box } from "@mui/system";
import { DarkMode, LightMode } from "@mui/icons-material";
import { ModeContext } from "../theme";

export const allThemes = [
  {
    name: "Original",
    color: "#1976d2",
  },
  {
    name: "Teal",
    color: "#009688",
  },
];

const DrawerMenu = (toggle, setTheme) => (
  <Box
    sx={{ width: 250, p: 2 }}
    role="presentation"
    onClick={toggle}
    onKeyDown={toggle}
  >
    <Typography variant="h6" gutterBottom gutterTop>
      Choose a theme
    </Typography>
    <List>
      {allThemes.map((theme) => (
        <ListItem button key={theme.name} onClick={() => setTheme(theme.name)}>
          <ListItemIcon>
            <Box
              sx={{
                borderRadius: "50%",
                backgroundColor: theme.color,
                width: 22,
                height: 22,
                overflow: "hidden",
              }}
            />
          </ListItemIcon>
          <ListItemText primary={theme.name} />
        </ListItem>
      ))}
    </List>
  </Box>
);

const Layout = ({ children, setTheme }) => {
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
        {DrawerMenu(toggleDrawer, setTheme)}
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
