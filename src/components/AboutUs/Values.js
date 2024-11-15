import { Box, Grid, Typography } from "@mui/material";
import AOS from "aos";
import "aos/dist/aos.css";
import React from "react";
import { useTheme } from "@mui/material/styles";

const Values = () => {
  React.useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const theme = useTheme();
  return (
    <Box
      sx={{
        margin: "50px auto",
        padding: "10px 0 50px ",
        background: "#f8f1e7",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        color: "#000",
      }}
    >
      <Box
        data-aos="fade-up"
        sx={{
          width: { xs: "90%", md: "80%" },
          margin: "50px auto",
        }}
      >
        <Typography
          sx={{
            fontSize: {
              xs: theme.typography.h5.fontSize,
              md: theme.typography.h4.fontSize,
            },
            fontFamily: '"Source Sans Pro", sans-serif',
            fontWeight: 600,
            width: "fit-content",
            margin: { xs: "auto" },
            textAlign: "center",
          }}
        >
          Mission & VISION
        </Typography>
        <Box
          sx={{
            background: "#383184",
            width: "10%",
            height: "5px",
            margin: { xs: "0 auto 10px" },
            textAlign: "center",
          }}
        ></Box>
      </Box>
      <Grid container sx={{ width: "80%", margin: "auto" }}>
        <Grid
          data-aos="fade-right"
          item
          xs={12}
          sm={6}
          sx={{
            width: { xs: "100%" },
          }}
        >
          <Box
            sx={{
              width: { xs: "100%", md: "70%" },
              margin: "auto",
              padding: { xs: "20px" },
              backgroundColor: "#383184",
              color: "#fff",
              borderRadius: "0px 30px 0px 30px",
              boxSizing: "border-box",
            }}
          >
            <Typography
              sx={{
                fontSize: "20px",
                fontFamily: '"Source Sans Pro", sans-serif',
                fontWeight: 700,
                margin: "10px 0",
                textAlign: "center",
              }}
            >
              MISSION
            </Typography>
            <Typography
              sx={{
                fontSize: "16px",
                fontFamily: '"Source Sans Pro", sans-serif',
                fontWeight: 400,
                textAlign: { xs: "justify", md: "center" },
              }}
            >
              To be the best in everything we do, applying our experience and
              industry knowledge to create value for our clients.
            </Typography>
          </Box>
        </Grid>
        <Grid
          data-aos="fade-left"
          item
          xs={12}
          sm={6}
          sx={{
            width: { xs: "100%" },
            marginTop: { xs: "20px", sm: "0" },
          }}
        >
          <Box
            sx={{
              width: { xs: "100%", md: "70%" },
              margin: "auto",
              padding: { xs: "20px" },
              backgroundColor: "#383184",
              color: "#fff",
              borderRadius: "30px 0 30px 0",
              boxSizing: "border-box",
            }}
          >
            <Typography
              sx={{
                fontSize: "20px",
                fontFamily: '"Source Sans Pro", sans-serif',
                fontWeight: 700,
                margin: "10px 0",
                textAlign: "center",
              }}
            >
              VISION
            </Typography>
            <Typography
              sx={{
                fontSize: "16px",
                fontFamily: '"Source Sans Pro", sans-serif',
                fontWeight: 400,
                textAlign: { xs: "justify", md: "center" },
              }}
            >
              To provide professional services that help our clients add value,
              improve performance and secure sustainability
            </Typography>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Values;
