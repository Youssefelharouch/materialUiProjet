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
  }, [data]);

  const deleteData = async (item) => {
    try {
      await fetch(`http://localhost:3000/mydata/${item}`, { method: "DELETE" });
    } catch (error) {
      console.log("[Home delete fn]", error);
    }
  };

  let totalPrice = 0;
  return (
    <Box>
      {data.map((item) => {
        totalPrice+= item.price
        return (
      
          <Paper
            key={item.id}
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

            <IconButton
              sx={{ position: "absolute", top: "0", right: "0" }}
              onClick={() => deleteData(item.id)}
            >
              <Close sx={{ fontSize: "20px" }} />
            </IconButton>
          </Paper>
        );
      })}
      <Typography mt="55px" textAlign="center" variant="h6">
        You spendt ${totalPrice} 
      </Typography>
    </Box>
  );
};

export default Home;
