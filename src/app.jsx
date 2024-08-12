import './app.scss';

import React from 'react';

import { useNavigate } from 'react-router-dom';

import HomePage from './Components/Pages/HomePageComponent/HomePageComponent';

function App() {

  let navigate = useNavigate();
  const homeRoute = () => {
    let path = '/';
    navigate(path);
  }
  const storyRoute = () => {
    let path = '/story';
    navigate(path);
  }
  const photoRoute = () => {
    let path = '/photos';
    navigate(path);
  }
  const weddingPartyRoute = () => {
    let path = '/wedding-party';
    navigate(path);
  }
  const faqRoute = () => {
    let path = '/faq';
    navigate(path);
  }
  const travelRoute = () => {
    let path = '/travel';
    navigate(path);
  }
  const todoRoute = () => {
    let path = '/things-to-do';
    navigate(path);
  }
  const registryRoute = () => {
    let path = '/registry';
    navigate(path);
  }

  

  return (
    <div className="App" id="app">
      <HomePage />
    </div>
  );
}

export default App;
