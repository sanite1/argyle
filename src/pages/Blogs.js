import { Box, Typography, Grid } from "@mui/material";
import Navbar from "../components/Navbar";
import IntroImage from "../assets/images/ANews.png";
import Footer from "../components/Footer";
import { useEffect } from "react";
import { useTheme } from "@mui/material/styles";
import AOS from "aos";
import "aos/dist/aos.css";
import React from "react";
import BlogCards from "../components/Blogs/BlogCards";

const Blogs = () => {
  React.useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  const theme = useTheme();

  return (
    <Box>
      <Navbar />

      <Box
        sx={{
          backgroundImage: `url(${IntroImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          width: "100%",
          minHeight: "70vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          position: "relative",
          marginTop: "10vh",
        }}
      >
        <Box
          sx={{
            width: { xs: "90%", sm: "80", md: "70%" },
            MinHeight: { xs: "90%", sm: "80", md: "50%" },
            backgroundColor: "#262626",
            padding: "3% 5%",
            position: "absolute",
            boxSizing: "border-box",
            bottom: "0",
            right: "0",
            display: "flex",
            alignItems: "center",
          }}
        >
          <Box data-aos="fade-up">
            <Typography
              variant="body2"
              color="#fff"
              sx={{
                fontSize: {
                  xs: theme.typography.h5.fontSize,
                  md: theme.typography.h4.fontSize,
                },
                fontFamily: '"Source Sans Pro", sans-serif',
                marginTop: "10px",
                fontWeight: "700",
              }}
            >
              Insights to Keep You Ahead
            </Typography>
            <Typography
              variant="body2"
              color="#fff"
              sx={{
                fontSize: {
                  xs: theme.typography.h6.fontSize,
                  md: theme.typography.h5.fontSize,
                },
                fontFamily: '"Source Sans Pro", sans-serif',
                marginTop: "10px",
                fontWeight: "600",
              }}
            >
              Stay informed with Argyle Consulting’s latest news, industry
              insights, and expert articles. Here, you’ll find valuable
              perspectives on trends, strategies, and best practices across tax,
              finance, audit, and more—equipping you with the knowledge to make
              informed decisions and drive success.
            </Typography>
          </Box>
        </Box>
        <Box
          sx={{
            width: "100%",
            height: "70vh",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            textAlign: "center",
            backgroundColor: "rgba(19, 26, 52, 0.5)",
            padding: "0 5%",
          }}
        ></Box>
      </Box>
      <Box
        sx={{
          width: "80%",
          margin: "50px auto",
        }}
      >
        <Grid container mb={5}>
          <Grid
            item
            xs={2}
            sx={{
              width: "10%",
              height: "50px",
              backgroundColor: "#383184",
              clipPath: "polygon(0% 0%, 85% 0%, 100% 100%, 0% 100%)",
            }}
          ></Grid>
          <Grid
            item
            xs={10}
            sx={{
              width: "90%",
              height: "50px",
              backgroundColor: "#F08A16",
              clipPath: "polygon(0% 0%, 125% 0%, 100% 100%, 3% 105%)",
            }}
          >
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                height: "100%",
                paddingLeft: "5%",
              }}
            >
              <Typography
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  fontSize: "30px",
                  fontFamily: '"Source Sans Pro", sans-serif',
                  fontWeight: 700,
                  color: { xs: "#FFF" },
                }}
              >
                NEWS & ARTICLES
              </Typography>
            </Box>
          </Grid>
        </Grid>

        {/* CARDS */}
        <BlogCards />
      </Box>

      <Footer />
    </Box>
  );
};

export default Blogs;