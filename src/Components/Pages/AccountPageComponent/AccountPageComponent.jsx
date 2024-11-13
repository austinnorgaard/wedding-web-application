import '../../../Styles/CSS/AccountPageComponent.css';
import React, { useEffect, useState } from 'react';
import MenuBar from '../../Utilities/MenuBarComponent/MenuBarComponent';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

function AccountPage() {
  const [token, setToken] = useState()
  const navigate = useNavigate()
  const [user, setUser] = useState({})

  useEffect(() => {
    axios.get(`https://weddingbackend.norgaardfamily.com/users/${localStorage.getItem("id")}`)
    .then((res) => {
      setUser(res.data)
    })
    window.scrollTo(0, 0)
    setToken(localStorage.getItem("token"))
  }, [token])

  if (token === null || token === undefined || token === "null" || token === undefined || token === "invalid") {
    navigate("/login");
  }

  return (
    <div className="AccountPage">
      <div className="MainContainer" id="AccountMainContainer">
        <MenuBar/>
        <div id="account-wrapper">
          <h1>Account Settings</h1>
          <div id="account-tables">
            <div id="account-selections">
              <Link to="/login" id="signout">Sign Out</Link>
            </div>
            <form id="account-data">
              <label>Username:</label>
              <input value={user.userName} name="username" type="text"></input>
              <label>Password:</label>
              <input value="" name="password" type="password"></input>
              <label>Email:</label>
              <input value={user.email} name="email" type="email"></input>
              <label>Phone Number:</label>
              <input value={user.phoneNumber} name="phone" type="tel"></input>
              <button type='submit'>Save</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AccountPage;
