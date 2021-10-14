import {
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Typography,
} from "@mui/material";
import React, { useContext } from "react";
import { Box } from "@mui/system";
import { Check } from "@mui/icons-material";
import { ModeContext } from "../theme";
import { styled } from "@mui/styles";

const allThemes = [
  {
    name: "Original",
    color: "#1976d2",
  },
  {
    name: "Teal",
    color: "#009688",
  },
];

const WhiteCheckIcon = styled(Check)(({ theme }) => ({
  color:
    theme.palette.mode === "light"
      ? theme.palette.common.white
      : theme.palette.common.black,
  fontSize: 16,
}));

const DrawerMenu = ({ toggle }) => {
  const { currentTheme, setCurrentTheme } = useContext(ModeContext);

  return (
    <Box
      sx={{ width: 250, p: 2 }}
      role="presentation"
      onClick={toggle}
      onKeyDown={toggle}
    >
      <Typography variant="h6" gutterBottom>
        Choose a theme
      </Typography>
      <List>
        {allThemes.map((theme) => (
          <ListItem
            button
            key={theme.name}
            onClick={() => setCurrentTheme(theme.name)}
          >
            <ListItemIcon>
              <Box
                sx={{
                  borderRadius: "50%",
                  backgroundColor: theme.color,
                  width: 22,
                  height: 22,
                  overflow: "hidden",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                {currentTheme === theme.name && <WhiteCheckIcon />}
              </Box>
            </ListItemIcon>
            <ListItemText primary={theme.name} />
          </ListItem>
        ))}
      </List>
    </Box>
  );
};

export default DrawerMenu;
