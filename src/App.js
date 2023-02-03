import React from "react";
import ClientStates from "./context/User/ClientStates";

import { createTheme, ThemeProvider } from "@mui/material/styles";
import ColorModeContext from "./context/Theme/ColorModeContext";

import UserLayout from "./layout/UserLayout";
import { Outlet } from "react-router-dom";

export default function App() {
  const [mode, setMode] = React.useState("light");
  const colorMode = React.useMemo(
    () => ({
      toggleColorMode: () => {
        setMode((prevMode) => (prevMode === "light" ? "dark" : "light"));
      },
    }),
    []
  );

  const theme = React.useMemo(
    () =>
      createTheme({
        palette: {
          mode,
          primary: {
            main: mode === "light" ? "#5e35b1" : "#e1f5fe",
            dark: "#e040fb",
            light: "#fff",
          },
          error: {
            main: "#ef5350",
            light: "#ef5350",
            dark: "#ef5350",
          },
          text: {
            dark: "#e040fb",
            light: "#fff",
          },
          background: {
            paper: mode === "light" ? "white" : "#312D4B",
            default: mode === "light" ? "#e1f5fe" : "#28243D",
          },
        },
      }),
    [mode]
  );

  return (
    <>
      <ColorModeContext.Provider value={colorMode}>
        <ThemeProvider theme={theme}>
          <ClientStates>
            <UserLayout>
              <Outlet />
            </UserLayout>
          </ClientStates>
        </ThemeProvider>
      </ColorModeContext.Provider>
    </>
  );
}
