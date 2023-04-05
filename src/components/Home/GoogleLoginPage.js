import React, { useState, useEffect } from 'react';
import { useGoogleLogin } from '@react-oauth/google';
import axios from 'axios';
import GoogleImg from '../../assets/imgs/google.png';

const GoogleLoginPage = (props) => {
  const [user, setUser] = useState([]);
  const { userData, setUserData } = props
debugger
  const login = useGoogleLogin({
    onSuccess: (codeResponse) => {
      sessionStorage.setItem("googleAuth", JSON.stringify(codeResponse));
      return setUser(codeResponse)
    },
    onError: (error) => console.log('Login Failed:', error),
  });


  useEffect(
    () => {
      if (user) {
        axios
          .get(`https://www.googleapis.com/oauth2/v1/userinfo?access_token=${user.access_token}`, {
            headers: {
              Authorization: `Bearer ${user.access_token}`,
              Accept: 'application/json'
            }
          })
          .then((res) => {
            setUserData(res.data)
            sessionStorage.setItem("userData", JSON.stringify(res.data));
          })
          .catch((err) => console.log(err));
      }
    },
    [user]
  );

  return (
    <div>
      {userData ? '' : (
        <button className='btn border rounded-pill px-5 py-4 sign-up-btn' onClick={() => login()}>
          <img className='me-2' alt="google-logo" src={GoogleImg} />
          Sign in with Google</button>
      )}
    </div>
  )
}
export default GoogleLoginPage;