import { Box, Grid2, Typography } from "@mui/material";
import React from "react";
import myimage from '../Assets/Images/download.png'
export default function AboutContent() {
  return (
    <Box sx={{ flexGrow: 1, p: 3 }}>
      <Grid2
        container
        // spacing={2}
        sx={{ backgroundColor: "#acab753b", borderRadius: "20px" }}
      >
        <Grid2 size={{ xs: 12, sm: 6 }}>
          <img
            src={myimage}
            alt="picture"
            style={{ width: "50%", borderRadius: "20px" }}
          />
        </Grid2>
        <Grid2
          size={{ xs: 12, sm: 6 }}
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Box
            sx={{
              p: 3,
              textAlign: "justify",
            }}
          >
            <Typography
              gutterBottom
              sx={{ fontWeight: "900", fontSize: "40px" }}
            >
              About <span style={{ color: "#5a0c4a" }}>Us</span>
            </Typography>
            <Typography
              variant="subtitle2"
              gutterBottom
              sx={{ fontWeight: "900" }}
            >
              subtitle of website
            </Typography>
            <Typography
              variant="body2"
              gutterBottom
              sx={{ textAlign: "justify" }}
            >
              Welcome to Beauty Zone, your ultimate destination for all things beauty! We are a passionate team of beauty enthusiasts, experts, and professionals dedicated to providing you with the best beauty products, services, and advice to help you look and feel your best every day.

            </Typography>

            <Typography
              variant="body1"
              gutterBottom
              sx={{ textAlign: "justify" }}
            >
              Our mission is to empower you with high-quality, carefully curated products and services that cater to every skin type, tone, and preference. From luxurious skincare lines to the latest beauty trends, we strive to offer a diverse range of options that suit every style and need.
            </Typography>
          </Box>
        </Grid2>
      </Grid2>
    </Box>
  );
}
