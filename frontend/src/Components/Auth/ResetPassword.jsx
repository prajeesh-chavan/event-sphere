import React, { useState } from "react";
import { useParams } from "react-router-dom";
import toast from "react-hot-toast";
import { resetPassword } from "../../services/authService";

const ResetPassword = () => {
  const { token } = useParams();
  const [newPassword, setNewPassword] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const res = await resetPassword(newPassword, token);
      setMessage(res.message);
      toast.success(res.message);
    } catch (err) {
      setMessage(err.response?.message || "Error resetting password");
      toast.error(err.response?.message || "Error resetting password");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <div className="max-w-md w-80 mx-auto p-6 mt-12 bg-white shadow-lg rounded-lg">
        <h2 className="text-2xl font-semibold text-center text-gray-800 mb-6">
          Reset Password
        </h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="flex flex-col">
            <label htmlFor="password" className="text-left text-gray-600 mb-2">
              New Password
            </label>
            <input
              id="password"
              type="password"
              className="w-full p-3 border border-gray-300 rounded-lg "
              placeholder="Enter new password"
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
              required
            />
          </div>
          <button
            type="submit"
            className={`w-full py-3 px-4 text-white font-semibold rounded-lg transition ${
              loading
                ? "bg-sky-400 cursor-not-allowed"
                : "bg-sky-500 hover:bg-sky-600"
            }`}
            disabled={loading}
          >
            {loading ? "Resetting..." : "Reset Password"}
          </button>
        </form>
        {message && (
          <p className="text-center mt-4 text-lg font-medium text-gray-800">
            {message}
          </p>
        )}
      </div>
    </div>
  );
};

export default ResetPassword;
