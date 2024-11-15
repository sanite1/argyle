import { Box, Divider, Grid, Link, Typography } from "@mui/material";
import React from "react";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import CallIcon from "@mui/icons-material/Call";
import EmailIcon from "@mui/icons-material/Email";
import footerlogo from "../assets/images/logo.png";
import { useLocation } from "react-router-dom";

const Footer = () => {
  const location = useLocation();
  const currentPath = location.pathname;
  const linkStyle = {
    color: "#fff",
    textDecoration: "none",
  };

  const activeLinkStyle = {
    color: "#F08A16",
    fontWeight: "bold",
    textDecoration: "none",
  };

  return (
    <>
      <Box
        sx={{
          padding: "0 5% 20px",
          backgroundColor: "#262626",
        }}
      >
        <Grid container>
          <Grid item xs={12} md={8} mt={5}>
            <Grid container spacing={2}>
              <Grid item xs={12} md={5}>
                <Box>
                  <img src={footerlogo} width={"80%"} alt="" srcset="" />
                </Box>
                <Typography
                  variant="caption"
                  sx={{ color: "#fff", mt: 3, width: "90%", marginTop: "20px" }}
                >
                  Argyle consulting is a professional consulting firm who
                  provides specialist tax, financial advisory, audit,
                  outsourcing and training services to resident and non-resident
                  companies in Nigeria as well as aiming to cover west Africa
                  and globally through affiliations and collaborations.
                </Typography>
              </Grid>
              <Grid item xs={6} md={3.5}>
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "start",
                    mb: 5,
                    mt: 3,
                    justifyContent: { xs: "start", md: "center" },
                  }}
                >
                  <Box sx={{ mb: 2 }}>
                    <Typography
                      sx={{
                        mb: 4,
                        fontSize: "16px",
                        fontFamily: '"Source Sans Pro", sans-serif',
                        fontWeight: 600,
                      }}
                      color="white"
                    >
                      Quick Links
                    </Typography>
                    <Typography
                      color="white"
                      sx={{
                        mt: 2,
                        fontSize: "14px",
                        width: "100%",
                        fontFamily: '"Source Sans Pro", sans-serif',
                        fontWeight: 600,
                        cursor: "pointer",
                      }}
                    >
                      <Link
                        href="/"
                        style={
                          currentPath === "/" ? activeLinkStyle : linkStyle
                        }
                      >
                        Home
                      </Link>
                    </Typography>
                    <Typography
                      color="white"
                      sx={{
                        mt: 2,
                        fontSize: "14px",
                        width: "100%",
                        fontFamily: '"Source Sans Pro", sans-serif',
                        fontWeight: 600,
                        cursor: "pointer",
                      }}
                    >
                      <Link
                        href="/about-us"
                        style={
                          currentPath === "/about-us"
                            ? activeLinkStyle
                            : linkStyle
                        }
                      >
                        About Us
                      </Link>
                    </Typography>
                    <Typography
                      color="white"
                      sx={{
                        mt: 2,
                        fontSize: "14px",
                        width: "100%",
                        fontFamily: '"Source Sans Pro", sans-serif',
                        fontWeight: 600,
                        cursor: "pointer",
                      }}
                    >
                      <Link
                        href="/services"
                        style={
                          currentPath === "/services"
                            ? activeLinkStyle
                            : linkStyle
                        }
                      >
                        Services
                      </Link>
                    </Typography>
                    <Typography
                      color="white"
                      sx={{
                        mt: 2,
                        fontSize: "14px",
                        width: "100%",
                        fontFamily: '"Source Sans Pro", sans-serif',
                        fontWeight: 600,
                        cursor: "pointer",
                      }}
                    >
                      <Link
                        href="/contact-us"
                        style={
                          currentPath === "/contact-us"
                            ? activeLinkStyle
                            : linkStyle
                        }
                      >
                        Contact Us
                      </Link>
                    </Typography>
                  </Box>
                </Box>
              </Grid>
              <Grid item xs={6} md={3.5}>
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "start",
                    mb: 5,
                    mt: 3,
                    justifyContent: { xs: "start", md: "center" },
                  }}
                >
                  <Box sx={{ mb: 2 }}>
                    <Typography
                      sx={{
                        mb: 4,
                        fontSize: "16px",
                        fontFamily: '"Source Sans Pro", sans-serif',
                        fontWeight: 600,
                      }}
                      color="white"
                    >
                      Company
                    </Typography>
                    <Typography
                      color="white"
                      sx={{
                        mt: 2,
                        fontSize: "14px",
                        width: "100%",
                        fontFamily: '"Source Sans Pro", sans-serif',
                        fontWeight: 600,
                        cursor: "pointer",
                      }}
                    >
                      <Link
                        href="/news"
                        style={
                          currentPath === "/news" ? activeLinkStyle : linkStyle
                        }
                      >
                        News & Articles
                      </Link>
                    </Typography>
                    <Typography
                      color="white"
                      sx={{
                        mt: 2,
                        width: "100%",
                        fontSize: "14px",
                        fontFamily: '"Source Sans Pro", sans-serif',
                        fontWeight: 600,
                        cursor: "pointer",
                      }}
                    >
                      <Link
                        href="/contact-us"
                        style={
                          currentPath === "/contact-us"
                            ? activeLinkStyle
                            : linkStyle
                        }
                      >
                        FAQs
                      </Link>
                    </Typography>
                  </Box>
                </Box>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12} md={4} sx={{ mt: { xs: 0, md: 8 } }}>
            <Typography
              variant="subtitle2"
              sx={{
                color: "white",
                fontSize: "16px",
                fontFamily: '"Source Sans Pro", sans-serif',
                fontWeight: 600,
              }}
            >
              Contact Details
            </Typography>
            <Divider
              width="80%"
              sx={{ height: "2px", backgroundColor: "#F08A16", mt: 2, mb: 2 }}
            />
            <Box>
              <Box sx={{ display: "flex", alignItems: "center", mb: 2 }} xs={4}>
                <CallIcon fontSize="small" sx={{ color: "#" }} />

                <Typography
                  color="white"
                  sx={{
                    ml: 2,
                    fontSize: "14px",
                    fontFamily: '"Source Sans Pro", sans-serif',
                    fontWeight: 400,
                  }}
                >
                  +234 803 391 0386
                </Typography>
              </Box>
            </Box>
            <Box>
              <Box sx={{ display: "flex", alignItems: "center", mb: 2 }} xs={4}>
                <EmailIcon fontSize="small" sx={{ color: "#" }} />

                <Typography
                  color="white"
                  sx={{
                    ml: 2,
                    fontSize: "14px",
                    fontFamily: '"Source Sans Pro", sans-serif',
                    fontWeight: 400,
                  }}
                >
                  info@argyleconsulting.ng
                </Typography>
              </Box>
            </Box>
            <Box>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  flexWrap: "wrap",
                  mb: 2,
                }}
                xs={4}
              >
                <LocationOnIcon fontSize="small" sx={{ color: "#" }} />

                <Typography
                  color="white"
                  sx={{
                    ml: 2,
                    fontSize: "14px",
                    fontFamily: '"Source Sans Pro", sans-serif',
                    fontWeight: 400,
                  }}
                >
                  Lagos State, Nigeria.
                </Typography>
              </Box>
            </Box>
          </Grid>
        </Grid>
        <Divider
          color="gray"
          sx={{ margin: { xs: "40px 0 10px", md: "20px 0 10px" } }}
        />
        <Typography
          color="white"
          sx={{
            mt: 2,
            fontSize: "14px",
            width: "100%",
            fontFamily: '"Source Sans Pro", sans-serif',
            fontWeight: 300,
            textAlign: "center",
          }}
        >
          Copyright © {new Date().getFullYear()}. Argyle Consulting. All rights
          reserved.
        </Typography>
      </Box>
    </>
  );
};

export default Footer;
