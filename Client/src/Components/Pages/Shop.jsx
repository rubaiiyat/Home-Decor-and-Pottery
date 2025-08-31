import React, { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router";
import ProductItem from "./ProductItem";

const Shop = () => {
  const items = useLoaderData();
  console.log(items);
  const [loading, setLoading] = useState(true);
  const [users, setUsers] = useState([]);
  const { category } = useParams();
  const [filterdItems, setFilterdItems] = useState([]);

  useEffect(() => {
    if (!items || items.length === 0) return;
    if (category) {
      const name = category.replace(/-/g, " ").replace(/and/g, "&");
      const filterd = items.filter(
        (item) =>
          item.category.trim().toLowerCase() === name.trim().toLowerCase()
      );
      setFilterdItems(filterd);
    } else {
      setFilterdItems(items);
    }
  }, [category, items]);

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

        <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4">
          {filterdItems.length > 0 ? (
            filterdItems.map((item) => (
              <ProductItem key={item._id} item={item} users={users} />
            ))
          ) : (
            <p className="text-center col-span-full text-gray-600">
              No products in this category.
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Shop;
