import React, { useState } from "react";
import toast from "react-hot-toast";
import { forgotPassword } from "../../services/authService";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(""); // Clear any previous error
    try {
      const res = await forgotPassword(email);
      setMessage(res.message);
      setEmail(""); // Clear email after success
      toast.success(res.message);
    } catch (err) {
      setError(err.response?.data?.message || "Error sending reset email");
      toast.error(err.response?.data?.message || "Error sending reset email");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <div className="max-w-md w-80 mx-auto p-6 bg-white shadow-lg rounded-lg">
        <h2 className="text-2xl font-semibold text-center text-gray-800 mb-4">
          Forgot Password
        </h2>
        {message && (
          <p className="text-green-600 text-center mt-4" aria-live="polite">
            {message}
          </p>
        )}
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="flex flex-col">
            <label htmlFor="email" className="text-left text-gray-600 mb-2">
              Email Address
            </label>
            <input
              id="email"
              type="email"
              className="w-full p-3 border border-gray-300 rounded-lg"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            {error && (
              <p className="text-red-600 text-sm mt-2" aria-live="assertive">
                {error}
              </p>
            )}
          </div>
          <button
            type="submit"
            className={`w-full py-3 px-4 text-white font-semibold rounded-lg transition ${
              loading
                ? "bg-sky-400 cursor-not-allowed"
                : "bg-sky-500 hover:bg-sky-700"
            }`}
            disabled={loading}
          >
            {loading ? "Sending..." : "Send Reset Link"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default ForgotPassword;
