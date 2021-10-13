import { ThemeProvider } from "@mui/material/styles";
import { useState } from "react";
import Layout from "../components/Layout";
import "../styles/globals.css";
import { getTheme, ModeContext } from "../theme";

function MyApp({ Component, pageProps }) {
  const [mode, setMode] = useState("light");
  const [theme, setTheme] = useState("Original");

  const toggleMode = () => setMode(mode === "light" ? "dark" : "light");

  return (
    <ModeContext.Provider value={{ mode, toggleMode }}>
      <ThemeProvider theme={getTheme(theme, mode)}>
        <Layout setTheme={setTheme}>
          <Component {...pageProps} />
        </Layout>
      </ThemeProvider>
    </ModeContext.Provider>
  );
}

export default MyApp;
