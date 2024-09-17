import React, { useState } from "react";
import toast from "react-hot-toast";
// import { sendContactMessage } from "../../services/contactService"; // Assuming you have a service to handle the message

const ContactUs = () => {
  const [contactDetails, setContactDetails] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setContactDetails((prevDetails) => ({
      ...prevDetails,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // await sendContactMessage(contactDetails);
      toast("Message sent successfully!", { type: "success" });
      setContactDetails({ name: "", email: "", subject: "", message: "" });
    } catch (error) {
      toast("Failed to send message. Please try again.", { type: "error" });
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white rounded-lg shadow-md mt-32">
      <h2 className="text-3xl font-bold text-center text-gray-700 mb-8">
        Contact Us
      </h2>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Your Name:
            </label>
            <input
              type="text"
              name="name"
              value={contactDetails.name}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border rounded-lg shadow-sm "
            />
          </div>
          <div>
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Your Email:
            </label>
            <input
              type="email"
              name="email"
              value={contactDetails.email}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border rounded-lg shadow-sm "
            />
          </div>
        </div>
        <div>
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Subject:
          </label>
          <input
            type="text"
            name="subject"
            value={contactDetails.subject}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 border rounded-lg shadow-sm "
          />
        </div>
        <div>
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Message:
          </label>
          <textarea
            name="message"
            value={contactDetails.message}
            onChange={handleChange}
            required
            rows="5"
            className="w-full px-4 py-2 border rounded-lg shadow-sm "
          ></textarea>
        </div>
        <div className="text-center">
          <button
            type="submit"
            className="w-full bg-sky-500 hover:bg-sky-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            Send Message
          </button>
        </div>
      </form>
    </div>
  );
};

export default ContactUs;