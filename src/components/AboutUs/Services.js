import { Box, Grid, Typography } from "@mui/material";
import StarIcon from "@mui/icons-material/Star";
import AOS from "aos";
import "aos/dist/aos.css";
import React from "react";

const Services = () => {
  React.useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <Box
      sx={{
        padding: "80px 0",
        backgroundColor: "#0f1417",
        color: "#fff",
        boxSizing: "border-box",
        textAlign: "center",
      }}
    >
      {/* Header Section */}
      <Box data-aos="fade-up" sx={{ marginBottom: "40px" }}>
        <Typography
          variant="h4"
          sx={{
            fontWeight: 700,
            fontFamily: '"Source Sans Pro", sans-serif',
            borderBottom: "3px solid #383184",
            display: "inline-block",
            marginBottom: "10px",
            paddingBottom: "5px",
          }}
        >
          What We Do
        </Typography>
        <Typography
          sx={{
            marginTop: "10px",
            width: { xs: "90%", md: "60%" },
            marginX: "auto",
            fontSize: "18px",
            lineHeight: 1.8,
            fontFamily: '"Source Sans Pro", sans-serif',
          }}
        >
          Our services encompass a comprehensive range of solutions expertly
          tailored for diverse industries.
        </Typography>
      </Box>

      {/* Service Overview Section */}
      <Grid container sx={{ width: { xs: "90%", md: "80%" }, margin: "auto" }}>
        {/* Training Programs Column */}
        <Grid item xs={12} md={6} data-aos="fade-right">
          <Box
            sx={{
              backgroundColor: "#383184",
              padding: "30px",
              boxSizing: "border-box",
              height: "100%",
              width: { xs: "100%", md: "90%" },
              marginX: "auto",
              textAlign: "left",
            }}
          >
            <Typography
              variant="h5"
              sx={{ fontWeight: 700, marginBottom: "15px" }}
            >
              Specialised Finance Sectors Covered
            </Typography>
            {[
              "Tax advisory & regulatory services",
              "Accounting & financial advisory services",
              "Book keeping & accounting services",
              "Financial statement preparation",
              "Conversion from local GAAP to IFRS",
              "Account system set-up",
              "Business control services",
              "Audit services",
              "Risk assesments",
            ].map((service, index) => (
              <Box
                key={index}
                sx={{
                  display: "flex",
                  alignItems: "start",
                  marginBottom: "10px",
                }}
              >
                <StarIcon sx={{ color: "#ce1e24", marginRight: "10px" }} />
                <Typography
                  sx={{
                    fontSize: "16px",
                    fontFamily: '"Source Sans Pro", sans-serif',
                  }}
                >
                  {service}
                </Typography>
              </Box>
            ))}
          </Box>
        </Grid>

        {/* Specialized Sectors Column */}
        <Grid item xs={12} md={6} data-aos="fade-left">
          <Box
            sx={{
              backgroundColor: "#383184",
              // borderRadius: "15px",
              padding: "30px",
              boxSizing: "border-box",
              height: "100%",
              width: { xs: "100%", md: "90%" },
              marginX: "auto",
              marginTop: { xs: "20px", md: "0" },
              textAlign: "left",
            }}
          >
            <Typography
              variant="h5"
              sx={{ fontWeight: 700, marginBottom: "15px" }}
            >
              Specialised IT Sectors Covered
            </Typography>
            {["Website Design", "Website Development", "Data Analytics"].map(
              (sector, index) => (
                <Box
                  key={index}
                  sx={{
                    display: "flex",
                    alignItems: "start",
                    marginBottom: "10px",
                  }}
                >
                  <StarIcon sx={{ color: "#ce1e24", marginRight: "10px" }} />
                  <Typography
                    sx={{
                      fontSize: "16px",
                      fontFamily: '"Source Sans Pro", sans-serif',
                    }}
                  >
                    {sector}
                  </Typography>
                </Box>
              )
            )}
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Services;
