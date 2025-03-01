import { Box, Typography } from "@mui/material";
import React from "react";
import image from '../Assets/Images/image.jpg'
export default function Hero() {
  return (
    <Box
      sx={{
        width: "90%",
        height: "90vh",
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundImage: `url(${image})`
      }}
    >
      <Box
        sx={{
          width: "100%",
          height: "90vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          textAlign: "center",
      
          
        }}
      >
        {/* <img src={image} alt="myimage"  height={"500px"}/> */}
        <Typography
          sx={{
            fontWeight: "1000",
            fontSize: { xs: "50px", sm: "80px" },
            textTransform: "uppercase",
            color: "#000000b8",
          }}
          gutterBottom
        >
          Welcome to Beauty Zone
        </Typography>
        <Typography
          gutterBottom
          sx={{ fontWeight: "1000", fontSize: "50px", color: "black" }}
        >
          Why Our Products???Because We use Organic and Natural Ingredients
        </Typography>
        <Typography
          gutterBottom
         
          sx={{ fontWeight: "500%", fontSize: { xs: "30px", sm: "30px" }, color: "black" }}
        >
          
         
         
         
          Step into clear, radiant skin with our fun and fruity face wash—perfect for keeping breakouts at bay!”
          Luxury brand: “Indulge in the luxury of our anti-aging night cream, formulated to rejuvenate and restore your skin’s natural glow.”


        </Typography>
      </Box>
    </Box>
  );
}
