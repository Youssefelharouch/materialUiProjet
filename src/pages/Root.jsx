import React, { useMemo, useState } from "react";
import { Outlet } from "react-router-dom";
import { CssBaseline } from "@mui/material";
import { ThemeProvider, createTheme } from "@mui/material/styles";


import Appbar from "../MUI-components/Appbar";
import DrawerCoponent from "../MUI-components/Drawer";
import { Box } from "@mui/material";
import getDesignTokens from "../styles/themes";

const drawerWidth = 240;

const Root = () => {

  const [mode, setMode] = useState(
    localStorage.getItem("currentMode") === null
    ? "dark"
    : localStorage.getItem("currentMode") === "light"
    ? "light"
    : "dark"

  );
  const theme = useMemo(() => createTheme(getDesignTokens(mode)), [mode]);

  const [noneOrBlock, setNoneOrBlock] = useState("none");
  const [drawerType, setdrawerType] = useState("permanent");

  const showDrawer = () => {
    setdrawerType("temporary");
    setNoneOrBlock("block");
  };

  const hideDrawer = () => {
    setdrawerType("permanent");
    setNoneOrBlock("none");
  };


  return (
    <div>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Appbar drawerWidth={drawerWidth} showDrawer={showDrawer} />
        <DrawerCoponent {... {drawerWidth,setMode,noneOrBlock,drawerType,hideDrawer}}
         />

        <Box
          component="main"
          sx={{
            ml: { sm: `${drawerWidth}px` },
            display: " flex",
            justifyContent: "center",
            mt: "66px",
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
