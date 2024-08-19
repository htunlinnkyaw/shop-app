import React from "react";
import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <section className="flex flex-col h-screen items-center justify-center">
      <h1 className="font-bold text-2xl">404 Page Not Found</h1>
      <p className="w-[400px] text-center text-gray-300 text-sm">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. At officiis
        iste Lorem ipsum dolor sit amet.
      </p>
      <Link
        to={"/"}
        className="border text-sm border-black px-4 py-2 mt-2 bg-black text-white rounded-sm"
      >
        Back To Home
      </Link>
    </section>
  );
};

export default ErrorPage;
