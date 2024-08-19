import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import { Outlet } from "react-router-dom";

const Template = () => {
  return (
    <main className="px-5 flex flex-col h-screen">
      <Header />
      <Outlet />
      <Footer />
    </main>
  );
};

export default Template;
