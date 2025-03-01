import React from "react";
import { Box, Typography, Button, Grid } from "@mui/material";
import myimage from "../Assets/Images/OIP.jpeg";
const Banner = () => {
  return (
    <Box
      sx={{
        bgcolor: "pink",
        overflow: "hidden",
        mt: 5,
        px: 4,
        py: 6,
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "contain",
      }}
    >
      <Grid container alignItems="center" spacing={2}>
        {/* Left Content */}
        <Grid item xs={12} md={6}>
          <Box sx={{ textAlign: { xs: "right", md: "right" }, px: { md: 5 } }}>
          <img
              style={{ width: "200px", color: "black" }}
              src={myimage}
              alt="logo"
            />
            <Typography variant="h4" sx={{ fontWeight: "solid", textAlign: { xs: "center", md: "center" } }}>
            Indulge in the finest skincare with Impressive Lines.From hydration to anti-aging, we’ve got you covered.
Experience flawless beauty with every product
            </Typography>
            <Typography
              variant="h2"
              sx={{
                textTransform: "uppercase",
                color: { xs: "pink", sm: "#212121" },
                fontWeight: "bold",
                pb: 3,
              }}
            >
              
            </Typography>
          </Box>
        </Grid>

        {/* Right Content (Empty for Now) */}
        <Grid item xs={12} md={6}></Grid>
      </Grid>
    </Box>
  );
};

export default Banner;
