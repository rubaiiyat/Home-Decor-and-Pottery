import React, { useEffect, useState } from "react";
import { NavLink, useLoaderData, useNavigate, useParams } from "react-router";
import ProductItem from "./ProductItem";
import {
  FaCube,
  FaGem,
  FaHome,
  FaLeaf,
  FaMugHot,
  FaSeedling,
} from "react-icons/fa";

const Shop = () => {
  const items = useLoaderData();
  // console.log(items);
  const [loading, setLoading] = useState(true);
  const [users, setUsers] = useState([]);
  const { category } = useParams();
  const [filterdItems, setFilterdItems] = useState([]);
  const navigate = useNavigate();

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
    fetch("https://home-decor-pottery-server.onrender.com/users")
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

  const categories = [
    { name: "All", icon: <FaHome /> },
    { name: "Clay made pottery", icon: <FaLeaf /> },
    { name: "Stoneware", icon: <FaGem /> },
    { name: "Porcelain", icon: <FaMugHot /> },
    { name: "Terra Cotta", icon: <FaSeedling /> },
    { name: "Ceramics & Architectural", icon: <FaCube /> },
    { name: "Home decor pottery", icon: <FaHome /> },
  ];

  const generateSlug = (name) => {
    console.log(name);
    if (name == "All") {
      return "/shop";
    }
    return (
      "/shop/category/" +
      name.toLowerCase().replace(/&/g, "and").replace(/\s+/g, "-")
    );
  };

  return (
    <div className="min-h-screen bg-[#E9E9E9] ">
      <div className="container mx-auto px-6 lg:px-28 py-12">
        <h2 className="text-3xl font-bold mb-8 text-center text-[#415765]">
          🛍️ Our Products
        </h2>

        <div className="flex flex-wrap justify-center gap-4 mb-8">
          {categories.map((cat, idx) => (
            <NavLink
              key={idx}
              end={true}
              to={generateSlug(cat.name)}
              className={({ isActive }) =>
                `flex items-center gap-2 px-4 py-2 rounded-full font-medium shadow transition-transform duration-300 hover:scale-105 hover:cursor-pointer ${
                  isActive ? "bg-[#415765] text-white" : "bg-[#D9DFD7] "
                }`
              }
            >
              {cat.icon}
              <span>{cat.name}</span>
            </NavLink>
          ))}
        </div>

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
