import React, { useState } from "react";

export default function LoginForm() {
  const [myEmail, setMyEmail] = useState("");
  const [myPassword, setMyPassword] = useState("");

  const handleLoginSubmit = () => {
    debugger;
    if (
      myEmail === "learnwithjashandeep@gmail.com" &&
      myPassword === "password1"
    ) {
      alert("ypu are ")
    }
  };
  return (
    <form onSubmit={handleLoginSubmit} className="container mx-auto">
      <label>Enter email</label>
      <br />
      <input type="text" onChange={(e) => setMyEmail(e.target.value)} /> <br />
      <br />
      <label>Enter password</label>
      <br />
      <input type="password" onChange={(e) => setMyPassword(e.target.value)} />
      <br />
      <br />
      <button type="submit">Submit</button>
    </form>
  );
}
