import React from 'react'

import { Avatar, Link, Toolbar, Typography, AppBar } from "@mui/material";

const Appbar = ({drawerWidth}) => {
  return (
    <AppBar
    sx={{ width: `calc(100% - ${drawerWidth}px)`, ml: `${drawerWidth}px` }}
    position="static"
  >
    <Toolbar>
      <Link
        sx={{
          flexGrow: 1,
          textDecoration: "none",
          "&:hover": { fontSize: "16.5px" },
        }}
        color="inherit"
        href="/"
      >
        My expenses
      </Link>

      <Typography mr={2} variant="body1" color="inherit">
        Youssef Elharouch
      </Typography>

      <Avatar alt="Remy Sharp" src="/images/myavatar.png" />    </Toolbar>
  </AppBar>
  )
}

export default Appbar