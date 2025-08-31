import React from "react";
import { useLoaderData } from "react-router";

const ProductDetails = () => {
  const product = useLoaderData();
  const {
    name,
    description,
    image,
    category,
    price,
    rating,
    stock,
    userEmail,
  } = product;

  return (
    <div className="min-h-screen bg-[#E9E9E9] py-8 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Breadcrumb */}
        <nav className="text-sm text-[#415765]/70 mb-6">
          <span>Home / </span>
          <span>Shop / </span>
          <span>{category} / </span>
          <span className="text-[#415765]">{name}</span>
        </nav>

        <div className="bg-[#F4F0ED] rounded-2xl shadow-sm overflow-hidden border border-[#D9DFD7]">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-6 md:p-8">
            {/* Product Image */}
            <div className="flex justify-center">
              <div className="w-full max-w-md h-96 rounded-xl overflow-hidden shadow-lg">
                <img
                  src={image}
                  alt={name}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Product Info */}
            <div className="flex flex-col justify-between">
              <div>
                <span className="inline-block px-3 py-1 bg-[#D9DFD7] text-[#415765] rounded-full text-sm font-medium mb-4">
                  {category}
                </span>

                <h1 className="text-3xl md:text-4xl font-bold text-[#415765] mb-4">
                  {name}
                </h1>

                <p className="text-[#415765]/80 mb-6 leading-relaxed">
                  {description}
                </p>

                <div className="flex items-center mb-6">
                  <div className="flex text-amber-400 mr-2">
                    {[...Array(5)].map((_, i) => (
                      <svg
                        key={i}
                        xmlns="http://www.w3.org/2000/svg"
                        className={`h-5 w-5 ${
                          i < Math.floor(rating)
                            ? "fill-current"
                            : "stroke-current fill-none"
                        }`}
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={i < rating ? 0 : 1}
                          d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
                        />
                      </svg>
                    ))}
                  </div>
                  <span className="text-[#415765] font-medium">
                    {rating} / 5.0
                  </span>
                </div>

                <div className="mb-6">
                  <span
                    className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium ${
                      stock
                        ? "bg-green-100 text-green-800"
                        : "bg-red-100 text-red-800"
                    }`}
                  >
                    <span
                      className={`w-2 h-2 rounded-full mr-2 ${
                        stock ? "bg-green-500" : "bg-red-500"
                      }`}
                    ></span>
                    {stock ? "In Stock" : "Out of Stock"}
                  </span>
                </div>
              </div>

              <div>
                <div className="flex items-center mb-6">
                  <span className="text-3xl font-bold text-[#415765]">
                    ${price}
                  </span>
                </div>

                <div className="flex space-x-4">
                  <button
                    className="flex-1 bg-[#415765] text-[#F4F0ED] py-3 rounded-xl font-medium hover:bg-[#344553] transition shadow-md hover:cursor-pointer"
                    disabled={!stock}
                  >
                    {stock ? "Add to Cart" : "Out of Stock"}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
