// import "bootstrap";
import "./App.scss";
import MainNavBar from "./components/Home/MainNavBar";
import MyRoutes from "./components/Other/routes/MyRoutes";

function App() {
  return (
    <main className="bg-secondary">
      <MainNavBar />
      <>
        {/* Routes: */}
        {/* <BlogRoutes /> */}
        <MyRoutes />
      </>
    </main>
  );
}

export default App;
