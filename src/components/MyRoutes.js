import { BrowserRouter, Link, Routes, Route, Switch } from "react-router-dom";
// import LearnJS from "./LearnJS/LeranJS";
// import Home from "./Home";
// import LearnSCSS from "./LearnSCSS/LearnSCSS";

function MyRoutes() {
  return (
    <BrowserRouter>
      <Home />
      {/* <LearnJS /> */}
      <LearnSCSS />
      <h1>Routes</h1>
      <ul className="list-unstyled">
        <li>JavaScript</li>
        <li>SCSS</li>
      </ul>
      <Route path="/home" component={Home} />
      {/* <Route path="/js" component={LearnJS} /> */}
      <Route path="/scss" component={LearnSCSS} />
    </BrowserRouter>
  );
}
function Home() {
  return (
    <>
      <h1>Home Page</h1>
    </>
  );
}

function LearnSCSS() {
  return (
    <>
      <h1>LearnSCSS</h1>
    </>
  );
}

export default MyRoutes;
