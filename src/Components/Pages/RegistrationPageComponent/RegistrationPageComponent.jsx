import '../../../Styles/CSS/RegistrationPageComponent.css';
import React, { useEffect, useState } from 'react';
import MenuBar from '../../Utilities/MenuBarComponent/MenuBarComponent';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import useToken from '../../Utilities/TokenComponent/TokenComponent';

function RegistrationPage() {
  const [userName, setUserName] = useState();
  const [userEmail, setUserEmail] = useState();
  const [userPassword, setUserPassword] = useState();
  const [userPhoneNumber, setUserPhoneNumber] = useState();
  const navigate = useNavigate();
  //eslint-disable-next-line
  const { token, setToken } = useToken();
  const [localToken, setLocalToken] = useState();
  const [isExisting, setIsExisting] = useState(false);
  const [isMissing, setIsMissing] = useState(false)

  async function handleSubmit (e) {
    e.preventDefault();
    try {
      axios.post(`http://35.93.190.42:8080/users`, {userName: userName, userEmail: userEmail, userPhoneNumber: userPhoneNumber, userIsAdmin: 0, userPassword: userPassword})
      .then((res) => {
        setToken(res.data)
      })
      .then(() => {
        if (localStorage.getItem("token") === "Success") {
          navigate("/account");
        }
        else {
          if (localStorage.getItem("token") === "Missing") {
            setIsMissing(true);
            setIsExisting(false);
          }
          if (localStorage.getItem("token") === "Exists") {
            setIsExisting(true);
            setIsMissing(false);
          }
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

  return (
    <div className="RegistrationPage">
      <div className="MainContainer" id="RegistrationMainContainer">
        <MenuBar/>
        <div className="registration-wrapper">
          {isExisting &&
            <label>
              <p id="badRegister">User Already Exists! Need Help? Contact Austin or Jess :)</p>
            </label>
          }
          {isMissing &&
            <label>
              <p id="badRegister">Please Enter All Fields! Need Help? Contact Austin or Jess :)</p>
            </label>
          }
          <h1>Sign Up:</h1>
          <form onSubmit={handleSubmit} id="registrationForm">
            <label>
              <p>Email</p>
              <input type="email" name="email" onChange={e => setUserEmail(e.target.value)}/>
            </label>
            <label>
              <p>Username</p>
              <input type="text" name="username" onChange={e => setUserName(e.target.value)}/>
            </label>
            <label>
              <p>Password</p>
              <input type="password" name="password" onChange={e => setUserPassword(e.target.value)} autoComplete="new-password"/>
            </label>
            <label>
              <p>Phone Number (optional)</p>
              <input type="phone" name="phone" onChange={e => setUserPhoneNumber(e.target.value)}/>
            </label>
            <div id="buttonArea">
              <button type="submit">Submit</button>
              <Link to="/login" id="loginInstead">Login</Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default RegistrationPage;