import { Box, Grid, Link, Typography } from "@mui/material";
import smallPract1 from "../../assets/images/Apractice1.png";
import smallPract2 from "../../assets/images/Apractice2.png";
import smallPract3 from "../../assets/images/Apractice3.png";
import smallPract4 from "../../assets/images/Apractice4.png";
import practIcon1 from "../../assets/images/practIcon1.png";
import { useTheme } from "@mui/material/styles";

const Services = () => {
  const theme = useTheme();
  return (
    <Box
      sx={{
        background: "#f8f1e7",
        padding: { xs: "50px 5%", md: "5%" },
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
        OUR SERVICES
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
      <Typography
        sx={{
          fontSize: "14px",
          fontFamily: '"Source Sans Pro", sans-serif',
          fontWeight: 400,
          width: "fit-content",
          textAlign: "center",
          margin: { xs: "0 auto 20px" },
        }}
      >
        Tailored Solutions to Drive Success in Every Aspect of Your Business
      </Typography>
      <Grid container>
        <Grid item xs={12}>
          <Box
            sx={{
              display: "flex",
              flexWrap: "wrap",
              height: "100%",
              // background: "#131A34",
              boxSizing: "border-box",
            }}
          >
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6} md={3}>
                <Box
                  sx={{
                    backgroundImage: `url(${smallPract1})`,
                    backgroundSize: "cover", // Cover the entire box
                    backgroundPosition: "center", // Center the image
                    backgroundRepeat: "no-repeat", // Prevent tiling
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexWrap: "wrap",
                    height: "250px",
                    borderRadius: "15px",
                  }}
                >
                  <Box
                    sx={{
                      width: "100%",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      height: "250px",
                      backgroundColor: "rgba(19, 26, 52, 0.5)",
                      borderRadius: "15px",
                      margin: "auto",
                    }}
                  >
                    <Box>
                      <Box display={"flex"} justifyContent={"center"}>
                        <img
                          src={practIcon1}
                          alt={"icon"}
                          style={{ display: "flex", justifyContent: "center" }}
                        />
                      </Box>
                      <Typography
                        sx={{
                          fontSize: "16px",
                          fontFamily: '"Source Sans Pro", sans-serif',
                          fontWeight: 400,
                          color: "#fff",
                          width: { xs: "80%" },
                          textAlign: "center",
                          margin: "auto",
                        }}
                      >
                        Tax advisory & regulatory services
                      </Typography>
                    </Box>
                  </Box>
                </Box>
              </Grid>
              <Grid item xs={12} sm={6} md={3}>
                <Box
                  sx={{
                    backgroundImage: `url(${smallPract2})`,
                    backgroundSize: "cover", // Cover the entire box
                    backgroundPosition: "center", // Center the image
                    backgroundRepeat: "no-repeat", // Prevent tiling
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexWrap: "wrap",
                    height: "250px",
                    borderRadius: "15px",
                  }}
                >
                  <Box
                    sx={{
                      width: "100%",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      height: "250px",
                      backgroundColor: "rgba(19, 26, 52, 0.5)",
                      borderRadius: "15px",
                      margin: "auto",
                    }}
                  >
                    <Box>
                      <Box display={"flex"} justifyContent={"center"}>
                        <img
                          src={practIcon1}
                          alt={"icon"}
                          style={{ display: "flex", justifyContent: "center" }}
                        />
                      </Box>
                      <Typography
                        sx={{
                          fontSize: "16px",
                          fontFamily: '"Source Sans Pro", sans-serif',
                          fontWeight: 400,
                          color: "#fff",
                          width: { xs: "80%" },
                          textAlign: "center",
                          margin: "auto",
                        }}
                      >
                        Accounting & financial advisory services
                      </Typography>
                    </Box>
                  </Box>
                </Box>
              </Grid>
              <Grid item xs={12} sm={6} md={3}>
                <Box
                  sx={{
                    backgroundImage: `url(${smallPract3})`,
                    backgroundSize: "cover", // Cover the entire box
                    backgroundPosition: "center", // Center the image
                    backgroundRepeat: "no-repeat", // Prevent tiling
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexWrap: "wrap",
                    height: "250px",
                    borderRadius: "15px",
                  }}
                >
                  <Box
                    sx={{
                      width: "100%",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      height: "250px",
                      backgroundColor: "rgba(19, 26, 52, 0.5)",
                      borderRadius: "15px",
                      margin: "auto",
                    }}
                  >
                    <Box>
                      <Box display={"flex"} justifyContent={"center"}>
                        <img
                          src={practIcon1}
                          alt={"icon"}
                          style={{ display: "flex", justifyContent: "center" }}
                        />
                      </Box>
                      <Typography
                        sx={{
                          fontSize: "16px",
                          fontFamily: '"Source Sans Pro", sans-serif',
                          fontWeight: 400,
                          color: "#fff",
                          width: { xs: "80%" },
                          textAlign: "center",
                          margin: "auto",
                        }}
                      >
                        Book keeping & accounting services
                      </Typography>
                    </Box>
                  </Box>
                </Box>
              </Grid>
              <Grid item xs={12} sm={6} md={3}>
                <Box
                  sx={{
                    backgroundImage: `url(${smallPract4})`,
                    backgroundSize: "cover", // Cover the entire box
                    backgroundPosition: "center", // Center the image
                    backgroundRepeat: "no-repeat", // Prevent tiling
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexWrap: "wrap",
                    height: "250px",
                    borderRadius: "15px",
                  }}
                >
                  <Box
                    sx={{
                      width: "100%",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      height: "250px",
                      backgroundColor: "rgba(19, 26, 52, 0.5)",
                      borderRadius: "15px",
                      margin: "auto",
                    }}
                  >
                    <Box>
                      <Box display={"flex"} justifyContent={"center"}>
                        <img
                          src={practIcon1}
                          alt={"icon"}
                          style={{ display: "flex", justifyContent: "center" }}
                        />
                      </Box>
                      <Typography
                        sx={{
                          fontSize: "16px",
                          fontFamily: '"Source Sans Pro", sans-serif',
                          fontWeight: 400,
                          color: "#fff",
                          width: { xs: "80%" },
                          textAlign: "center",
                          margin: "auto",
                        }}
                      >
                        Financial statement preparation
                      </Typography>
                    </Box>
                  </Box>
                </Box>
              </Grid>
            </Grid>
          </Box>
        </Grid>
      </Grid>
      <Box
        sx={{ display: "flex", justifyContent: "center", marginTop: "30px" }}
      >
        <Link
          href="/services"
          color="inherit"
          underline="none"
          sx={{
            display: "flex",
            alignItems: "center",
            background: "#383184",
            outline: "none",
            borderRadius: "10px",
            padding: "10px 24px",
            letterSpacing: "1px",
            fontSize: "14px",
            fontFamily: '"Source Sans Pro", sans-serif',
            fontWeight: 300,
            color: "#fff",
          }}
        >
          Learn More
        </Link>
      </Box>
    </Box>
  );
};

export default Services;
