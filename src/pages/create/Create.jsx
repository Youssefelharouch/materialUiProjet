import { Box, Button, InputAdornment, TextField, styled } from "@mui/material";
import "./create.css";
import React, { useState } from "react";
import { purple } from "@mui/material/colors";
import { ChevronRight } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";

const ColorButton = styled(Button)(({ theme }) => ({
  color: theme.palette.getContrastText(purple[500]),
  backgroundColor: theme.palette.primary.main,
  "&:hover": {
    backgroundColor: theme.palette.primary.light,
  },
}));
const Create = () => {
  const [title, setTitle] = useState("second");
  const [price, setPrice] = useState(0);
  const navigate = useNavigate();

  const sendData = async () => {
  try {
    await fetch("http://localhost:3000/mydata", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ title, price }),
    });
  } catch (error) {
    console.log("[Create Page] error sending data",error);
  }finally{
    navigate("/");
  }
  };

  return (
    <Box sx={{ width: "380px" }} component="form">
      <TextField
        onChange={(e) => {
          setTitle(e.target.value);
        }}
        fullWidth={true}
        label="Transaction Title"
        sx={{ mt: "22px", display: "block" }}
        InputProps={{
          startAdornment: <InputAdornment position="start">👉</InputAdornment>,
        }}
        variant="filled"
      />

      <TextField
        onChange={(e) => {
          setPrice(Number(e.target.value));
        }}
        fullWidth={true}
        label="Amount"
        id="filled-start-adornment"
        sx={{ mt: "22px", display: "block" }}
        InputProps={{
          startAdornment: <InputAdornment position="start">$</InputAdornment>,
        }}
        variant="filled"
      />

      <ColorButton sx={{ mt: "22px" }} variant="contained" onClick={() => {sendData()}}>
        Submit <ChevronRight />
      </ColorButton>
    </Box>
  );
};

export default Create;
