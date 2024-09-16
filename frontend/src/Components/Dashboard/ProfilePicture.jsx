import React, { useState } from "react";
import { updateProfilePicture } from "../../services/userService";
import { FiEdit2 } from "react-icons/fi";

const ProfilePicture = ({ user }) => {
  const [image, setImage] = useState(null);
  const [preview, setPreview] = useState(null);
  const [uploading, setUploading] = useState(false);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setImage(file);
    if (file) {
      const objectUrl = URL.createObjectURL(file);
      setPreview(objectUrl);
    }
  };

  const handleImageUpload = async () => {
    if (image) {
      const formData = new FormData();
      formData.append("profilePicture", image);
      setUploading(true);
      try {
        await updateProfilePicture(formData);
        window.location.reload(); // Reload page to update the image
      } catch (error) {
        console.error("Error uploading profile picture:", error);
      } finally {
        setUploading(false);
      }
    }
  };

  return (
    <div className="relative flex flex-col items-center">
      <div className="relative">
        <img
          src={
            preview ||
            `http://localhost:5000/uploads/profile/${user.profilePicture}` ||
            "/default-profile.png"
          } // Default image if no picture
          alt="Profile"
          className="w-40 h-40 object-cover object-top rounded-full border-4 border-sky-500 shadow-md transition-transform transform hover:scale-105"
        />
        <label
          htmlFor="file-upload"
          className="absolute bottom-1 right-2 bg-sky-500 text-white rounded-full p-2 shadow-md cursor-pointer hover:bg-sky-700 transition-colors"
        >
          <FiEdit2 size={24}/>

          <input
            id="file-upload"
            type="file"
            accept="image/*"
            onChange={handleImageChange}
            className="absolute inset-0 opacity-0 cursor-pointer"
          />
        </label>
      </div>
      {preview && !uploading && (
        <button
          onClick={handleImageUpload}
          className="mt-3 px-4 py-2 bg-sky-500 text-white rounded-md shadow-md hover:bg-sky-700 transition-colors"
        >
          Upload
        </button>
      )}
      {uploading && (
        <div className="mt-3 flex items-center">
          <svg
            className="w-6 h-6 mr-2 text-sky-600 animate-spin"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M12 4v8l4 4m-4-4h8"
            />
          </svg>
          <span>Uploading...</span>
        </div>
      )}
    </div>
  );
};

export default ProfilePicture;
