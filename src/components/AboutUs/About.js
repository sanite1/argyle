import { Box, Grid, Typography } from "@mui/material";
import AboutImg from "../../assets/images/experienceImg.png";
import AOS from "aos";
import "aos/dist/aos.css";
import React from "react";

const About = () => {
  React.useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);
  return (
    <Box>
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
              OUR PROFILE
            </Typography>
          </Box>
        </Grid>
      </Grid>
      <Grid container spacing={4}>
        <Grid item xs={12} md={7} data-aos="fade-right">
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              height: "100%",
              flexWrap: { xs: "wrap" },
            }}
          >
            <Box>
              <Box sx={{}}>
                <Typography
                  sx={{
                    fontSize: "14px",
                    fontFamily: '"Source Sans Pro", sans-serif',
                    fontWeight: 400,
                    marginBottom: "20px",
                  }}
                >
                  Argyle consulting is a professional consulting firm who
                  provides specialist tax, financial advisory, audit,
                  outsourcing and training services to resident and non-resident
                  companies in Nigeria as well as aiming to cover west Africa
                  and globally through affiliations and collaborations.
                </Typography>
                <Typography
                  sx={{
                    fontSize: "14px",
                    fontFamily: '"Source Sans Pro", sans-serif',
                    fontWeight: 400,
                    marginBottom: "20px",
                  }}
                >
                  We are a team who prides ourselves in using the highest
                  professional standards and expertise to provides cost
                  effective and value based services to our clients promoting
                  partnership and sustainability. Every member of our team is
                  focussed on creating value for our clients and this basically
                  affects how we set our objectives on every assignment, measure
                  our results and its impacts.
                </Typography>
                <Typography
                  sx={{
                    fontSize: "14px",
                    fontFamily: '"Source Sans Pro", sans-serif',
                    fontWeight: 400,
                    marginBottom: "20px",
                  }}
                >
                  The firm is not restricted in its ability to provide a full
                  range of our best- in-class services to businesses as our
                  platform allows us to assemble a team of experts to deliver
                  our services timely and seamlessly on every engagement. The
                  firm makes every effort to create an environment where every
                  individual is valued, able to develop, contribute to our
                  mission and vision and be proud of what we achieve. We make
                  every effort to protect the information our clients and
                  partners entrusted with us because we value and respect their
                  trust.
                </Typography>
              </Box>
            </Box>
          </Box>
        </Grid>
        <Grid item xs={12} md={5} data-aos="fade-left">
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              flexWrap: "wrap",
              height: "100%",
            }}
          >
            <img src={AboutImg} alt={"About"} style={{ width: "100%" }} />
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default About;
