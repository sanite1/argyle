import { useParams } from "react-router-dom";
import { Link } from "@mui/material";
import ShareIcon from "@mui/icons-material/Share";

import Blogs from "../data/blogs"; // Import blog data
import {
  Box,
  Typography,
  Container,
  Button,
  Grid,
  Divider,
  CardMedia,
  IconButton,
} from "@mui/material";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import IntroImage from "../assets/images/ANews.png";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import React from "react";
import { useTheme } from "@mui/material/styles";

const BlogPost = () => {
  React.useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  const { id } = useParams();
  const theme = useTheme();
  const blog = Blogs.find((post) => post.link === id);

  if (!blog) {
    return (
      <Box sx={{ textAlign: "center", mt: 10 }}>
        <Typography variant="h4" color="error">
          Blog post not found!
        </Typography>
        <Link to="/blogs" style={{ textDecoration: "none" }}>
          <Button variant="contained" sx={{ mt: 2 }}>
            Go Back to Blogs
          </Button>
        </Link>
      </Box>
    );
  }

  return (
    <Box>
      <Navbar />

      <Box
        sx={{
          backgroundImage: `url(${IntroImage})`,
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
              Insights to Keep You Ahead
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
              Stay informed with Argyle Consulting’s latest news, industry
              insights, and expert articles. Here, you’ll find valuable
              perspectives on trends, strategies, and best practices across tax,
              finance, audit, and more—equipping you with the knowledge to make
              informed decisions and drive success.
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

      <Container maxWidth="lg" sx={{ mt: "8vh", px: { xs: 2, md: 4 } }}>
        {/* Hero Section */}
        <Box
          sx={{
            position: "relative",
            height: { xs: 300, md: 450 },
            mb: 4,
            borderRadius: 2,
            overflow: "hidden",
          }}
        >
          <CardMedia
            component="img"
            image={blog.image}
            alt={blog.name}
            sx={{
              height: "100%",
              width: "100%",
              objectFit: "cover",
              filter: "brightness(0.7)",
            }}
          />
          <Typography
            variant="h3"
            sx={{
              position: "absolute",
              bottom: 20,
              left: 20,
              color: "white",
              fontWeight: 700,
              fontSize: { xs: "1.8rem", md: "2.5rem" },
              backgroundColor: "rgba(0, 0, 0, 0.5)",
              px: 2,
              py: 1,
              borderRadius: 1,
            }}
          >
            {blog.name}
          </Typography>
        </Box>

        {/* Date and Share Options */}
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            mb: 3,
          }}
        >
          <Typography variant="subtitle1" sx={{ color: "gray" }}>
            {blog.date}
          </Typography>
          <IconButton aria-label="Share" sx={{ color: "gray" }}>
            <ShareIcon />
          </IconButton>
        </Box>

        {/* Blog Description */}
        <Box sx={{ mb: 5 }}>
          <Typography
            variant="h5"
            sx={{
              fontWeight: 600,
              mb: 3,
              borderBottom: "2px solid #383184",
              display: "inline-block",
              pb: 1,
            }}
          >
            About the Blog
          </Typography>
          {blog.desc.map((paragraph, index) => (
            <Typography
              key={index}
              variant="body1"
              sx={{ mb: 3, lineHeight: 1.8, textAlign: "justify" }}
            >
              {paragraph}
            </Typography>
          ))}
        </Box>

        {/* Bullet Points (If available) */}
        {blog.bullets && (
          <Box sx={{ mb: 5 }}>
            <Typography
              variant="h5"
              sx={{
                fontWeight: 600,
                mb: 3,
                borderBottom: "2px solid #383184",
                display: "inline-block",
                pb: 1,
              }}
            >
              Key Takeaways
            </Typography>
            <Box component="ul" sx={{ pl: 3, listStyle: "disc" }}>
              {blog.bullets.map((item, index) => (
                <li key={index} style={{ marginBottom: 10 }}>
                  <Typography variant="body1" sx={{ lineHeight: 1.7 }}>
                    {item}
                  </Typography>
                </li>
              ))}
            </Box>
          </Box>
        )}

        {/* Divider */}
        <Divider sx={{ my: 4 }} />
      </Container>
      {/* Related Links */}

      <Box sx={{ width: "80%", margin: "auto" }}>
        <Box
          data-aos="fade-up"
          sx={{
            margin: "50px auto 0",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Typography
            sx={{
              fontSize: "20px",
              fontFamily: '"Source Sans Pro", sans-serif',
              fontWeight: 700,
              borderBottom: "1px solid #F08A16",
              width: "fit-content",
              marginBottom: "20px",
            }}
          >
            MORE BLOGS
          </Typography>
          <Link
            href="/news"
            sx={{
              fontSize: "16px",
              fontFamily: '"Source Sans Pro", sans-serif',
              fontWeight: 700,
              color: "#F08A16",
              width: "fit-content",
              marginBottom: "20px",
              textDecoration: "none",
            }}
          >
            SEE ALL
          </Link>
        </Box>
        <Grid container sx={{ width: "100%", margin: "auto" }}>
          {Blogs.filter((blog) => {
            return blog.link !== id;
          }).map((item, pos) => {
            return (
              <Grid
                data-aos="fade-right"
                item
                xs={12}
                sm={6}
                md={3}
                sx={{
                  width: { xs: "100%", marginBottom: "20px" },
                }}
              >
                <Box
                  sx={{
                    width: { xs: "100%", md: "90%" },
                    margin: "auto",
                    borderRadius: "20px",
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
                    <img
                      src={item.image}
                      alt={"experience"}
                      style={{
                        width: "100%",
                        borderRadius: "10px",
                        backgroundColor: "rgba(206, 30, 36, 0.3)",
                      }}
                    />
                  </Box>
                  <Typography
                    sx={{
                      fontSize: "20px",
                      fontFamily: '"Source Sans Pro", sans-serif',
                      fontWeight: 600,
                      margin: "10px 0 0",
                      whiteSpace: "nowrap",
                      overflow: "hidden",
                      textOverflow: "ellipsis",
                      maxWidth: "100%",
                    }}
                  >
                    {item.name}
                  </Typography>
                  <Typography
                    sx={{
                      fontSize: "14px",
                      fontFamily: '"Source Sans Pro", sans-serif',
                      margin: "5px 0",
                      display: "-webkit-box",
                      WebkitBoxOrient: "vertical",
                      WebkitLineClamp: 3,
                      overflow: "hidden",
                      textOverflow: "ellipsis",
                      maxWidth: "300px",
                    }}
                  >
                    {item.date}
                  </Typography>
                  <Typography
                    sx={{
                      fontSize: "14px",
                      width: "100%",
                      color: "#F08A16",
                      fontFamily: '"Source Sans Pro", sans-serif',
                      fontWeight: 600,
                    }}
                  >
                    <Link color="#F08A16" href={`/news/${item.link}`}>
                      Read More
                    </Link>
                  </Typography>
                </Box>
              </Grid>
            );
          })}
        </Grid>
      </Box>

      <Footer />
    </Box>
  );
};

export default BlogPost;
