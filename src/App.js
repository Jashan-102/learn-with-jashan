// import "bootstrap";
import "./App.scss";
import MainNavBar from "./components/Home/MainNavBar";
import MyRoutes from "./components/Other/routes/MyRoutes";

function App() {
  return (
    <main className="bg-secondary pb-10">
      <MainNavBar />
      <>
        {/* Routes: */}
        <MyRoutes />
        {/* <BlogRoutes /> */}
      </>
    </main>
  );
}

export default App;
