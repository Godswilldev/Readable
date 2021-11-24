import React from "react";
import Button from "@mui/material/Button";
import { colors } from "../../Utils/Theme";
import ArrowLeft from "./ArrowLeft";
import { useSelector } from "react-redux";

const Button5 = ({ title }) => {
  const { darkMode } = useSelector(({ ThemeReducer }) => ThemeReducer);
  return (
    <Button
      style={{
        width: "15.8rem",
        height: "4.4rem",
        color: darkMode ? colors.col5 : colors.col7,
        fontSize: "1.4rem",
        transition: "0.3s all",
        border: "none",
      }}
      variant="outlined"
      startIcon={<ArrowLeft color={darkMode ? colors.col5 : colors.col7} />}
    >
      {title}
    </Button>
  );
};

export default Button5;
