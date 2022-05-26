import React from "react";

import Navbar from "../components/Navbar/Navbar";
import Header from "../components/Header/Header";
import Main from "../components/Main/Main";
import Footer from "../components/Footer/FooterOverlay";

const Layout = () => {
  return (
    <>
      <Navbar />
      <Header />
      <Main />
      <Footer />
    </>
  );
};

export default Layout;
