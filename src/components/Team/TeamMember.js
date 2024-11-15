import React from "react";
import { useParams } from "react-router-dom";
import { Box, Typography, Grid, Divider } from "@mui/material";
import teamMembers from "../../data/teamMembers";
import Navbar from "../Navbar";
import TeamIntro from "../../assets/images/TeamIntro.png";
import Footer from "../Footer";
import Error from "../../pages/Error";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { useTheme } from "@mui/material/styles";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";

const TeamMember = () => {
  React.useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const { id } = useParams();

  const member = teamMembers.find((member) => member.id === id);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  const theme = useTheme();

  if (!member) {
    return <Error />;
  }

  return (
    <Box>
      <Navbar />
      <Box
        sx={{
          backgroundImage: `url(${TeamIntro})`,
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
              Dedicated Expertise for Your Business Success
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
              At Argyle Consulting, our professionals bring a wealth of
              experience and tailored insights to meet your unique business
              challenges. With deep expertise across industries, we are here to
              help you navigate complexities, optimize performance, and achieve
              your objectives. Explore how our team’s expertise can add value to
              your organization, and let’s connect today.
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
      <Box
        sx={{
          width: "80%",
          margin: "50px auto",
        }}
      >
        <Grid container spacing={2}>
          <Grid item xs={12} md={4} data-aos="fade-right">
            <img
              src={member.image}
              alt={member.name}
              style={{ width: "100%" }}
            />
            <Typography
              sx={{
                fontSize: "16px",
                fontFamily: '"Source Sans Pro", sans-serif',
                fontWeight: 600,
              }}
            >
              {member.name}
            </Typography>
            <Typography
              sx={{
                fontSize: "16px",
                fontFamily: '"Source Sans Pro", sans-serif',
                fontWeight: 600,
                color: "#383184",
              }}
            >
              {member.role}
            </Typography>
          </Grid>
          <Grid item xs={12} md={8} data-aos="fade-left">
            {member.bio.map((member) => (
              <Typography
                key={member.id}
                sx={{
                  fontSize: "16px",
                  fontFamily: '"Source Sans Pro", sans-serif',
                  fontWeight: 300,
                  marginBottom: "10px",
                }}
              >
                {member}
              </Typography>
            ))}
            <Box>
              {member.designations ? (
                <>
                  <Typography
                    sx={{
                      fontSize: "20px",
                      fontFamily: '"Source Sans Pro", sans-serif',
                      fontWeight: 600,
                      marginBottom: "10px",
                    }}
                  >
                    Designation
                  </Typography>
                  <Divider />
                </>
              ) : (
                <></>
              )}
              {member.designations ? (
                member.designations.map((point) => (
                  <Box>
                    <Box
                      sx={{
                        width: "100%",
                        display: "flex",
                        margin: "10px 0",
                        zIndex: 0,
                      }}
                    >
                      <CheckCircleIcon
                        fontSize="small"
                        sx={{ color: "#383184", zIndex: 0 }}
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
            <Box>
              {member.membership ? (
                <>
                  <Typography
                    sx={{
                      fontSize: "20px",
                      fontFamily: '"Source Sans Pro", sans-serif',
                      fontWeight: 600,
                      marginBottom: "10px",
                    }}
                  >
                    Memberships
                  </Typography>
                  <Divider />
                </>
              ) : (
                <></>
              )}
              {member.membership ? (
                member.membership.map((point) => (
                  <Box>
                    <Box
                      sx={{
                        width: "100%",
                        display: "flex",
                        margin: "10px 0",
                        zIndex: 0,
                      }}
                    >
                      <CheckCircleIcon
                        fontSize="small"
                        sx={{ color: "#383184", zIndex: 0 }}
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
            <Box>
              {member.education ? (
                <>
                  <Typography
                    sx={{
                      fontSize: "20px",
                      fontFamily: '"Source Sans Pro", sans-serif',
                      fontWeight: 600,
                      marginBottom: "10px",
                    }}
                  >
                    Education
                  </Typography>
                  <Divider />
                </>
              ) : (
                <></>
              )}
              {member.education ? (
                member.education.map((point) => (
                  <Box>
                    <>
                      <Typography
                        sx={{
                          fontSize: "16px",
                          zIndex: 0,
                        }}
                      >
                        {point.school}
                      </Typography>

                      <Box
                        sx={{
                          width: "100%",
                          display: "flex",
                          margin: "10px 0",
                          zIndex: 0,
                        }}
                      >
                        <CheckCircleIcon
                          fontSize="small"
                          sx={{ color: "#383184", zIndex: 0 }}
                        />
                        <Typography
                          sx={{
                            fontSize: "16px",
                            marginLeft: "15px",
                            zIndex: 0,
                          }}
                        >
                          {point.type}
                        </Typography>
                      </Box>
                    </>
                  </Box>
                ))
              ) : (
                <></>
              )}
            </Box>
          </Grid>
        </Grid>
      </Box>

      <Footer />
    </Box>
  );
};

export default TeamMember;
