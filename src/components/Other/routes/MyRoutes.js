import { Routes, Route, Navigate } from "react-router-dom";
import Home from "../../Home/Home";
import CovidTracker from "../../Projects/CovidTracker/CovidTracker";
import Projects from "../../Projects/Projects";
import StripeWithReact from "../../Blogs/StripeWithReact";
import Blogs from "../../Blogs/Blogs";
import About from "../../about/About";
import SassIntegration from "../../Blogs/SassIntegration";
import VsCodeExtension from "../../Blogs/VsCodeExtension";
import { ChromeExtensions,  } from '../../Blogs/index'
import PureComponents from "../../Blogs/reactJs/PureComponents";
import RefsInReact from "../../Blogs/reactJs/RefsInReact";
import LifeCycleMethods from "../../Blogs/reactJs/LifeCycleMethods";
import HigherOrderComponent from "../../Blogs/reactJs/HigherOrderComponent";
import ReactDesignPattern from "../../Blogs/reactJs/ReactDesignPattern";
import BasicsOfReact from "../../Blogs/reactJs/BasicsOfReact";
import ContextAPI from "../../Blogs/reactJs/ContextAPI";
import JsBasicsToAdvanced from "../../Blogs/jsBasicsToAdvanced/JsBasicsToAdvanced";
import FrontendInterview from "../../Blogs/interviews/FrontendInterview";
import JsInterview from "../../Blogs/interviews/JsInterview";
import ReactInterview from "../../Blogs/interviews/ReactInterview";

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

      <Route path="/blog/sass-integration" element={<SassIntegration />} />
      <Route path="/blog/vs-code-extensions" element={<VsCodeExtension />} />
      <Route path="/blog/chrome-extensions" element={<ChromeExtensions />} />

      {/* react */}
      <Route path="/blog/stripe-with-react" element={<StripeWithReact />} />
      <Route path="/blog/react/useMemo-pure-components" element={<PureComponents />} />
      <Route path="/blog/react/refs" element={<RefsInReact />} />
      <Route path="/blog/react/life-cycle-methods" element={<LifeCycleMethods />} />
      <Route path="/blog/react/higher-order-components" element={<HigherOrderComponent />} />
      <Route path="/blog/react/design-pattern" element={<ReactDesignPattern />} />
      <Route path="/blog/react/basics" element={<BasicsOfReact />} />
      <Route path="/blog/react/context-api" element={<ContextAPI />} />

      {/* js */}
      <Route path="/blog/js/js-basics-advanced" element={<JsBasicsToAdvanced />} />

      {/* interviews */}
      <Route path="/blog/interview/frontend" element={<FrontendInterview />} />
      <Route path="/blog/interview/js" element={<JsInterview />} />
      <Route path="/blog/interview/react-js" element={<ReactInterview />} />

    </Routes>
  );
}

export default MyRoutes;
