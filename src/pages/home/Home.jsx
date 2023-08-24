import { Box, IconButton, Paper, Typography, useTheme } from "@mui/material";
import "./home.css";
import React, { useEffect, useState } from "react";
import { Close } from "@mui/icons-material";

const Home = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await fetch("http://localhost:3000/mydata");
        const data = await response.json();
        setData(data);
      } catch (error) {
        console.log("Error [fetching data home page]", error);
      }
    };
    getData();
  }, []);
  return (
    <Box>
      {data.map((item) => {
        return (
          <Paper key={item.id}
          sx={{
            position: "relative",
            width: "366px",
            display: "flex",
            justifyContent: "space-between",
            mt: "22px",
            pt: "27px",
            pb: "7px",
          }}
        >
          <Typography sx={{ ml: "16px", fontSize: "1.3em" }} variant="h6">
            {item.title}
          </Typography>
          <Typography
            sx={{
              mr: "33px",
              fontWeight: 500,
              fontSize: "1.4em",
              opacity: "0.8",
            }}
            variant="h6"
          >
            $ {item.price} 
          </Typography>
  
          <IconButton sx={{ position: "absolute", top: "0", right: "0" }}>
            <Close sx={{ fontSize: "20px" }} />
          </IconButton>
        </Paper>
        )
      })}
    </Box>
  );
};

export default Home;
