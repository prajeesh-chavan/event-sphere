import React, { useState, useEffect } from "react";
import { getUserProfile, updateUserProfile } from "../../services/userService";
import ProfilePicture from "./ProfilePicture";
import { useNavigate } from "react-router-dom";
import { FiEdit2 } from "react-icons/fi";
import toast from "react-hot-toast";
import Lottie from "lottie-react";
import loader from "../../assets/loader.json";

const UserProfile = () => {
  const [user, setUser] = useState({});
  const [editing, setEditing] = useState(false);
  const [formData, setFormData] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const userData = await getUserProfile();
        setUser(userData);
        setFormData(userData);
      } catch (err) {
        setError("Failed to fetch user profile");
      } finally {
        setLoading(false);
      }
    };
    fetchProfile();
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);
    setSuccess(null);
    try {
      await updateUserProfile(formData);
      toast.success("Profile updated successfully");
      setEditing(false);
      setUser(formData);
    } catch (error) {
      setError("Error updating profile");
    }
  };

  if (loading)
    return (
      <div className="h-full p-6 flex items-center justify-center">
        <div className="text-gray-700 text-xl">
          <Lottie animationData={loader} />
        </div>
      </div>
    );

  return (
    <div className="relative w-full mx-auto p-6 bg-white shadow-lg rounded-lg border border-gray-200">
      {/* Profile Header */}
      <div className="flex flex-col sm:flex-row items-center sm:items-start sm:space-x-8 mb-8">
        <div className="relative">
          <ProfilePicture
            user={user}
            className="w-40 h-40 rounded-full border-4 border-sky-500 shadow-lg transition-transform transform hover:scale-105"
          />
        </div>
        <div className="mt-4 sm:mt-0 text-center sm:text-left">
          <h2 className="text-3xl font-bold text-gray-800">{user.name}</h2>
          <p className="text-lg text-gray-600">{user.email}</p>
        </div>
      </div>

      {/* Profile Details */}
      {editing ? (
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="flex flex-col">
              <label className="text-sm font-medium text-gray-700 mb-2">
                Name
              </label>
              <input
                type="text"
                name="name"
                value={formData.name || ""}
                onChange={handleInputChange}
                className="p-4 rounded-md border border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                required
              />
            </div>
            <div className="flex flex-col">
              <label className="text-sm font-medium text-gray-700 mb-2">
                Email
              </label>
              <input
                type="email"
                name="email"
                value={formData.email || ""}
                onChange={handleInputChange}
                className="p-4 rounded-md border border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                required
              />
            </div>
            <div className="flex flex-col">
              <label className="text-sm font-medium text-gray-700 mb-2">
                Phone
              </label>
              <input
                type="tel"
                name="phone"
                value={formData.phone || ""}
                onChange={handleInputChange}
                className="p-4 rounded-md border border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
              />
            </div>
            <div className="flex flex-col">
              <label className="text-sm font-medium text-gray-700 mb-2">
                Organization
              </label>
              <input
                type="text"
                name="organization"
                value={formData.organization || ""}
                onChange={handleInputChange}
                className="p-4 rounded-md border border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
              />
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="flex flex-col">
              <label className="text-sm font-medium text-gray-700 mb-2">
                Position
              </label>
              <input
                type="text"
                name="position"
                value={formData.position || ""}
                onChange={handleInputChange}
                className="p-4 rounded-md border border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
              />
            </div>
            <div className="flex flex-col">
              <label className="text-sm font-medium text-gray-700 mb-2">
                Bio
              </label>
              <textarea
                name="bio"
                value={formData.bio || ""}
                onChange={handleInputChange}
                className="p-4 rounded-md border border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                rows="4"
              />
            </div>
          </div>
          <div className="flex justify-end gap-8 mt-8">
            <button
              type="submit"
              className="px-6 py-2 bg-sky-500 text-white rounded-md shadow-md hover:bg-sky-600 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-colors"
            >
              Save
            </button>
            <button
              type="button"
              className="px-6 py-2 bg-gray-400 text-white rounded-md shadow-md hover:bg-gray-500 focus:outline-none focus:ring-2 focus:ring-gray-500 transition-colors"
              onClick={() => setEditing(false)}
            >
              Cancel
            </button>
          </div>
          {error && (
            <div className="bg-red-100 border-l-4 border-red-500 text-red-700 p-4 mt-6">
              <p className="font-bold">Error</p>
              <p>{error}</p>
            </div>
          )}
          {success && (
            <div className="bg-green-100 border-l-4 border-green-500 text-green-700 p-4 mt-6">
              <p className="font-bold">Success</p>
              <p>{success}</p>
            </div>
          )}
        </form>
      ) : (
        <div className="space-y-6">
          <div className="p-4">
            <p>
              <strong>Name:</strong> {user.name}
            </p>
            <p>
              <strong>Email:</strong> {user.email}
            </p>
            <p>
              <strong>Phone:</strong> {user.phone || "Not Provided"}
            </p>
            <p>
              <strong>Organization:</strong>{" "}
              {user.organization || "Not Provided"}
            </p>
            <p>
              <strong>Position:</strong> {user.position || "Not Provided"}
            </p>
            <p>
              <strong>Bio:</strong> {user.bio || "Not Provided"}
            </p>
          </div>
          <button
            onClick={() => setEditing(true)}
            className="absolute top-0 right-8 px-2 md:px-6 py-2 bg-sky-500 text-white rounded-md shadow-md hover:bg-sky-600 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-colors"
          >
            <span className="hidden md:block">Edit Profile</span>
            <span className="md:hidden">
              <FiEdit2 size={24} />
            </span>
          </button>
        </div>
      )}
    </div>
  );
};

export default UserProfile;
