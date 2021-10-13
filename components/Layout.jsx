import {
  AppBar,
  CssBaseline,
  IconButton,
  Toolbar,
  Typography,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import React from "react";
import { Box } from "@mui/system";

const Layout = ({ children }) => {
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
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6">Header</Typography>
        </Toolbar>
      </AppBar>
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
