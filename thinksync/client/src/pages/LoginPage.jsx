// client/src/pages/LoginPage.jsx
import React from "react";

const LoginPage = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-indigo-600 to-purple-700">
      <div className="bg-white rounded-2xl shadow-2xl p-8 w-[90%] max-w-md">
        <h1 className="text-3xl font-bold text-center text-indigo-700 mb-6">
          ThinkSync
        </h1>
        <p className="text-gray-500 text-center mb-8">
          Where great minds sync in real-time ✨
        </p>

        <form className="flex flex-col gap-4">
          <input
            type="email"
            placeholder="Email"
            className="border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
          <input
            type="password"
            placeholder="Password"
            className="border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
          <button
            type="submit"
            className="bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-2 rounded-lg transition duration-200"
          >
            Login
          </button>
        </form>

        <div className="mt-6 text-center">
          <button className="border border-gray-300 rounded-lg py-2 px-4 w-full hover:bg-gray-100 flex justify-center items-center gap-2">
            <img
              src="https://www.svgrepo.com/show/475656/google-color.svg"
              alt="Google"
              className="w-5 h-5"
            />
            Continue with Google
          </button>
        </div>

        <p className="text-gray-500 text-sm text-center mt-6">
          Don’t have an account?{" "}
          <a href="#" className="text-indigo-600 font-medium hover:underline">
            Sign up
          </a>
        </p>
      </div>
    </div>
  );
};

export default LoginPage;
