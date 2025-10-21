import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { API_BASE_URL } from "../utils/api";
import { toast } from "react-toastify";
import { useAuth } from "../context/AuthContext";

const Login = () => {
  const { login } = useAuth();
  const navigate = useNavigate();

  // ✅ Changed "email" → "userName" to match backend
  const [formData, setFormData] = useState({ userName: "", password: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // ✅ Send correct payload
      const response = await axios.post(`${API_BASE_URL}/v1/auth/login`, formData);
      const { data, message } = response.data;

      if (data?.accessToken) {
        toast.success(message || "Login successful");

        // ✅ Save auth details in context/localStorage
        login(data.accessToken, {
          username: data.username,
          role: data.role,
          hostId: data.hostId,
          hostName: data.hostName,
          scopes: data.scopes,
        });

        console.log("Login success:", data);
        navigate("/admin", { replace: true });
      } else {
        toast.error("Invalid credentials");
      }
    } catch (error) {
      console.error("Login error:", error.response?.data || error.message);
      toast.error(
        error.response?.data?.message || "Something went wrong. Try again."
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen flex justify-center items-center bg-gray-50">
      <div className="w-[90%] md:w-[350px] h-[350px] p-5 rounded-2xl bg-gray-100 shadow-xl">
        <div className="flex justify-center items-center mb-4">
          <h1 className="text-xs lg:text-xl font-sans font-medium">
            Login To Account
          </h1>
        </div>

        <form className="mt-3" onSubmit={handleLogin}>
          {/* ✅ USERNAME FIELD */}
          <div className="mb-5">
            <label
              htmlFor="userName"
              className="block mb-2 text-sm font-medium text-gray-900"
            >
              Username
            </label>
            <input
              id="userName"
              name="userName"
              value={formData.userName}
              onChange={handleChange}
              className="bg-gray-100 border border-gray-200 text-gray-900 text-sm rounded-lg w-full p-2.5"
              placeholder="Enter your username"
              required
            />
          </div>

          {/* ✅ PASSWORD FIELD */}
          <div className="mb-5">
            <label
              htmlFor="password"
              className="block mb-2 text-sm font-medium text-gray-900"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              className="bg-gray-100 border border-gray-200 text-black text-sm rounded-lg block w-full p-2.5"
              required
            />
          </div>

          {/* ✅ SUBMIT BUTTON */}
          <div className="flex flex-col gap-3 items-center">
            <button
              type="submit"
              disabled={isSubmitting}
              className={`w-full text-white text-sm font-medium py-2 rounded-lg transition ${
                isSubmitting
                  ? "bg-blue-400 cursor-not-allowed"
                  : "bg-sky-800 hover:bg-[#1c2e6a]"
              }`}
            >
              {isSubmitting ? "Logging in..." : "Login"}
            </button>

            <Link
              to={"/signup"}
              className="font-medium text-blue-600 hover:underline text-sm"
            >
              Don't have an account? Register
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
