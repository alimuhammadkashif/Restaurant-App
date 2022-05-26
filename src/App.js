import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Layout from "./pages/Layout";
import OurStory from "./components/OurStory/OurStory";
import Menu from "./components/Menu/Menu";
import Order from "./components/Order/Order";
import Gallery from "./components/Gallery/Gallery";
import FindUs from "./components/FindUs/FindUs";
import Login from "./components/Login/Login";
import BookTable from "./components/BookTable/BookTable";

import "./App.css";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<OurStory />}/>
          <Route path="menu" element={<Menu />} />
          <Route path="order" element={<Order />} />
          <Route path="gallery" element={<Gallery />} />
          <Route path="find_us" element={<FindUs />} />
          <Route path="login" element={<Login />} />
          <Route path="book_table" element={<BookTable />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
