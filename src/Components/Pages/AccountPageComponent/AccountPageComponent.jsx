import '../../../Styles/CSS/AccountPageComponent.css';
import React, { useEffect, useState } from 'react';
import MenuBar from '../../Utilities/MenuBarComponent/MenuBarComponent';
import { Link, useNavigate } from 'react-router-dom';

function AccountPage() {
  const [token, setToken] = useState()
  const navigate = useNavigate()

  useEffect(() => {
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
              <Link to="/login">Sign Out</Link>
            </div>
            <div id="account-data">
              <p>Account Info</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AccountPage;
