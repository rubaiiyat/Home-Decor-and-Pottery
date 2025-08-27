import React from "react";
import { Link } from "react-router";
import { Helmet } from "react-helmet";
const NotFound = () => {
  return (
    <div>
      <Helmet>
        <title>Not Found</title>
      </Helmet>
      <section className="bg-[#F4F0ED] flex items-center justify-center min-h-screen">
        <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
          <div className="mx-auto max-w-screen-sm text-center">
            <h1 className="mb-4 text-7xl sm:text-8xl lg:text-9xl tracking-tight font-extrabold text-[#415765] ">
              404
            </h1>
            <p className="mb-4 text-2xl sm:text-3xl md:text-4xl font-bold text-[#415765] ">
              Something's missing.
            </p>
            <p className="mb-4 text-base sm:text-lg font-light text-[#757B66]">
              Sorry, we can't find that page. You'll find lots to explore on the
              home page.
            </p>
            <Link to="/" className="btn bg-[#757B66] text-white">
              Back to Homepage
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default NotFound;
