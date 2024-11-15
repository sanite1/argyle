import React from "react";
import { Box, Divider, Typography } from "@mui/material";
import Agsk from "../../assets/images/Agsk.png";
import { useTheme } from "@mui/material/styles";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const logos = [Agsk, Agsk, Agsk, Agsk, Agsk, Agsk, Agsk, Agsk, Agsk];

const infiniteLogos = [...logos, ...logos];

const animationStyle = {
  "@keyframes smoothScroll": {
    "0%": {
      transform: "translateX(0)",
    },
    "100%": {
      transform: "translateX(-100%)",
    },
  },
  display: "flex",
  animation: "smoothScroll 30s linear infinite",
  width: `${infiniteLogos.length * 100}px`,
};

function LogoCarousel() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const theme = useTheme();
  return (
    <Box sx={{ width: "100%", overflow: "hidden", margin: "auto", mt: 4 }}>
      <Typography
        sx={{
          fontSize: {
            xs: theme.typography.h5.fontSize,
            md: theme.typography.h4.fontSize,
          },
          fontFamily: '"Source Sans Pro", sans-serif',
          fontWeight: 600,
          width: "fit-content",
          margin: { xs: "auto" },
          textAlign: "center",
        }}
      >
        OUR CLIENTELE
      </Typography>
      <Box
        sx={{
          background: "#383184",
          width: "10%",
          height: "5px",
          margin: { xs: "0 auto 10px" },
          textAlign: "center",
        }}
      ></Box>
      <Typography
        sx={{
          fontSize: "14px",
          fontFamily: '"Source Sans Pro", sans-serif',
          fontWeight: 400,
          width: "fit-content",
          textAlign: "center",
          margin: { xs: "0 auto 20px" },
        }}
      >
        We have worked with many reputable companies. Here’s to name a few:
      </Typography>
      <Box sx={animationStyle}>
        {infiniteLogos.map((logo, index) => (
          <Box
            key={index}
            sx={{
              flex: "0 0 auto",
              width: "250px",
              // height: "150px",
              padding: 1,
            }}
          >
            <Box
              component="img"
              src={logo}
              alt={`Logo ${index + 1}`}
              sx={{
                width: "80%",
                margin: "auto",
                objectFit: "cover",
                borderRadius: "10px",
              }}
            />
          </Box>
        ))}
      </Box>
      <Box sx={{ width: "80%", margin: "50px auto" }}>
        <Divider />
      </Box>
    </Box>
  );
}

export default LogoCarousel;
