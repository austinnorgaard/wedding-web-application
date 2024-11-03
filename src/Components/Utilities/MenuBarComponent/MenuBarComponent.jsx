import { useState, React, useEffect } from 'react';
import '../../../Styles/CSS/MenuBarComponent.css';
import { Link } from 'react-router-dom';
import menuicon from '../../../Resources/Photos/menu-icon.svg';
import exiticon from '../../../Resources/Photos/exit.svg';
import axios from 'axios';
import useToken from '../TokenComponent/TokenComponent';

const HOST = "localhost"

function MenuBar() {
  const [main_class, setMainClass] = useState ("menuUnclicked");
  const [button, setButtonClass] = useState ("unclicked");
  const [click, setClicked] = useState (false);
  const [icon, setIcon] = useState (menuicon);
  const [loggedIn, setLoggedIn] = useState(false);
  const { token } = useToken();
  const [localToken, setLocalToken] = useState();

  // Toggle button/menu
  function updateMenu () {
    if (!click) {
        setMainClass ("menuClicked");
        setButtonClass ("clicked");
        setIcon (exiticon);
    }
    else {
        setMainClass ("menuUnclicked");
        setButtonClass ("unclicked");
        setIcon (menuicon);
    }
    setClicked (!click);
}

useEffect (() => {
  axios.get(`http://${HOST}:8080/users`)
  .then((res) => {
    try {
      setLoggedIn(res.data[0].isAdmin);
    } catch (e) {
      setLoggedIn(false)
    }
  })
  setLocalToken(localStorage.getItem("token"))
},[loggedIn, token, localToken]);

  return (
    <div className="MenuBar" id={main_class}>
      
      <div className="MenuBarMainContainer" id={main_class}>
        <button className={button} onClick={updateMenu} id="menuButton"><img src={icon} alt="hamburgerMenu"/></button>
        <span id="lineSpan"></span>
        <Link onClick={updateMenu} to="/" id="homelink">Home</Link>
        <Link onClick={updateMenu} to="/story" id="storylink">Our Story</Link>
        <Link onClick={updateMenu} to="/photos" id="photoslink">Photos</Link>
        {//<Link onClick={updateMenu} to="/wedding-party" id="weddingpartylink">Wedding Party</Link>
        }
        <Link onClick={updateMenu} to="/faq" id="faqlink">FAQs</Link>
        <Link onClick={updateMenu} to="/travel" id="travellink">Travel</Link>
        <Link onClick={updateMenu} to="/registry" id="registrylink">Registry</Link>
        <Link onClick={updateMenu} to="/rsvp" id="rsvplink">RSVP</Link>
        {(!localToken || localToken === "undefined" || localToken === "invalid" || localToken === "null" || localToken === undefined) &&
          <Link onClick={updateMenu} to="/login" id="loginlink">Login</Link>
        }
        {(localToken && localToken !== "undefined" && localToken !== "invalid" && localToken !== "null" && localToken !== undefined) && 
          <Link onClick={updateMenu} to="/account" id="accountlink">Account</Link>
        }
      </div>
    </div>
  );
}

export default MenuBar;