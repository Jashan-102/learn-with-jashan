import { Routes, Route } from "react-router-dom";
import LearnJS from "../../Learning/LearnJS/LeranJS";
import Home from "../../Home/Home";
import LearnSCSS from "../../Learning/LearnSCSS/LearnSCSS";
import CovidTracker from "../../Projects/CovidTracker/CovidTracker";
import Learning from "../../Learning/Learning";
import Projects from "../../Projects/Projects";
import StripeWithReact from "../../Blogs/StripeWithReact";
import LearnReact from "../../Learning/Learn React/LearnReact";

function MyRoutes() {
  return (
    <Routes>
      <Route path="/home" element={<Home />} />
      <Route path="/" element={<Home />} />
      <Route path="/projects" element={<Projects />} />
      <Route path="/learning" element={<Learning />} />

      <Route path="/learning/learn-scss" element={<LearnSCSS />} />
      <Route path="/learning/learn-js" element={<LearnJS />} />
      <Route path="/learning/learn-react-js" element={<LearnReact />} />

      <Route path="/projects/covid-tracker" element={<CovidTracker />} />


      

      <Route path="/blog/stripe-with-react" element={<StripeWithReact />} />


    </Routes>
  );
}

export default MyRoutes;
