import { Box, Link } from "@mui/material";
import { useLocation } from "react-router-dom";
import * as React from "react";
import Typography from "@mui/material/Typography";
import MenuIcon from "@mui/icons-material/Menu";
import { useState, useEffect } from "react";
import ClearIcon from "@mui/icons-material/Clear";
import Logo from "../assets/images/logo.png";

const Navbar = () => {
  const location = useLocation();
  const currentPath = location.pathname;

  const [bgColor, setBgColor] = useState("#fff");
  const handleScroll = () => {
    if (window.scrollY > 0) {
      setBgColor("#fff");
    } else {
      setBgColor("#fff");
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const linkStyle = {
    color: "#000",
    textDecoration: "none",
  };

  const activeLinkStyle = {
    color: "#383184",
    fontWeight: "bold",
    textDecoration: "none",
  };

  const [sideBar, setSideBar] = useState(false);
  useEffect(() => {
    if (sideBar) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [sideBar]);

  return (
    <Box>
      <Box
        sx={{
          position: "relative",
        }}
      >
        <Box
          sx={{
            position: "fixed",
            top: "0",
            width: "100%",
            background: bgColor,
            zIndex: "9999",
            borderBottom: "2px solid #F08A16",
          }}
        >
          <Box
            sx={{
              display: "grid",
              gridTemplateColumns: "17% 17% 66%",
              width: "90%",
              margin: "auto",
              padding: "0 5%",
              height: "10vh",
              borderBottomStyle: "solid",
              borderBottom: "1px",
              borderBottomColor: "black",
              zIndex: "9999",
            }}
          >
            {/* Side  bar  */}
            <Box
              sx={{
                position: "absolute",
                height: "100vh",
                width: "100%",
                background: "lightgray",
                zIndex: "9999",
                display: sideBar ? "block" : "none",
                padding: "10%",
                boxSizing: "border-box",
                left: "0",
              }}
            >
              <Box
                sx={{
                  color: "white",
                  marginBottom: "50px",
                }}
              >
                <img
                  style={{ width: "200px", color: "#383184" }}
                  src={Logo}
                  alt="Logo"
                />
                <Box
                  sx={{ float: "right" }}
                  onClick={() => setSideBar(!sideBar)}
                >
                  <ClearIcon fontSize="large" sx={{ color: "#383184" }} />
                </Box>
              </Box>
              <Box
                sx={{
                  display: { xs: "flex", md: "flex" },
                  // justifyContent: "space-around",
                  // alignItems: "center",
                  flexWrap: "wrap",
                  margin: "auto",
                }}
              >
                <Typography
                  variant="body"
                  sx={{
                    color: "#fff",
                    marginBottom: "20px",
                    fontFamily: '"Source Sans Pro", sans-serif',
                    width: "100%",
                  }}
                >
                  <Link
                    href="/"
                    style={currentPath === "/" ? activeLinkStyle : linkStyle}
                  >
                    Home
                  </Link>
                </Typography>
                <Typography
                  variant="body"
                  sx={{
                    color: "#fff",
                    marginBottom: "20px",
                    fontFamily: '"Source Sans Pro", sans-serif',
                    width: "100%",
                  }}
                >
                  <Link
                    href="/about-us"
                    style={
                      currentPath === "/about-us" ? activeLinkStyle : linkStyle
                    }
                  >
                    About Us
                  </Link>
                </Typography>
                <Typography
                  variant="body"
                  sx={{
                    color: "#fff",
                    marginBottom: "20px",
                    fontFamily: '"Source Sans Pro", sans-serif',
                    width: "100%",
                  }}
                >
                  <Link
                    href="/services"
                    style={
                      currentPath === "/services" ? activeLinkStyle : linkStyle
                    }
                  >
                    Services
                  </Link>
                </Typography>
                <Typography
                  variant="body"
                  sx={{
                    color: "#fff",
                    marginBottom: "20px",
                    fontFamily: '"Source Sans Pro", sans-serif',
                    width: "100%",
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
                <Link
                  href="/contact-us"
                  color="black"
                  underline="none"
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    background: "#383184",
                    color: "#fff",
                    outline: "none",
                    borderRadius: "10px",
                    padding: "10px 24px",
                    letterSpacing: "1px",
                    fontSize: "14px",
                    fontFamily: '"Source Sans Pro", sans-serif',
                    fontWeight: 300,
                    textDecoration: "none",
                    textAlign: "center",
                  }}
                >
                  Contact Us{" "}
                </Link>
                {/* <Typography variant="body2">Team</Typography> */}
              </Box>
            </Box>
            {/* Logo  */}
            <Box
              sx={{
                display: "flex",
                justifyContent: "start",
                alignItems: "center",
              }}
            >
              <Box
                component="img"
                sx={{
                  width: { xs: "200px", md: "100%" },
                }}
                src={Logo}
                alt="Logo"
              />
            </Box>
            <Box
              sx={{
                display: { xs: "none", md: "flex" },
                justifyContent: "end",
                alignItems: "center",
              }}
            ></Box>
            <Box
              sx={{
                display: { xs: "flex", md: "flex" },
                visibility: { xs: "hidden", md: "visible" },
                justifyContent: "end",
                alignItems: "center",
                width: "100%",
                // margin: "auto",
              }}
            >
              <Box
                sx={{
                  display: { xs: "flex", md: "flex" },
                  visibility: { xs: "hidden", md: "visible" },
                  justifyContent: "space-between",
                  alignItems: "center",
                  width: "80%",
                }}
              >
                <Typography
                  variant="body2"
                  color="#FFF"
                  sx={{
                    fontSize: "14px",
                    fontFamily: '"Source Sans Pro", sans-serif',
                  }}
                >
                  <Link
                    href="/"
                    style={currentPath === "/" ? activeLinkStyle : linkStyle}
                  >
                    HOME
                  </Link>
                </Typography>
                <Typography
                  variant="body2"
                  color="#FFF"
                  sx={{
                    fontSize: "14px",
                    fontFamily: '"Source Sans Pro", sans-serif',
                  }}
                >
                  <Link
                    href="/about-us"
                    style={
                      currentPath === "/about-us" ? activeLinkStyle : linkStyle
                    }
                  >
                    ABOUT US
                  </Link>
                </Typography>
                <Typography
                  variant="body2"
                  color="#FFF"
                  sx={{
                    fontSize: "14px",
                    fontFamily: '"Source Sans Pro", sans-serif',
                  }}
                >
                  <Link
                    href="/services"
                    style={
                      currentPath === "/services" ? activeLinkStyle : linkStyle
                    }
                  >
                    SERVICES
                  </Link>
                </Typography>
                <Typography
                  variant="body2"
                  color="#FFF"
                  sx={{
                    fontSize: "14px",
                    fontFamily: '"Source Sans Pro", sans-serif',
                  }}
                >
                  <Link
                    href="/news"
                    style={
                      currentPath === "/news" ? activeLinkStyle : linkStyle
                    }
                  >
                    NEWS & ARTICLES
                  </Link>
                </Typography>
                <Link
                  href="/contact-us"
                  color="black"
                  underline="none"
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    background: "#383184",
                    color: "#fff",
                    outline: "none",
                    borderRadius: "10px",
                    padding: "10px 24px",
                    // marginRight: "20px",
                    letterSpacing: "1px",
                    fontSize: "14px",
                    fontFamily: '"Source Sans Pro", sans-serif',
                    fontWeight: 300,
                    textDecoration: "none",
                  }}
                >
                  Contact Us{" "}
                </Link>
              </Box>
            </Box>
            <Box
              onClick={() => setSideBar(!sideBar)}
              sx={{
                display: { md: "none", xs: "flex" },
                justifyContent: "end",
                alignItems: "center",
              }}
            >
              <Box
                onClick={() => setSideBar(!sideBar)}
                sx={{
                  display: { md: "none", xs: "flex" },
                  justifyContent: "end",
                  alignItems: "center",
                  height: "35px",
                  width: "35px",
                  background: "#fff",
                  borderRadius: "5px",
                }}
              >
                <MenuIcon fontSize="large" sx={{ color: "#383184" }} />
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Navbar;
