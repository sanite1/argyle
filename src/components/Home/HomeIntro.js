import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Box, Typography } from "@mui/material";
import homeIntro from "../../assets/images/AHomeIntro.avif";
import AOS from "aos";
import "aos/dist/aos.css";

import { useTheme } from "@mui/material/styles";

function HomeIntro() {
  React.useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);
  const theme = useTheme();

  return (
    <Box
      sx={{
        position: "relative",
        width: "100%",
        height: "100vh",
        backgroundImage: `url(${homeIntro})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
          backgroundColor: "rgba(0,0,0, 0.5)",
          width: "100%",
          height: "100%",
        }}
      >
        <Box data-aos="fade-up">
          <Typography
            sx={{
              fontSize: {
                xs: "30px",
                md: theme.typography.h3.fontSize,
              },
              width: { xs: "80%", md: "60%" },
              margin: "auto",
              fontFamily: '"Source Sans Pro", sans-serif',
              fontWeight: 700,
              marginBottom: "10px",
              letterSpacing: "2px",
              lineHeight: "1.5",
              color: "#fff",
            }}
          >
            Guiding You Towards Financial Mastery and Strategic Success
          </Typography>
          <Typography
            sx={{
              fontSize: {
                xs: theme.typography.body2.fontSize,
                md: theme.typography.body1.fontSize,
              },
              width: { xs: "90%", md: "70%" },
              margin: "auto",
              marginBottom: "20px",
              fontFamily: '"Source Sans Pro", sans-serif',
              letterSpacing: "1px",
              color: "#fff",
            }}
          >
            At Argyle Consulting, we are dedicated to empowering businesses with
            expert solutions in tax, financial advisory, audit, outsourcing, and
            training. Partner with us to unlock new opportunities and achieve
            sustainable growth, locally and globally.
          </Typography>
        </Box>
      </Box>
    </Box>
  );
}

export default HomeIntro;
