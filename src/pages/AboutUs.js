import { Box, Link, Typography, Grid } from "@mui/material";
import Navbar from "../components/Navbar";
import AboutUsIntro from "../assets/images/AaboutIntro.png";
import Footer from "../components/Footer";
import Values from "../components/AboutUs/Values";
import { useEffect } from "react";
import { useTheme } from "@mui/material/styles";
import About from "../components/AboutUs/About";
import AOS from "aos";
import "aos/dist/aos.css";
import React from "react";
import Services from "../components/AboutUs/Services";
import Nelson from "../assets/images/Anelson.png";
import Akeem from "../assets/images/Aakeem.png";
import LogoCarousel from "../components/Home/ClienteleCarousel";

const AboutUs = () => {
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
          backgroundImage: `url(${AboutUsIntro})`,
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
              World-Class Business Advisory and Solutions
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
              Argyle Consulting provides specialized expertise across a broad
              spectrum of business needs, empowering you to navigate challenges,
              operate efficiently, and achieve your ambitions. Explore our
              comprehensive suite of services, and let’s start a conversation
              about how we can support your success.
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

      {/* About us */}
      <Box
        sx={{
          width: "80%",
          margin: "50px auto",
        }}
      >
        <About />
      </Box>

      {/* Values  */}
      <Values />

      {/* Team  */}

      <Box
        data-aos="fade-up"
        sx={{
          width: { xs: "100%", md: "80%" },
          margin: "50px auto",
        }}
      >
        <Grid container mb={5}>
          <Grid
            item
            xs={2}
            sx={{
              width: "10%", // Define the desired width
              height: "50px", // Define the desired height
              backgroundColor: "#383184", // Background color for the trapezoid
              clipPath: "polygon(0% 0%, 85% 0%, 100% 100%, 0% 100%)", // Creates trapezoid
            }}
          ></Grid>
          <Grid
            item
            xs={10}
            sx={{
              width: "90%", // Define the desired width
              height: "50px", // Define the desired height
              backgroundColor: "#F08A16", // Background color for the trapezoid
              clipPath: "polygon(0% 0%, 125% 0%, 100% 100%, 3% 105%)", // Creates trapezoid
            }}
          >
            <Box
              sx={{
                display: "flex",
                // justifyContent: "end",
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
                  // width: "fit-content",
                  color: { xs: "#FFF" },
                }}
              >
                OUR TEAM
              </Typography>
            </Box>
          </Grid>
        </Grid>

        <Box
          sx={{
            width: { xs: "80%", md: "70%" },
            margin: { xs: "50px auto", md: "50px 0" },
          }}
        >
          <Grid container>
            <Grid item xs={12} md={5} data-aos="fade-right">
              <img
                src={Nelson}
                alt="Jessica Rose Thompson"
                style={{ width: "100%" }}
              />
              <Typography
                sx={{
                  fontSize: "16px",
                  fontFamily: '"Source Sans Pro", sans-serif',
                  fontWeight: 600,
                  textAlign: "center",
                }}
              >
                Sanni Nelson A.
              </Typography>
              <Typography
                sx={{
                  fontSize: "16px",
                  fontFamily: '"Source Sans Pro", sans-serif',
                  fontWeight: 700,
                  color: "#F08A16",
                  textAlign: "center",
                  marginBottom: "20px",
                }}
              >
                Managing Partner
              </Typography>
            </Grid>
            <Grid
              item
              xs={12}
              md={7}
              data-aos="fade-left"
              sx={{ display: "flex", alignItems: "center" }}
            >
              <Box>
                <Typography
                  sx={{
                    fontSize: "16px",
                    fontFamily: '"Source Sans Pro", sans-serif',
                    fontWeight: 300,
                    marginBottom: "20px",
                  }}
                >
                  Nelson serves as the Managing Consultant of the firm, bringing
                  over 24 years of extensive experience in accounting, tax
                  advisory, business management, and consulting. With a proven
                  track record of success across various multinational
                  organizations, he leverages his deep expertise to drive
                  impactful solutions and strategic growth for our clients.
                </Typography>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "start",
                    flexWrap: { xs: "wrap", md: "nowrap" },
                  }}
                >
                  <Link
                    href="/team/nelson"
                    underline="none"
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      background: "#383184",
                      color: "#fff",
                      outline: "none",
                      borderRadius: "10px",
                      padding: "10px 24px",
                      marginRight: "20px",
                      letterSpacing: "1px",
                      fontSize: "14px",
                      fontFamily: '"Source Sans Pro", sans-serif',
                      fontWeight: 300,
                    }}
                  >
                    Learn More{" "}
                  </Link>
                </Box>
              </Box>
            </Grid>
          </Grid>
          <Grid container sx={{ margin: { xs: "10px 0", md: "10px 20%" } }}>
            <Grid item xs={12} md={5} data-aos="fade-right">
              <img
                src={Akeem}
                alt="Jessica Rose Thompson"
                style={{ width: "100%" }}
              />
              <Typography
                sx={{
                  fontSize: "16px",
                  fontFamily: '"Source Sans Pro", sans-serif',
                  fontWeight: 600,
                  textAlign: "center",
                }}
              >
                Akeem Elegbede
              </Typography>
              <Typography
                sx={{
                  fontSize: "16px",
                  fontFamily: '"Source Sans Pro", sans-serif',
                  fontWeight: 700,
                  color: "#F08A16",
                  textAlign: "center",
                  marginBottom: "20px",
                }}
              >
                Partner
              </Typography>
            </Grid>
            <Grid
              item
              xs={12}
              md={7}
              data-aos="fade-left"
              sx={{ display: "flex", alignItems: "center" }}
            >
              <Box>
                <Typography
                  sx={{
                    fontSize: "16px",
                    fontFamily: '"Source Sans Pro", sans-serif',
                    fontWeight: 300,
                    marginBottom: "20px",
                  }}
                >
                  Akeem joined Argyle Consulting in 2018 as a Senior Consultant,
                  bringing over 21 years of diverse experience in accounting and
                  management across various industries. His extensive background
                  equips him with valuable insights and expertise, enabling him
                  to deliver strategic, results-driven solutions for our
                  clients.
                </Typography>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "start",
                    flexWrap: { xs: "wrap", md: "nowrap" },
                  }}
                >
                  <Link
                    href="/team/akeem"
                    underline="none"
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      background: "#383184",
                      color: "#fff",
                      outline: "none",
                      borderRadius: "10px",
                      padding: "10px 24px",
                      marginRight: "20px",
                      letterSpacing: "1px",
                      fontSize: "14px",
                      fontFamily: '"Source Sans Pro", sans-serif',
                      fontWeight: 300,
                    }}
                  >
                    Learn More{" "}
                  </Link>
                </Box>
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Box>

      <Services />

      <LogoCarousel />

      <Footer />
    </Box>
  );
};

export default AboutUs;
