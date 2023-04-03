import { Routes, Route } from "react-router-dom";
import LearnJS from "../../Learning/LearnJS/LeranJS";
import Home from "../../Home/Home";
import LearnSCSS from "../../Learning/LearnSCSS/LearnSCSS";
import CovidTracker from "../../Projects/CovidTracker/CovidTracker";
import Learning from "../../Learning/Learning";
import Projects from "../../Projects/Projects";
import StripeWithReact from "../../Blogs/StripeWithReact";
import LearnReact from "../../Learning/Learn React/LearnReact";
import Blogs from "../../Blogs/Blogs";

function MyRoutes() {
  return (
    <Routes>
      <Route path="/home" element={<Home />} />
      <Route path="/" element={<Home />} />

      {/* Learning Links */}
      <Route path="/learning" element={<Learning />} />
      <Route path="/learning/learn-scss" element={<LearnSCSS />} />
      <Route path="/learning/learn-js" element={<LearnJS />} />
      <Route path="/learning/learn-react-js" element={<LearnReact />} />

      {/* Projects Links */}
      <Route path="/projects" element={<Projects />} />
      <Route path="/projects/covid-tracker" element={<CovidTracker />} />

      {/* Blogs Links */}
      <Route path="/blogs" element={<Blogs />} />
      <Route path="/blog/stripe-with-react" element={<StripeWithReact />} />
    </Routes>
  );
}

export default MyRoutes;
