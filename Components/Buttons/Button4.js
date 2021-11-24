import React, { useState } from "react";
import Button from "@mui/material/Button";
import { colors } from "../../Utils/Theme";

const Button4 = ({ title }) => {
  const [hovered, setHovered] = useState(false);
  return (
    <Button
      style={{
        backgroundColor: hovered ? "#E98888" : "#D73737",
        width: "15.8rem",
        height: "4.4rem",
        color: colors.col4,
        fontSize: "1.4rem",
        transition: "0.3s all",
      }}
      variant="contained"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {title}
    </Button>
  );
};

export default Button4;
