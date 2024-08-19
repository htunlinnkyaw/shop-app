import React from "react";

const Footer = () => {
  const date = new Date();

  return (
    <footer className="bg-black text-white p-5 text-center text-sm mt-auto">
      <p>
        &copy; <span className="text-sm">CopyRight</span> {""}
        {date.getFullYear()}. All Rights Reserved.
      </p>
    </footer>
  );
};

export default Footer;
