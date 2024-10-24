import './RSVPPageComponent.scss';
import React, { useEffect } from 'react';
import MenuBar from '../../Utilities/MenuBarComponent/MenuBarComponent';
import axios from 'axios';

function RSVPPage() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  async function getUser(id) {
    axios.get(`http://localhost:8080/users/${id}`)
    .then((res) => {
      console.log(res.data)
    })
  }

  async function getUsers() {
    axios.get(`http://localhost:8080/users`)
    .then((res) => {
      console.log(res.data)
    })
  }

  return (
    <div className="RSVPPage">
        <div className="MainContainer" id="RSVPMainContainer">
            <MenuBar/>
            <button onClick={async () => await getUser(1)}>GET USER</button>
            <button onClick={async () => await getUsers()}>GET USERS</button>
        </div>
    </div>
  );
}

export default RSVPPage;
