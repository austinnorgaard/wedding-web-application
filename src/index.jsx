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
import ToDoPage from './Components/Pages/ToDoPageComponent/ToDoPageComponent';
import RegistryPage from './Components/Pages/RegistryPageComponent/RegistryPageComponent';
import Header from './Components/Utilities/HeaderComponent/HeaderComponent';
import Footer from './Components/Utilities/FooterComponent/FooterComponent';
import VenmoPage from './Components/Pages/VenmoPageComponent/VenmoPageComponent';

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
    path: "/things-to-do",
    element: <ToDoPage/>,
  },
  {
    path: "/registry",
    element: <RegistryPage/>,
  },
  {
    path: "/venmo",
    element: <VenmoPage/>,
  }
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <div>
    <Header/>
    <RouterProvider router={router} />
    <Footer />
  </div>
);