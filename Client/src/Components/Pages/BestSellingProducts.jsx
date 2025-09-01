import React, { useEffect, useState } from "react";
import BestSellingProduct from "./BestSellingProduct";
import { Link } from "react-router";

const BestSellingProducts = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/all-items")
      .then((res) => res.json())
      .then((data) => {
        const topRated = data.filter((item) => parseFloat(item.rating) > 4.7);
        setProducts(topRated);
      });
  }, []);

  return (
    <section className="bg-[#E9E9E9] py-12 px-6 lg:px-20">
      <div className="text-center mb-10">
        <h2 className="text-3xl font-bold text-[#415765]">
          🔥 Top Rated Products
        </h2>
        <p className="text-gray-600 mt-2">
          Our most loved and best reviewed pottery collections
        </p>
      </div>

      {products.length > 0 ? (
        <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 ">
          {products.map((product) => (
            <BestSellingProduct key={product._id} product={product} />
          ))}
        </div>
      ) : (
        <p className="text-center text-gray-500">
          No top rated products found.
        </p>
      )}

      <div className="text-center mt-8">
        <Link to={"/shop"}>
          <button className=" px-6 py-2 bg-[#415765] text-white font-semibold rounded-full shadow hover:bg-[#2d4351] hover:cursor-pointer transition">
            View All Products
          </button>
        </Link>
      </div>
    </section>
  );
};

export default BestSellingProducts;
