import type { Metadata } from "next";

import './Styles/CSS/index.css'
import Header from "./Components/Utilities/HeaderComponent/HeaderComponent";
import MenuBar from "./Components/Utilities/MenuBarComponent/MenuBarComponent";
import Footer from "./Components/Utilities/FooterComponent/FooterComponent";

export const metadata: Metadata = {
  title: "Norgaard and South Wedding",
  description: "Wedding web application for Austin Norgaard and Jessica South",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Header/>
        <MenuBar/>
        {children}
        <Footer/>
      </body>
    </html>
  );
}
