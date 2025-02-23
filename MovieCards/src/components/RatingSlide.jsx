import * as React from "react";
import Box from "@mui/material/Box";
import Rating from "@mui/material/Rating";
import StarIcon from "@mui/icons-material/Star";

const labels = {
  1: "Useless",
  2: "Poor",
  3: "Ok",
  4: "Good",
  5: "Excellent",
};

export default function HoverRating({ value, onChange }) {
  const [hover, setHover] = React.useState(-1); 

  return (
    <Box
      sx={{
        width: 300,
        display: "flex",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <Rating
        name="hover-feedback"
        value={value} 
        precision={1}
        onChange={(event, newValue) => {
          onChange(newValue); 
        }}
        onChangeActive={(event, newHover) => {
          setHover(newHover);
        }}
        emptyIcon={<StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />}
      />
      <Box sx={{ ml: 2 }}>
        {value !== null && <span>{labels[hover !== -1 ? hover : value]}</span>}
      </Box>
    </Box>
  );
}
