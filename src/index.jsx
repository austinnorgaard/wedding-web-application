import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import App from './app';
import StoryPage from './Components/Pages/StoryPageComponent/StoryPageComponent';
import PhotoPage from './Components/Pages/PhotoPageComponent/PhotoPageComponent';
import WeddingPartyPage from './Components/Pages/WeddingPartyPageComponent/WeddingPartyPageComponent';
import FAQPage from './Components/Pages/FAQPageComponent/FAQPageComponent';
import TravelPage from './Components/Pages/TravelPageComponent/TravelPageComponent';
import RegistryPage from './Components/Pages/RegistryPageComponent/RegistryPageComponent';
import Header from './Components/Utilities/HeaderComponent/HeaderComponent';
import Footer from './Components/Utilities/FooterComponent/FooterComponent';
import VenmoPage from './Components/Pages/VenmoPageComponent/VenmoPageComponent';
import RSVPPage from './Components/Pages/RSVPPageComponent/RSVPPageComponent';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
  },
  {
    path: "/story",
    element: <StoryPage/>,
  },
  {
    path: "/photos",
    element: <PhotoPage/>,
  },
  {
    path: "/wedding-party",
    element: <WeddingPartyPage/>,
  },
  {
    path: "/faq",
    element: <FAQPage/>,
  },
  {
    path: "/travel",
    element: <TravelPage/>,
  },
  {
    path: "/registry",
    element: <RegistryPage/>,
  },
  {
    path: "/venmo",
    element: <VenmoPage/>,
  },
  {
    path: "/rsvp",
    element: <RSVPPage/>,
  }
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <div id="index">
    <Header/>
    <RouterProvider router={router} />
    <Footer />
  </div>
);