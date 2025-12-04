"use client";

import axios from "axios";
import { useState } from "react";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";

function LoginForm() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post("/api/auth/login", { email, password });

      toast.success("Login Successful!");

      // 📌 IMPORTANT: store both token + userId
      localStorage.setItem("token", res.data.token);
      localStorage.setItem("userId", res.data.user._id);

      router.push("/");
    } catch (err) {
      toast.error(err.response?.data?.error || "Something went wrong");
    }
  };

  return (
    <div className="w-full h-screen flex items-center justify-center bg-[#FFF3E4]">
      <div className="bg-white p-10 rounded-2xl shadow-xl w-full max-w-md">

        <h2 className="text-3xl font-bold text-center text-[#4A2C2A] mb-6">
          Login
        </h2>

        <form onSubmit={handleSubmit}>
          <input
            type="email"
            placeholder="Email"
            className="w-full p-3 mb-4 border rounded-xl outline-none text-black"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <input
            type="password"
            placeholder="Password"
            className="w-full p-3 mb-6 border rounded-xl outline-none text-black"
            required
            minLength={6}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <button
            type="submit"
            className="w-full bg-[#4A2C2A] text-white py-3 rounded-full text-lg"
          >
            Login
          </button>
        </form>

        <p className="text-center mt-4 text-sm">
          Don’t have an account?{" "}
          <a href="/signup" className="text-[#4A2C2A] font-semibold">Sign Up</a>
        </p>

      </div>
    </div>
  );
}

export default LoginForm;
