import './Styles/CSS/app.css';

import React from 'react';

import { useNavigate } from 'react-router-dom';

import HomePage from './Components/Pages/HomePageComponent/HomePageComponent';

function App() {
  let navigate = useNavigate();
  // eslint-disable-next-line 
  const homeRoute = () => {
    let path = '/';
    navigate(path);
  }
  // eslint-disable-next-line 
  const storyRoute = () => {
    let path = '/story';
    navigate(path);
  }
  // eslint-disable-next-line 
  const photoRoute = () => {
    let path = '/photos';
    navigate(path);
  }
  // eslint-disable-next-line 
  const weddingPartyRoute = () => {
    let path = '/wedding-party';
    navigate(path);
  }
  // eslint-disable-next-line 
  const faqRoute = () => {
    let path = '/faq';
    navigate(path);
  }
  // eslint-disable-next-line 
  const travelRoute = () => {
    let path = '/travel';
    navigate(path);
  }
  // eslint-disable-next-line 
  const registryRoute = () => {
    let path = '/registry';
    navigate(path);
  }
  // eslint-disable-next-line 
  const venmoRoute = () => {
    let path = '/venmo';
    navigate(path);
  }
  // eslint-disable-next-line 
  const rsvpRoute = () => {
    let path = '/rsvp';
    navigate(path);
  }
  // eslint-disable-next-line 
  const loginRoute = () => {
    let path = '/login';
    navigate(path);
  }
  // eslint-disable-next-line 
  const registrationRoute = () => {
    let path = '/register';
    navigate(path);
  }
  // eslint-disable-next-line 
  const accountRoute = () => {
    let path = '/account';
    navigate(path);
  }

  return (
    <div className="App" id="app">
      <HomePage/>
    </div>
  );
}

export default App;
