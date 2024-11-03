import '../../../Styles/CSS/LoginPageComponent.css';
import React, { useEffect, useState } from 'react';
import MenuBar from '../../Utilities/MenuBarComponent/MenuBarComponent';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import useToken from '../../Utilities/TokenComponent/TokenComponent';

function LoginPage() {
  const [userName, setUserName] = useState();
  const [userPassword, setUserPassword] = useState();
  const navigate = useNavigate();
  const { token, setToken } = useToken();
  const [localToken, setLocalToken] = useState();
  const [isBadLogin, setBadLogin] = useState(false);

  async function handleSubmit (e) {
    e.preventDefault();
    try {
      axios.post(`http://35.93.190.42:8080/login`, {userName: userName, userPassword: userPassword})
      .then((res) => {
        console.log(res.data)
        setToken(res.data)
        localStorage.setItem("id", res.data.id)
      })
      .then(() => {
        if (localStorage.getItem("token") !== 'invalid' && localStorage.getItem("token") !== null) {
          navigate("/account");
        }
        else {
          setBadLogin(true);
        }
      })
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    window.scrollTo(0, 0)
    setLocalToken(setToken(localStorage.getItem("token")));
  }, [token, localToken])

  console.log(localToken)

  if (localToken !== null && localToken !== undefined && localToken !== "null" && localToken !== undefined && localToken !== "invalid") {
    navigate("/account");
  }

  return (
    <div className="LoginPage">
      <div className="MainContainer" id="LoginMainContainer">
        <MenuBar/>
        <div className="login-wrapper">
          {isBadLogin && 
            <label>
              <p id="badLogin">Incorrect Login!</p>
            </label>
          }
          <h1>Please Log In</h1>
          <form onSubmit={handleSubmit} id="loginForm">
            <label>
              <p>Username</p>
              <input type="text" name="username" onChange={e => setUserName(e.target.value)}/>
            </label>
            <label>
              <p>Password</p>
              <input type="password" name="password" onChange={e => setUserPassword(e.target.value)}/>
            </label>
            <div id="buttonArea">
              <button type="submit">Submit</button>
              <Link to="/register" id="registerInstead">Register</Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;