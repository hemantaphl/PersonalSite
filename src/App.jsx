import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ScrollToTop from "./components/Common/ScrollToTop"; // Adjust path as needed

// Page imports
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Tools from "./pages/Tools";
import MyIP from "./pages/Tools/MyIP";
import PassStrChk from "./pages/Tools/PassStrChk";
import DNSLookup from "./pages/Tools/DNSLookup";
import SSLChecker from "./pages/Tools/SSLChecker";
import NotFound from "./pages/NotFound";
import Projects from "./pages/Projects";
import Posts from "./pages/Posts";
import ReadMe from "./pages/ReadmeGenerator";

function App() {
  return (
    <Router>
      <ScrollToTop>
        <Routes>
          {/* Home Page */}
          <Route path="/" element={<Home />} />

          {/* About Page */}
          <Route path="/about" element={<About />} />

          {/* Contact Page */}
          <Route path="/connect" element={<Contact />} />

          {/* Tools Page */}
          <Route path="/tools" element={<Tools />} />

          {/* Posts Page */}
          <Route path="/posts" element={<Posts />} />

          {/* Projects Page */}
          <Route path="/projects" element={<Projects />} />

          {/* Readme Page */}
          <Route path="/readmegenerator" element={<ReadMe />} />

          {/* MyIP Page */}
          <Route path="/services/MyIP" element={<MyIP />} />

          {/* PassStrChk */}
          <Route path="/services/PassStrChk" element={<PassStrChk />} />

          {/* DNS Lookup */}
          <Route path="/services/dnslookup" element={<DNSLookup />} />

          {/* SSL Checker */}
          <Route path="/services/sslchecker" element={<SSLChecker />} />

          {/* 404 Page */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </ScrollToTop>
    </Router>
  );
}

export default App;
