import { Box } from "@mui/material";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import HomeIntro from "../components/Home/HomeIntro";
import About from "../components/Home/About";
import { useEffect } from "react";
import Services from "../components/Home/Services";
import Book from "../components/Home/Book";
import AOS from "aos";
import "aos/dist/aos.css";
import React from "react";
import LogoCarousel from "../components/Home/ClienteleCarousel";

const Home = () => {
  React.useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  return (
    <Box>
      <Navbar />

      <Box
        sx={{
          width: "100%",
          margin: "auto",
          height: "100vh",
          boxSizing: "border-box",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <HomeIntro />
      </Box>

      <Box direction={"left"}>
        <Box
          sx={{
            width: { xs: "80%", md: "80%" },
            boxSizing: "border-box",
            margin: "auto",
            marginTop: "50px",
          }}
        >
          <About />
        </Box>
      </Box>

      <Box direction={"down"}>
        <Box
          data-aos="fade-up"
          sx={{
            margin: "auto",
            marginTop: "50px",
          }}
        >
          <Services />
        </Box>
      </Box>

      <Box
        sx={{
          marginTop: "50px",
        }}
      >
        <LogoCarousel />
      </Box>

      <Box
        sx={{
          width: "80%",
          margin: "auto",
          marginTop: "50px",
        }}
      >
        <Book />
      </Box>

      {/* Footer  */}
      <Box
        sx={{
          marginTop: "50px",
        }}
      >
        <Footer />
      </Box>
    </Box>
  );
};

export default Home;
