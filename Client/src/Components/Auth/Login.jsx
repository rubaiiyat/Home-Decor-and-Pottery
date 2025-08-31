import React, { useContext, useState } from "react";
import { FaGithub } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { AuthContext } from "../Context/AuthProvider";
import { Link, useNavigate } from "react-router";
import toast from "react-hot-toast";

const Login = () => {
  const [loading, setLoading] = useState(false);
  const { signInUser, loginWithGoogle, loginWithGithub, logOut } =
    useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    try {
      setLoading(true);
      await signInUser(email, password);
      toast.success("Login successful!");
      navigate("/user/profile");
    } catch (error) {
      toast.error(error.message);
    } finally {
      setLoading(false);
    }
  };

  const handleGoogleLogin = async () => {
    try {
      setLoading(true);
      await loginWithGoogle();
      toast.success("Login successful!");
      navigate("/user/profile");
    } catch (error) {
      toast.error(error.message);
    } finally {
      setLoading(false);
    }
  };

  const handleGithubLogin = async () => {
    try {
      setLoading(true);
      await loginWithGithub();
      toast.success("Login successful!");
      navigate("/user/profile");
    } catch (error) {
      toast.error(error.message);
    } finally {
      setLoading(false);
    }
  };
  return (
    <div>
      <div className="min-h-screen bg-[#E9E9E9] flex items-center justify-center py-10 px-4">
        <form
          onSubmit={handleLogin}
          className="bg-[#F4F0ED] rounded-3xl shadow-lg p-8 w-full max-w-md space-y-6"
        >
          <h2 className="text-2xl font-bold text-[#415765] text-center">
            Login
          </h2>

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
              placeholder="Enter your password"
            />
          </div>

          <div className="text-center mt-6 text-gray-600">
            <p className="text-sm">
              Don't have an account yet?{" "}
              <Link
                to="/auth/register"
                className="text-[#415765] font-bold hover:text-[#253844] transition-colors"
              >
                Register now
              </Link>
            </p>
          </div>

          {/* Login Button */}
          <button
            type="submit"
            disabled={loading}
            className="w-full bg-[#415765] text-[#F4F0ED] font-bold py-3 rounded-2xl shadow-md hover:cursor-pointer"
          >
            {loading ? "Logging in..." : "Login"}
          </button>

          {/* Social Login */}
          <div className="flex justify-between mt-4">
            <button
              type="button"
              onClick={handleGoogleLogin}
              className="w-1/2 mr-2 bg-[#03314e] hover:bg-[#123b4c] text-white font-semibold py-2 rounded-xl flex items-center justify-center gap-2 transition-colors hover:cursor-pointer"
            >
              <FcGoogle size={20} /> Google
            </button>

            <button
              type="button"
              onClick={handleGithubLogin}
              className="w-1/2 ml-2 bg-gray-800 hover:bg-gray-950 text-white font-semibold py-2 rounded-xl flex items-center justify-center gap-2 transition-colors hover:cursor-pointer"
            >
              <FaGithub size={20} /> Github
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
