import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import { CssBaseline } from "@mui/material";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { grey  } from "@mui/material/colors";


import Appbar from "../MUI-components/Appbar";
import DrawerCoponent from "../MUI-components/Drawer";
import { Box } from "@mui/material";

const drawerWidth = 240;

const Root = () => {

  const [mode, setMode] = useState(
    localStorage.getItem("currentMode") === null
    ? "dark"
    : localStorage.getItem("currentMode") === "light"
    ? "light"
    : "dark"

  );
  const darkTheme = createTheme({
    palette: {
      // @ts-ignore
      mode,
      ...(mode === "light"
        ? {
            // palette values for light mode
            ali: {
              main: "#64748B",
            },

            favColor: {
              main: grey[300],
            },
          }
        : {
            // palette values for dark mode
            ali: {
              main: "teal",
            },

            favColor: {
              main: grey[800],
            },
          }),
    },
  });
  return (
    <div>
      <ThemeProvider theme={darkTheme}>
        <CssBaseline />
        <Appbar drawerWidth={drawerWidth} />
        <DrawerCoponent drawerWidth={drawerWidth} setMode={setMode} />

        <Box
          component="main"
          sx={{
            ml: `${drawerWidth}px`,
            display: " flex",
            justifyContent: "center",
          }}
          className="border"
        >
          <Outlet />
        </Box>
      </ThemeProvider>
    </div>
  );
};

export default Root;
