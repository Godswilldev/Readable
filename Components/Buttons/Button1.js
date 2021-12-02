import React, { useState } from "react";
import Button from "@mui/material/Button";
import { colors } from "../../Utils/Theme";

const Button1 = ({ title }) => {
  const [hovered, setHovered] = useState(false);
  return (
    <Button
      style={{
        backgroundColor: hovered ? "#C75AF6" : colors.col1,
        width: "15.8rem",
        height: "4.4rem",
        color: colors.col4,
        fontSize: "1.2rem",
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

export default Button1;
