import { Box, Grid, Typography } from "@mui/material";
import AOS from "aos";
import "aos/dist/aos.css";
import React, { useEffect } from "react";
import ServicesData from "../../data/servicesData";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";

const ServiceCards = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <Box>
      <Box>
        {ServicesData.map((pract) => (
          <Grid container>
            <Grid
              item
              key={pract.id}
              xs={12}
              md={6}
              sx={{
                order: { xs: 1, md: pract.md },
                padding: { xs: "20px", md: "50px" },
                boxSizing: "border-box",
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
                <Box>
                  <Typography
                    sx={{
                      fontSize: "36px",
                      fontFamily: '"Source Sans Pro", sans-serif',
                      fontWeight: 600,
                      width: "100%",
                    }}
                  >
                    {pract.name}
                  </Typography>
                  <Typography
                    sx={{
                      fontSize: "16px",
                      fontFamily: '"Source Sans Pro", sans-serif',
                      fontWeight: 300,
                      width: "100%",
                    }}
                  >
                    {pract.desc}
                  </Typography>

                  {pract.bulletPoints ? (
                    pract.bulletPoints.map((point) => (
                      <Box>
                        <Box
                          sx={{
                            width: "100%",
                            display: "flex",
                            alignItems: "center",
                            marginBottom: "6px",
                            zIndex: 0,
                          }}
                        >
                          <CheckCircleIcon
                            fontSize="small"
                            sx={{ color: "#E0A422", zIndex: 0 }}
                          />
                          <Typography
                            sx={{
                              fontSize: "16px",
                              marginLeft: "15px",
                              zIndex: 0,
                            }}
                          >
                            {point}
                          </Typography>
                        </Box>
                      </Box>
                    ))
                  ) : (
                    <></>
                  )}
                </Box>
              </Box>
            </Grid>
            <Grid
              item
              key={pract.id}
              xs={12}
              md={6}
              sx={{
                order: { xs: 2, md: pract.xs },
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  flexWrap: "wrap",
                  backgroundImage: `url(${pract.image})`,
                  height: { xs: "200px", md: "100%" },
                }}
              ></Box>
            </Grid>
          </Grid>
        ))}
      </Box>
    </Box>
  );
};

export default ServiceCards;
