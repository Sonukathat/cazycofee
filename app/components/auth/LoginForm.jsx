function LoginForm() {
  return (
    <div className="w-full h-screen flex items-center justify-center bg-[#FFF3E4]">
      <div className="bg-white p-10 rounded-2xl shadow-xl w-full max-w-md">

        <h2 className="text-3xl font-bold text-center text-[#4A2C2A] mb-6">
          Login
        </h2>

        <input
          type="email"
          placeholder="Email"
          className="w-full p-3 mb-4 border rounded-xl outline-none"
        />

        <input
          type="password"
          placeholder="Password"
          className="w-full p-3 mb-6 border rounded-xl outline-none"
        />

        <button className="w-full bg-[#4A2C2A] text-white py-3 rounded-full text-lg">
          Login
        </button>

        <p className="text-center mt-4 text-sm">
          Don’t have an account? <a href="/signup" className="text-[#4A2C2A] font-semibold">Sign Up</a>
        </p>

      </div>
    </div>
  );
}

export default LoginForm;
