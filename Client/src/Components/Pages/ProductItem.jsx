import React from "react";
import { Link } from "react-router";
import { FaRegArrowAltCircleRight } from "react-icons/fa";

const ProductItem = ({ item }) => {
  const { _id, name, price, rating, stock, userEmail, image } = item;

  return (
    <div className="group bg-[#F4F0ED] rounded-3xl shadow-md hover:shadow-xl transition-all duration-500 transform  hover:scale-101 overflow-hidden h-full flex flex-col border border-[#D9DFD7] relative">
      {/* Image Section */}
      <div className="relative overflow-hidden">
        <img
          src={image}
          alt={name}
          className="w-full h-56 sm:h-60 lg:h-52 object-cover transition-transform duration-500 group-hover:scale-105"
          loading="lazy"
        />

        {/* Stock Status Badge */}
        <span
          className={`absolute top-4 right-4 px-3 py-1.5 text-xs font-semibold rounded-full border shadow-sm text-white transform transition-transform duration-300 group-hover:scale-105 ${
            stock
              ? "bg-[#415765] border-[#D9DFD7]"
              : "bg-red-500 border-red-200"
          }`}
        >
          {stock ? "In Stock" : "Out of Stock"}
        </span>

        {/* Price Tag */}
        <span className="absolute bottom-4 left-4 bg-[#D9DFD7] text-[#415765] px-4 py-2 rounded-2xl text-base font-bold shadow-sm border border-[#D9DFD7] transform transition-all duration-300 group-hover:scale-105 group-hover:bg-[#D9DFD7]/90">
          ${price}
        </span>

        {/* Rating */}
        <div className="absolute top-4 left-4 bg-[#D9DFD7] text-[#415765] px-2.5 py-1 rounded-xl shadow-sm border border-[#D9DFD7] flex items-center gap-1 transform transition-transform duration-300 group-hover:scale-105">
          <span className="text-yellow-500 text-sm">★</span>
          <span className="text-xs font-semibold">{rating || "N/A"}</span>
        </div>
      </div>

      {/* Content Section */}
      <div className="p-5 sm:p-6 flex-grow flex flex-col">
        {/* Product Name */}
        <h3 className="font-bold text-[#415765] text-base sm:text-lg line-clamp-2 mb-3 transition-colors duration-300 ">
          {name}
        </h3>

        {/* Author Email */}
        <div className="flex items-center gap-2 mb-4">
          <div className="w-7 h-7 bg-[#D9DFD7] rounded-full flex items-center justify-center text-[#415765] text-xs font-bold transform transition-transform duration-300 group-hover:scale-105">
            {(userEmail || "A").charAt(0).toUpperCase()}
          </div>
          <span className="text-sm text-[#415765]/70 italic">
            by {userEmail?.split("@")[0] || "Anonymous"}
          </span>
        </div>

        {/* Call-to-Action */}
        <div className="mt-auto">
          <Link
            to={`/shop/product/details/${_id}`}
            className="flex items-center justify-between bg-[#D9DFD7] hover:bg-[#D9DFD7]/90 rounded-2xl px-4 py-3 border border-[#D9DFD7] transition-all duration-300 transform group-hover:scale-102"
          >
            <span className="text-sm font-bold text-[#415765] group-hover:text-[#415765]/80 transition-colors duration-300">
              View Details
            </span>
            <div className="w-8 h-8 bg-[#D9DFD7] rounded-full flex items-center justify-center shadow-sm transform transition-transform duration-300 group-hover:scale-110">
              <FaRegArrowAltCircleRight className="text-[#415765]" />
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProductItem;
