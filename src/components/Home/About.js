import { Box, Grid, Link, Typography } from "@mui/material";
import ExperienceImg from "../../assets/images/AAboutSec.png";
import AOS from "aos";
import "aos/dist/aos.css";
import React from "react";

const About = () => {
  React.useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);
  return (
    <Box>
      <Grid container spacing={4}>
        <Grid
          data-aos="fade-right"
          item
          xs={12}
          md={6}
          sx={{
            order: { xs: 2, md: 1 },
          }}
        >
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              flexWrap: "wrap",
              height: "100%",
            }}
          >
            <img
              src={ExperienceImg}
              alt={"experience"}
              style={{ width: "100%" }}
            />
          </Box>
        </Grid>
        <Grid
          data-aos="fade-left"
          item
          xs={12}
          md={6}
          sx={{
            order: { xs: 1, md: 2 },
          }}
        >
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              height: "100%",
              flexWrap: { xs: "wrap" },
            }}
          >
            <Box>
              <Typography
                sx={{
                  display: "flex",
                  justifyContent: "end",
                  alignItems: "end",
                  fontSize: "16px",
                  fontFamily: '"Source Sans Pro", sans-serif',
                  fontWeight: 400,
                  borderBottom: "1px solid #383184",
                  width: "fit-content",
                  transform: { xs: "" },
                }}
              >
                ABOUT US
              </Typography>
              <Box sx={{}}>
                <Typography
                  sx={{
                    fontSize: "32px",
                    fontFamily: '"Source Sans Pro", sans-serif',
                    fontWeight: 700,
                    marginBottom: "20px",
                    width: { xs: "100%", md: "70%" },
                  }}
                >
                  Who We Are.
                </Typography>
                <Typography
                  sx={{
                    fontSize: "14px",
                    fontFamily: '"Source Sans Pro", sans-serif',
                    fontWeight: 400,
                    marginBottom: "20px",
                  }}
                >
                  At Argyle Consulting, we are committed to advancing your
                  business goals with expert insight and innovative strategies.
                  Our mission is to unlock your potential by delivering
                  impactful and measurable results in every engagement. We
                  believe in driving growth through a customized approach,
                  ensuring that our solutions are reliable, effective, and
                  designed to meet your unique requirements. Guided by these
                  core values, we strive to help you achieve excellence across
                  tax, financial advisory, audit, outsourcing, and training.
                </Typography>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "start",
                    flexWrap: { xs: "wrap", md: "nowrap" },
                  }}
                >
                  <Link
                    href="/about-us"
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
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default About;
