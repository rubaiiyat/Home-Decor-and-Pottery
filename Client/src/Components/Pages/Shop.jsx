import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router";
import ProductItem from "./ProductItem";

const Shop = () => {
  const items = useLoaderData();
  const [loading, setLoading] = useState(true);
  const [users, setUsers] = useState([]);
  useEffect(() => {
    fetch("http://localhost:3000/users")
      .then((res) => res.json())
      .then((data) => setUsers(data));
  }, []);

  useEffect(() => {
    if (items && items.length > 0) {
      setLoading(false);
    }
  }, [items]);

  if (loading)
    return (
      <div className="mx-auto flex justify-center items-center h-40">
        <span className="loading loading-spinner text-accent"></span>
      </div>
    );

  return (
    <div className="min-h-screen bg-[#E9E9E9] ">
      <div className="container mx-auto px-6 lg:px-28 py-12">
        <h2 className="text-3xl font-bold mb-8 text-center text-gray-800">
          🛍️ Our Products
        </h2>

        <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 ">
          {items.map((item) => (
            <ProductItem key={item._id} item={item} users={users} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Shop;
