import React, { useState } from "react";
import GoogleLoginPage from "./LoginForm";
function Home() {
  const [userData, setUserData] = useState(sessionStorage.getItem("userData"));
  return (
    <>
      <h1>  hi</h1>
      <GoogleLoginPage userData={userData} setUserData={setUserData} />
    </>
  );
}
export default Home;
