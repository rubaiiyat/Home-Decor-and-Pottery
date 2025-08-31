import React, { useContext, useState } from "react";
import Swal from "sweetalert2";
import { AuthContext } from "../Context/AuthProvider";

const AddItem = () => {
  const { user } = useContext(AuthContext);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;

    const name = form.name.value;
    const description = form.description.value;
    const image = form.image.value;
    const category = form.category.value;
    const price = form.price.value;
    const rating = form.rating.value;
    const stock = form.stock.checked;

    const item = {
      name,
      description,
      image,
      category,
      price,
      rating,
      stock,
      userEmail: user.email,
    };

    try {
      setLoading(true);
      const res = await fetch("http://localhost:3000/add-item", {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(item),
      });
      if (res.ok) {
        const data = await res.json();
        Swal.fire({
          title: `${name} Added Successfully!`,
          icon: "success",
          draggable: true,
        });
        form.reset();
      }
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Oops...Sorry....",
        text: "Something went wrong! Try Again",
      });
    } finally {
      setLoading(false);
    }
  };
  return (
    <div className="min-h-screen bg-[#E9E9E9] flex items-center justify-center py-10 px-4">
      <form
        onSubmit={handleSubmit}
        className="bg-[#F4F0ED] rounded-3xl shadow-lg p-8 w-full max-w-xl space-y-6"
      >
        <h2 className="text-2xl font-bold text-[#415765] text-center">
          Add New Product
        </h2>

        {/* Name */}
        <div>
          <label className="block text-[#415765] font-semibold mb-1">
            Name
          </label>
          <input
            type="text"
            name="name"
            required
            className="w-full border border-[#415765]/30 rounded-xl px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#415765] transition-all duration-300"
            placeholder="Enter product name"
          />
        </div>

        {/* Description */}
        <div>
          <label className="block text-[#415765] font-semibold mb-1">
            Description
          </label>
          <textarea
            name="description"
            required
            rows={3}
            className="w-full border border-[#415765]/30 rounded-xl px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#415765] transition-all duration-300"
            placeholder="Enter product description"
          />
        </div>

        {/* Image URL */}
        <div>
          <label className="block text-[#415765] font-semibold mb-1">
            Image URL
          </label>
          <input
            type="url"
            name="image"
            required
            className="w-full border border-[#415765]/30 rounded-xl px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#415765] transition-all duration-300"
            placeholder="https://example.com/image.jpg"
          />
        </div>

        {/* Category */}
        <div>
          <label className="block text-[#415765] font-semibold mb-1">
            Category
          </label>
          <select
            name="category"
            className="w-full border border-[#415765]/30 rounded-xl px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#415765] transition-all duration-300"
          >
            <option>Clay-made Pottery</option>
            <option>Stoneware</option>
            <option>Porcelain</option>
            <option>Terra Cotta</option>
            <option>Ceramics & Architectural</option>
            <option>Home decor pottery</option>
          </select>
        </div>

        {/* Price */}
        <div>
          <label className="block text-[#415765] font-semibold mb-1">
            Price ($)
          </label>
          <input
            type="number"
            name="price"
            required
            step="0.01"
            min="0"
            className="w-full border border-[#415765]/30 rounded-xl px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#415765] transition-all duration-300"
            placeholder="Enter price"
          />
        </div>

        {/* Rating */}
        <div>
          <label className="block text-[#415765] font-semibold mb-1">
            Rating
          </label>
          <input
            type="number"
            name="rating"
            required
            step="0.1"
            min="0"
            max="5"
            className="w-full border border-[#415765]/30 rounded-xl px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#415765] transition-all duration-300"
            placeholder="Enter rating (0-5)"
          />
        </div>

        {/* Stock */}
        <div className="flex items-center gap-2">
          <input
            type="checkbox"
            defaultChecked={true}
            name="stock"
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
            value={user.email}
            readOnly
            className="w-full border border-[#415765]/30 rounded-xl px-4 py-2 bg-gray-200 text-gray-700 cursor-not-allowed"
          />
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-[#415765] text-[#F4F0ED] font-bold py-3 rounded-2xl shadow-md  hover:cursor-pointer"
        >
          {loading ? "Adding..." : "Add Item"}
        </button>
      </form>
    </div>
  );
};

export default AddItem;
