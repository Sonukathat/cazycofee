"use client";

import { useState } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";

function SignupForm() {
  const router = useRouter();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [errorMsg, setErrorMsg] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSignup = async () => {
    try {
      setLoading(true);
      setErrorMsg("");

      const res = await axios.post("/api/auth/signup", {
        name,
        email,
        password,
      });

      router.push("/login");
    } catch (err) {
      if (err.response) {
        setErrorMsg(err.response.data.error);
      } else {
        setErrorMsg("Something went wrong");
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-full h-screen flex items-center justify-center bg-[#FFF3E4]">
      <div className="bg-white p-10 rounded-2xl shadow-xl w-full max-w-md">

        <h2 className="text-3xl font-bold text-center text-[#4A2C2A] mb-6">
          Sign Up
        </h2>

        {errorMsg && (
          <p className="text-red-500 text-center mb-3">{errorMsg}</p>
        )}

        <input
          type="text"
          placeholder="Full Name"
          className="w-full p-3 mb-4 border rounded-xl outline-none"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <input
          type="email"
          placeholder="Email"
          className="w-full p-3 mb-4 border rounded-xl outline-none"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type="password"
          placeholder="Password"
          className="w-full p-3 mb-6 border rounded-xl outline-none"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button
          className="w-full bg-[#4A2C2A] text-white py-3 rounded-full text-lg"
          onClick={handleSignup}
          disabled={loading}
        >
          {loading ? "Creating..." : "Create Account"}
        </button>

        <p className="text-center mt-4 text-sm">
          Already have an account?{" "}
          <a href="/login" className="text-[#4A2C2A] font-semibold">
            Login
          </a>
        </p>

      </div>
    </div>
  );
}

export default SignupForm;
