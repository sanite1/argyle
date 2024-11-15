import { Box, Grid, Link, Typography } from "@mui/material";
import ExperienceImg from "../../assets/images/Abook.png";
import "aos/dist/aos.css";
import AOS from "aos";
import React from "react";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";

const Book = () => {
  React.useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);
  return (
    <Box>
      <Grid container spacing={4}>
        <Grid
          data-aos="fade-left"
          item
          xs={12}
          md={7}
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
                  marginBottom: "20px",
                  // transformOrigin: "center bottom",
                }}
              >
                BOOK A CONSULTATION
              </Typography>
              <Box sx={{}}>
                <Typography
                  sx={{
                    fontSize: "14px",
                    fontFamily: '"Source Sans Pro", sans-serif',
                    fontWeight: 400,
                    marginBottom: "20px",
                  }}
                >
                  Take a confident step towards growth by setting up a
                  consultation with Argyle Consulting. Whether you’re navigating
                  complex tax matters, enhancing financial practices, seeking
                  robust audit solutions, or investing in skills development,
                  we’re ready to support you. Our consultations focus on
                  understanding your unique challenges and unlocking potential
                  for success.
                </Typography>
                <Typography
                  sx={{
                    fontSize: "14px",
                    fontFamily: '"Source Sans Pro", sans-serif',
                    fontWeight: 600,
                    marginBottom: "10px",
                  }}
                >
                  Why Choose an Argyle Consultation?
                </Typography>
                <Box>
                  <Box
                    sx={{
                      width: "100%",
                      display: "flex",
                      alignItems: "start",
                      marginBottom: "6px",
                      zIndex: 0,
                    }}
                  >
                    <CheckCircleIcon
                      fontSize="small"
                      sx={{ color: "#383184", zIndex: 0 }}
                    />
                    <Typography
                      sx={{
                        fontSize: "14px",
                        fontFamily: '"Source Sans Pro", sans-serif',
                        fontWeight: 400,
                        marginLeft: "10px",
                        zIndex: 0,
                      }}
                    >
                      Customized Solutions: Benefit from advice and plans built
                      around your business’s specific goals and challenges.
                    </Typography>
                  </Box>
                  <Box
                    sx={{
                      width: "100%",
                      display: "flex",
                      alignItems: "start",
                      marginBottom: "6px",
                      zIndex: 0,
                    }}
                  >
                    <CheckCircleIcon
                      fontSize="small"
                      sx={{ color: "#383184", zIndex: 0 }}
                    />
                    <Typography
                      sx={{
                        fontSize: "14px",
                        fontFamily: '"Source Sans Pro", sans-serif',
                        fontWeight: 400,
                        marginLeft: "10px",
                        zIndex: 0,
                      }}
                    >
                      Insightful Strategies: Gain from our comprehensive
                      expertise and practical insights tailored to drive
                      meaningful impact.
                    </Typography>
                  </Box>
                  <Box
                    sx={{
                      width: "100%",
                      display: "flex",
                      alignItems: "start",
                      marginBottom: "6px",
                      zIndex: 0,
                    }}
                  >
                    <CheckCircleIcon
                      fontSize="small"
                      sx={{ color: "#383184", zIndex: 0 }}
                    />
                    <Typography
                      sx={{
                        fontSize: "14px",
                        fontFamily: '"Source Sans Pro", sans-serif',
                        fontWeight: 400,
                        marginLeft: "10px",
                        zIndex: 0,
                      }}
                    >
                      Partnered Progress: Collaborate closely with our
                      professionals, working together to shape the right path
                      forward for sustainable growth.
                    </Typography>
                  </Box>
                </Box>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "start",
                    flexWrap: { xs: "wrap", md: "nowrap" },
                  }}
                >
                  <Link
                    href="/contact-us"
                    color="inherit"
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
                      marginTop: "20px",
                    }}
                  >
                    Book Now{" "}
                  </Link>
                </Box>
              </Box>
            </Box>
          </Box>
        </Grid>

        <Grid
          data-aos="fade-right"
          item
          xs={12}
          md={5}
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
      </Grid>
    </Box>
  );
};

export default Book;
