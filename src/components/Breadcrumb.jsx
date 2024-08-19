import React from "react";
import { Link } from "react-router-dom";

const Breadcrumb = ({ currentPage }) => {
  return (
    <section>
      <div className="flex items-center">
        <Link to={"/"} className="text-black text-sm">
          Home
        </Link>
        <span className="m-1">/</span>
        <h1 className="text-sm text-gray-300">{currentPage}</h1>
      </div>
    </section>
  );
};

export default Breadcrumb;
