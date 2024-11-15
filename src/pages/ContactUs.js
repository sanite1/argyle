import {
  Box,
  Grid,
  Link,
  Typography,
  TextField,
  IconButton,
} from "@mui/material";
import Navbar from "../components/Navbar";
import ContactIntro from "../assets/images/AHomeIntro.avif";
import Footer from "../components/Footer";
import { useEffect, useState } from "react";
import { useTheme } from "@mui/material/styles";
import EmailIcon from "@mui/icons-material/Email";
import { useForm, Controller } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import AOS from "aos";
import "aos/dist/aos.css";
import React from "react";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import PhoneIcon from "@mui/icons-material/Phone";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TwitterIcon from "@mui/icons-material/Twitter";
import FacebookIcon from "@mui/icons-material/Facebook";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { faq } from "../data/faqs";

const ContactUs = () => {
  React.useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  // Accordion state management
  const [expanded, setExpanded] = useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  const textFieldStyles = {
    "& .MuiInput-root": {
      color: "#000",
      fontFamily: '"Source Sans Pro", sans-serif',
      fontSize: "14px",
      padding: "5px",
      marginTop: "20px",
      "&:before": {
        borderColor: "#000",
        borderWidth: "1px",
      },
      "&:after": {
        borderColor: "#000",
        borderWidth: "1px",
      },
      ":hover:not(.Mui-focused)": {
        "&:before": {
          borderColor: "#000",
          borderWidth: "1px",
        },
      },
    },
    // Label
    "& .MuiInputLabel-standard": {
      color: "#000",
      "&.Mui-focused": {
        color: "000",
      },
    },
  };

  const schema = yup.object().shape({
    name: yup.string().required("Name Is required"),
    email: yup.string().required("Email Is required"),
    details: yup.string().required("Message Is required"),
  });

  const { trigger, control } = useForm({
    resolver: yupResolver(schema),
  });

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [details, setDetails] = useState("");
  const onSubmit = () => {
    const mailtoLink = `mailto:info@argyleconsultinf.ng?subject=Case%20Consultation&body=Name:%20${encodeURIComponent(
      name
    )}%0AEmail:%20${encodeURIComponent(
      email
    )}%0ADetails:%20${encodeURIComponent(details)}`;
    window.location.href = mailtoLink;
  };
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);
  const theme = useTheme();
  return (
    <Box>
      <Navbar />

      <Box
        sx={{
          backgroundImage: `url(${ContactIntro})`,
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
              Let’s Start a Conversation
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
              Connect with Argyle Consulting to discover how our team can
              support your business. Whether you’re looking for advice on a
              specific challenge or interested in exploring a partnership, reach
              out today and take the first step toward impactful results and new
              opportunities.
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
        data-aos="fade-up"
        sx={{
          width: { xs: "100%", md: "80%" },
          margin: "50px auto",
        }}
      >
        <Grid container mb={5}>
          <Grid
            item
            xs={2}
            sx={{
              width: "10%",
              height: "50px",
              backgroundColor: "#383184",
              clipPath: "polygon(0% 0%, 85% 0%, 100% 100%, 0% 100%)",
            }}
          ></Grid>
          <Grid
            item
            xs={10}
            sx={{
              width: "90%",
              height: "50px",
              backgroundColor: "#F08A16",
              clipPath: "polygon(0% 0%, 125% 0%, 100% 100%, 3% 105%)",
            }}
          >
            <Box
              sx={{
                display: "flex",
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
                  color: { xs: "#FFF" },
                }}
              >
                CONTACT US
              </Typography>
            </Box>
          </Grid>
        </Grid>

        <Box>
          {/* Contact Information Section */}
          <Grid container spacing={4} sx={{ mt: 4, px: 4 }}>
            <Grid item xs={12} md={6}>
              <Typography
                variant="h5"
                sx={{
                  fontFamily: '"Source Sans Pro", sans-serif',
                  fontSize: "16px",
                  fontWeight: "bold",
                  mb: 2,
                }}
              >
                Reach Out to Us
              </Typography>
              <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
                <LocationOnIcon sx={{ color: "#383184", mr: 2 }} />
                <Typography
                  variant="body1"
                  sx={{
                    fontFamily: '"Source Sans Pro", sans-serif',
                    fontSize: "16px",
                  }}
                >
                  123 Argyle Avenue, Lagos, Nigeria
                </Typography>
              </Box>
              <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
                <PhoneIcon sx={{ color: "#383184", mr: 2 }} />
                <Typography
                  variant="body1"
                  sx={{
                    fontFamily: '"Source Sans Pro", sans-serif',
                    fontSize: "16px",
                  }}
                >
                  +234 803 391 0386
                </Typography>
              </Box>
              <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
                <EmailIcon sx={{ color: "#383184", mr: 2 }} />
                <Typography
                  variant="body1"
                  sx={{
                    fontFamily: '"Source Sans Pro", sans-serif',
                    fontSize: "16px",
                  }}
                >
                  info@argyleconsulting.com
                </Typography>
              </Box>
              <Typography
                variant="body1"
                sx={{
                  fontFamily: '"Source Sans Pro", sans-serif',
                  fontSize: "16px",
                  fontWeight: "bold",
                  mt: 4,
                }}
              >
                Working Hours:
              </Typography>
              <Typography
                variant="body1"
                sx={{
                  fontFamily: '"Source Sans Pro", sans-serif',
                  fontSize: "16px",
                }}
              >
                Monday – Friday: 9 AM – 5 PM
              </Typography>
            </Grid>

            <Grid item xs={12} md={6}>
              <iframe
                title="Map"
                src="https://www.google.com/maps/embed"
                style={{
                  width: "100%",
                  height: "250px",
                  border: "0",
                  borderRadius: "8px",
                }}
                loading="lazy"
              ></iframe>
            </Grid>
          </Grid>
        </Box>
      </Box>

      <Grid
        container
        // spacing={3}
        data-aos="fade-left"
        sx={{
          width: { xs: "80%", md: "80%" },
          margin: "auto",
        }}
      >
        <Grid item xs={12} md={6}>
          <Box sx={{ position: "relative", mb: "20px" }}>
            <Box
              sx={{
                padding: "30px",
                width: { xs: "100%", md: "100%" },
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                borderRadius: "8px",
                background: "#f8f1e7",
                boxSizing: "border-box",
              }}
            >
              <Typography
                variant="body1"
                sx={{
                  width: "100%",
                  marginBottom: "25px",
                  fontFamily: '"Source Sans Pro", sans-serif',
                  letterSpacing: "1px",
                  fontWeight: "700",
                  color: "#000",
                }}
              >
                Send us a message
              </Typography>
              <Controller
                name="name"
                marginBottom={"4px"}
                control={control}
                defaultValue=""
                render={({
                  field: { ref, ...fields },
                  fieldState: { error },
                }) => (
                  <TextField
                    sx={textFieldStyles}
                    variant="standard"
                    placeholder="Enter your full name"
                    size="small"
                    fullWidth
                    {...fields}
                    inputRef={ref}
                    error={Boolean(error?.message)}
                    helperText={error?.message}
                    onKeyUp={() => {
                      trigger("name");
                      setName(fields.value);
                    }}
                  />
                )}
              />
              <Controller
                name="email"
                control={control}
                defaultValue=""
                render={({
                  field: { ref, ...fields },
                  fieldState: { error },
                }) => (
                  <TextField
                    sx={textFieldStyles}
                    variant="standard"
                    placeholder="Enter your email"
                    size="small"
                    fullWidth
                    {...fields}
                    inputRef={ref}
                    error={Boolean(error?.message)}
                    helperText={error?.message}
                    onKeyUp={() => {
                      trigger("email");
                      setEmail(fields.value);
                    }}
                  />
                )}
              />
              <Controller
                name="details"
                control={control}
                defaultValue=""
                render={({
                  field: { ref, ...fields },
                  fieldState: { error },
                }) => (
                  <TextField
                    sx={textFieldStyles}
                    variant="standard"
                    multiline
                    minRows={4}
                    placeholder="Write your message here"
                    size="small"
                    fullWidth
                    {...fields}
                    inputRef={ref}
                    error={Boolean(error?.message)}
                    helperText={error?.message}
                    onKeyUp={() => {
                      trigger("details");
                      setDetails(fields.value);
                    }}
                  />
                )}
              />
              <Box mt={"20px"}>
                <Typography variant="body2">
                  <Link
                    onClick={onSubmit}
                    style={{
                      color: "white",
                      display: "flex",
                      alignItems: "center",
                      background: "#383184",
                      outline: "none",
                      borderRadius: "10px",
                      padding: "10px 24px",
                      letterSpacing: "1px",
                      fontSize: "14px",
                      fontFamily: '"Source Sans Pro", sans-serif',
                      textDecoration: "none",
                      fontWeight: "600",
                      cursor: "pointer",
                      width: "fit-content",
                    }}
                  >
                    Send Message
                  </Link>
                </Typography>
              </Box>
            </Box>
          </Box>
        </Grid>
        <Grid item xs={12} md={6}>
          <Box
            data-aos="fade-up"
            sx={{
              width: { xs: "100%", md: "90%" },
              margin: "auto",
            }}
          >
            <Typography
              variant="h5"
              color="black"
              fontWeight={600}
              textAlign="center"
              sx={{
                fontFamily: '"Source Sans Pro", sans-serif',
              }}
            >
              Frequently Asked Questions
            </Typography>

            <Box
              sx={{
                width: "180px",
                height: "3px",
                backgroundColor: "#383184",
                margin: "auto",
                mt: 2,
              }}
            />

            {faq.map((item) => (
              <Box key={item.id} data-aos="fade-up">
                <Accordion
                  expanded={expanded === item.id}
                  onChange={handleChange(item.id)}
                  sx={{
                    padding: "10px 20px",
                    boxShadow: "none",
                    borderBottom: "1px solid gray",
                    borderRadius: "0px",
                  }}
                >
                  <AccordionSummary
                    expandIcon={
                      <ExpandMoreIcon
                        sx={{
                          background: expanded === item.id ? "#383184" : "#000",
                          color: "white",
                          borderRadius: "50%",
                        }}
                      />
                    }
                    aria-controls={`panel-${item.id}-content`}
                    id={`panel-${item.id}-header`}
                  >
                    <Typography
                      sx={{
                        color: "black",
                        fontFamily: '"Source Sans Pro", sans-serif',
                      }}
                    >
                      {item.question}
                    </Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography
                      sx={{
                        color: "black",
                        fontFamily: '"Source Sans Pro", sans-serif',
                      }}
                    >
                      {item.answer}
                    </Typography>
                  </AccordionDetails>
                </Accordion>
              </Box>
            ))}
          </Box>
        </Grid>
      </Grid>
      <Box>
        {/* Social Media Section */}
        <Box
          sx={{
            textAlign: "center",
            mt: 6,
            py: 4,
            backgroundColor: "#f5f5f5",
          }}
        >
          <Typography variant="h6" sx={{ fontWeight: "bold", mb: 2 }}>
            Connect with Us
          </Typography>
          <Box>
            <IconButton href="#" sx={{ color: "#383184", mx: 1 }}>
              <LinkedInIcon />
            </IconButton>
            <IconButton href="#" sx={{ color: "#383184", mx: 1 }}>
              <TwitterIcon />
            </IconButton>
            <IconButton href="#" sx={{ color: "#383184", mx: 1 }}>
              <FacebookIcon />
            </IconButton>
          </Box>
        </Box>
      </Box>

      <Footer />
    </Box>
  );
};

export default ContactUs;
