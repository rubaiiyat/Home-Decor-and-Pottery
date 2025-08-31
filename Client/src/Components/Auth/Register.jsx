import React, { useState } from "react";

const Register = () => {
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <div className="min-h-screen bg-[#E9E9E9] flex items-center justify-center py-10 px-4">
      <form
        onSubmit={handleSubmit}
        className="bg-[#F4F0ED] rounded-3xl shadow-lg p-8 w-full max-w-lg space-y-6"
      >
        <h2 className="text-2xl font-bold text-[#415765] text-center">
          Register
        </h2>

        {/* Username */}
        <div>
          <label className="block text-[#415765] font-semibold mb-1">
            Username
          </label>
          <input
            type="text"
            name="username"
            required
            className="w-full border border-[#415765]/30 rounded-xl px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#415765]"
            placeholder="Enter your username"
          />
        </div>

        {/* Full Name */}
        <div>
          <label className="block text-[#415765] font-semibold mb-1">
            Full Name
          </label>
          <input
            type="text"
            name="fullName"
            required
            className="w-full border border-[#415765]/30 rounded-xl px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#415765]"
            placeholder="Enter your full name"
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
            className="w-full border border-[#415765]/30 rounded-xl px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#415765]"
            placeholder="https://example.com/profile.jpg"
          />
        </div>

        {/* Email */}
        <div>
          <label className="block text-[#415765] font-semibold mb-1">
            Email
          </label>
          <input
            type="email"
            name="email"
            required
            className="w-full border border-[#415765]/30 rounded-xl px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#415765]"
            placeholder="Enter your email"
          />
        </div>

        {/* Password */}
        <div>
          <label className="block text-[#415765] font-semibold mb-1">
            Password
          </label>
          <input
            type="password"
            name="password"
            required
            className="w-full border border-[#415765]/30 rounded-xl px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#415765]"
            placeholder="Enter password"
          />
        </div>

        {/* Confirm Password */}
        <div>
          <label className="block text-[#415765] font-semibold mb-1">
            Confirm Password
          </label>
          <input
            type="password"
            name="confirmPassword"
            required
            className="w-full border border-[#415765]/30 rounded-xl px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#415765]"
            placeholder="Confirm password"
          />
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          disabled={loading}
          className="w-full bg-[#415765] text-[#F4F0ED] font-bold py-3 rounded-2xl shadow-md hover:cursor-pointer"
        >
          {loading ? "Registering..." : "Register"}
        </button>
      </form>
    </div>
  );
};

export default Register;
