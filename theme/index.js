import { createTheme } from "@mui/material/styles";
import { createContext } from "react";
import originalTheme from "./originalTheme";
import tealTheme from "./tealTheme";

const MUItheme = {
  Original: originalTheme,
  Teal: tealTheme,
};

export const getTheme = (currentTheme, mode = "light") =>
  createTheme(MUItheme[currentTheme](mode));

export const ModeContext = createContext({
  mode: "light",
  toggleMode: () => {},
});
