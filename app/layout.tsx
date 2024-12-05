import type { Metadata } from "next";

import '@/app/ui/global.css'
import Header from "@/app/ui/header";
import MenuBar from "@/app/ui/sidenav";
import Footer from "@/app/ui/footer";

export const experimental_ppr = true;

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
