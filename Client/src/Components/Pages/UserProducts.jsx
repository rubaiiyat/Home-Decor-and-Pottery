import React from "react";
import { Link } from "react-router";

const UserProducts = ({ item, handleDelete }) => {
  const { _id, image, name, category, price } = item;

  return (
    <div className="bg-[#D9DFD7] rounded-2xl shadow-md p-4 border border-gray-200 hover:shadow-lg transition flex items-center gap-4">
      {/* Product Image */}
      <div className="w-24 h-24 rounded-lg overflow-hidden flex-shrink-0 border border-gray-300">
        <img src={image} className="w-full h-full object-cover" />
      </div>

      {/* Product Info */}
      <div className="flex-grow">
        <h3 className="text-base font-bold text-[#415765]">{name}</h3>
        <p className="text-gray-500 text-sm mt-1 line-clamp-2">{category}</p>
        <div className="mt-2 flex items-center justify-between">
          <span className="text-[#415765] font-semibold">${price}</span>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="flex flex-col gap-2">
        <Link
          to={`/user/update-product/${_id}`}
          className="btn px-3 py-1 bg-[#415765] text-white rounded-lg text-sm font-medium hover:bg-[#314d5d] transition"
        >
          Edit
        </Link>
        <Link
          onClick={() => handleDelete(_id)}
          className="btn px-3 py-1 bg-red-500 text-white rounded-lg text-sm font-medium hover:bg-red-600 transition"
        >
          Delete
        </Link>
      </div>
    </div>
  );
};

export default UserProducts;
