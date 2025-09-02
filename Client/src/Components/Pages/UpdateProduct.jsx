import React, { useState } from "react";
import { useContext } from "react";
import { useLoaderData, useNavigate } from "react-router";
import Swal from "sweetalert2";
import toast from "react-hot-toast";
import { AuthContext } from "../Context/AuthProvider";
import { useEffect } from "react";

const UpdateProduct = () => {
  const { user } = useContext(AuthContext);
  const product = useLoaderData();
  const navigate = useNavigate();

  const { _id, name, description, image, category, price, rating, userEmail } =
    product;

  useEffect(() => {
    if (user?.email && user.email != userEmail) {
      toast.error("Product Not Found");
      navigate("/user/profile");
    }
    return;
  }, [user, userEmail, navigate]);
  const handleUpdate = async (e) => {
    e.preventDefault();

    const form = e.target;
    const name = form.name.value;
    const description = form.description.value;
    const image = form.image.value;
    const category = form.category.value;
    const price = form.price.value;
    const rating = form.rating.value;
    const stock = form.stock.checked;

    const updateItem = {
      name,
      description,
      image,
      category,
      price,
      rating,
      stock,
    };
    try {
      fetch(
        `https://home-decor-pottery-server.onrender.com/item/update/${_id}`,
        {
          method: "PUT",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(updateItem),
        }
      )
        .then((res) => res.json())
        .then((data) => {
          Swal.fire({
            position: "top",
            icon: "success",
            title: `${name} updated successfully!`,
            showConfirmButton: false,
            timer: 2000,
          });
          navigate("/user/profile");
        });
    } catch (error) {}
  };
  return (
    <div className="min-h-screen bg-[#E9E9E9] flex items-center justify-center p-4">
      <div className="bg-[#F4F0ED] w-full max-w-lg rounded-3xl shadow-lg p-8">
        <h2 className="text-2xl font-bold text-[#415765] text-center mb-6">
          Update Product
        </h2>

        <form className="space-y-4" onSubmit={handleUpdate}>
          {/* Name */}
          <label className="block text-[#415765] font-semibold mb-1">
            Name
          </label>
          <input
            type="text"
            name="name"
            defaultValue={name}
            placeholder="Product Name"
            className="w-full border border-[#415765]/30 rounded-xl px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#415765]"
            required
          />

          {/* Description */}

          <label className="block text-[#415765] font-semibold mb-1">
            Description
          </label>
          <textarea
            name="description"
            placeholder="Description"
            defaultValue={description}
            className="w-full border border-[#415765]/30 rounded-xl px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#415765]"
            rows={3}
            required
          />

          {/* Image URL */}
          <label className="block text-[#415765] font-semibold mb-1">
            Image URL
          </label>
          <input
            type="url"
            name="image"
            defaultValue={image}
            placeholder="Image URL"
            className="w-full border border-[#415765]/30 rounded-xl px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#415765]"
          />

          {/* Category */}
          <label className="block text-[#415765] font-semibold mb-1">
            Category
          </label>
          <select
            name="category"
            defaultValue={category}
            className="w-full border border-[#415765]/30 rounded-xl px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#415765]"
          >
            <option>Clay made Pottery</option>
            <option>Stoneware</option>
            <option>Porcelain</option>
            <option>Terra Cotta</option>
            <option>Ceramics & Architectural</option>
            <option>Home decor pottery</option>
          </select>

          {/* Price */}
          <label className="block text-[#415765] font-semibold mb-1">
            Price ($)
          </label>
          <input
            type="number"
            name="price"
            defaultValue={price}
            placeholder="Price"
            step="0.01"
            min="0"
            className="w-full border border-[#415765]/30 rounded-xl px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#415765]"
            required
          />

          {/* Rating */}
          <label className="block text-[#415765] font-semibold mb-1">
            Rating
          </label>
          <input
            type="number"
            name="rating"
            defaultValue={rating}
            placeholder="Rating (0-5)"
            step="0.1"
            min="0"
            max="5"
            className="w-full border border-[#415765]/30 rounded-xl px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#415765]"
          />

          {/* Stock */}
          <div className="flex items-center gap-2">
            <input
              type="checkbox"
              name="stock"
              defaultChecked={true}
              className="w-5 h-5 accent-[#415765]"
            />
            <label className="text-[#415765] font-semibold">In Stock</label>
          </div>

          {/* Author Email */}
          <div>
            <label className="block text-[#415765] font-semibold mb-1">
              Author Email
            </label>
            <input
              type="email"
              name="userEmail"
              value={userEmail}
              readOnly
              className="w-full border border-[#415765]/30 rounded-xl px-4 py-2 bg-gray-200 text-gray-700 cursor-not-allowed"
            />
          </div>

          {/* Submit */}
          <button
            type="submit"
            className="w-full bg-[#415765] text-[#F4F0ED] font-bold py-3 rounded-2xl hover:cursor-pointer hover:bg-[#314d5d] transition"
          >
            Update Product
          </button>
        </form>
      </div>
    </div>
  );
};

export default UpdateProduct;
