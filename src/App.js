import "./App.css";
import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import TeamMember from "./components/Team/TeamMember";
import AboutUs from "./pages/AboutUs";
import ContactUs from "./pages/ContactUs";
import Error from "./pages/Error";
import Loader from "./components/Loader";
import Blogs from "./pages/Blogs";
import BlogPost from "./pages/BlogPost";
import Services from "./pages/Services";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const handleLoad = () => setLoading(false);

    if (document.readyState === "complete") {
      handleLoad();
    } else {
      window.addEventListener("load", handleLoad);
      return () => window.removeEventListener("load", handleLoad);
    }
  }, []);

  return (
    <div className="App">
      {loading ? (
        <Loader />
      ) : (
        <Router>
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/team/:id" element={<TeamMember />} />
            <Route exact path="/services" element={<Services />} />
            <Route exact path="/about-us" element={<AboutUs />} />
            <Route exact path="/contact-us" element={<ContactUs />} />
            <Route exact path="/news" element={<Blogs />} />
            <Route exact path="/news/:id" element={<BlogPost />} />
            <Route path="*" element={<Error />} />
          </Routes>
        </Router>
      )}
    </div>
  );
}

export default App;
