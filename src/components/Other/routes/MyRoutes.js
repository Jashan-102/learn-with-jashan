import { Routes, Route, Navigate } from "react-router-dom";
import Home from "../../Home/Home";
import CovidTracker from "../../Projects/CovidTracker/CovidTracker";
import Projects from "../../Projects/Projects";
import StripeWithReact from "../../Blogs/StripeWithReact";
import Blogs from "../../Blogs/Blogs";
import About from "../../about/About";
import SassIntegration from "../../Blogs/SassIntegration";
import VsCodeExtension from "../../Blogs/VsCodeExtension";
import ChromeExtensions from "../../Blogs/ChromeExtensions";

function MyRoutes() {
  return (
    <Routes>
      <Route path="/about" element={<About />} />
      <Route path="/" element={<Home />} />
      <Route path="*" element={<Navigate to="/" replace />} />

      {/* Learning Links
      <Route path="/learning" element={<Learning />} />
      <Route path="/learning/learn-scss" element={<LearnSCSS />} />
      <Route path="/learning/learn-js" element={<LearnJS />} />
      <Route path="/learning/learn-react-js" element={<LearnReact />} /> */}

      {/* Projects Links */}
      <Route path="/projects" element={<Projects />} />
      <Route path="/projects/covid-tracker" element={<CovidTracker />} />

      {/* Blogs Links */}
      <Route path="/blogs" element={<Blogs />} />
      <Route path="/blog/stripe-with-react" element={<StripeWithReact />} />
      <Route path="/blog/sass-integration" element={<SassIntegration />} />
      <Route path="/blog/vs-code-extensions" element={<VsCodeExtension />} />
      <Route path="/blog/chrome-extensions" element={<ChromeExtensions />} />
    </Routes>
  );
}

export default MyRoutes;
