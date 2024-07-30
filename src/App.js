import React from "react";
import Header from "./components/Header.jsx";
import Aside from "./components/Aside.jsx";
import Footer from "./components/Footer.jsx";
import Content from "./components/Content.jsx";
import { useLocation } from "react-router-dom";

export default function App() {
  const location = useLocation(); //useLocation muestra ubicacion de donde estas podiendo manipularla
  console.log(location.pathname);

  return (
    <div>
      <Header />
      <Aside />
      <Content />
      <Footer />
    </div>
  );
}
