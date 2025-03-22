import React, { useState } from "react";
import { FaPhoneAlt, FaEnvelope, FaTimes } from "react-icons/fa";

const Footer = () => {
  const [showLinks, setShowLinks] = useState(false);
  const [showModal, setShowModal] = useState(false);

  return (
    <div className="bg-gray-100 relative">
      <main className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8">
          <div>
            <h2 className="font-bold text-lg mb-4">R R KABEL LIMITED</h2>
            <p className="mb-4">GET RR CONNECT APP</p>
            <div className="flex space-x-1 mb-4">
              <img src="https://placehold.co/150x50" alt="Google Play Store" />
            </div>
            <p className="mb-4">FOLLOW US ON</p>
            <div>
            <div className="flex space-x-3">
              <i className="fab fa-facebook-f text-gray-700"></i>
              <i className="fab fa-twitter text-gray-700"></i>
              <i className="fab fa-linkedin-in text-gray-700"></i>
              <i className="fab fa-instagram text-gray-700"></i>
              <i className="fab fa-youtube text-gray-700"></i>
            </div>
            <div>
                <h2 className="font-bold text-lg mb-4">ABOUT</h2>
                <ul className="space-y-2">
                  <li><a href="#" className="text-gray-700 hover:text-orange-600">Our Company</a></li>
                  <li><a href="#" className="text-gray-700 hover:text-orange-600">Our Values</a></li>
                  <li><a href="#" className="text-gray-700 hover:text-orange-600">Management Team</a></li>
                  <li><a href="#" className="text-gray-700 hover:text-orange-600">Certifications</a></li>
                  <li><a href="#" className="text-gray-700 hover:text-orange-600">Research & Innovation</a></li>
                  <li><a href="#" className="text-gray-700 hover:text-orange-600">Awards & Recognitions</a></li>
                  <li><a href="#" className="text-gray-700 hover:text-orange-600">Policies</a></li>
                </ul>
              </div>
              </div>
          </div>
        </div>
      </main>

      {/* Floating Quick Links Button */}
      <div className="fixed right-0 top-1/2 transform -translate-y-1/2">
        <button
          onClick={() => setShowLinks(!showLinks)}
          className="bg-orange-600 text-white py-2 px-4 rounded-l-lg cursor-pointer transition-transform transform hover:scale-105"
        >
          Quick Links
        </button>

        {/* Floating Icons */}
        {showLinks && (
          <div className="absolute top-full right-0 bg-white text-black p-2 rounded-lg shadow-lg mt-2 transition-opacity duration-300">
            {/* Phone Icon */}
            <button
              onClick={() => setShowModal(true)}
              className="flex items-center gap-2 p-2 hover:text-orange-600 transition-all duration-200"
            >
              <FaPhoneAlt size={18} />
              <span>Call</span>
            </button>

            {/* Enquiry Icon */}
            <button
              onClick={() => setShowModal(true)}
              className="flex items-center gap-2 p-2 hover:text-orange-600 transition-all duration-200"
            >
              <FaEnvelope size={18} />
              <span>Enquiry</span>
            </button>
          </div>
        )}
      </div>

      {/* Enquiry Modal */}
      {showModal && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-6 rounded-lg w-full h-full md:w-11/12 md:h-auto md:max-w-3xl relative animate-fade-in">
            {/* Close Button */}
            <button
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-800"
              onClick={() => setShowModal(false)}
            >
              <FaTimes size={24} />
            </button>

            <h2 className="text-center text-2xl font-bold mb-4">ENQUIRE NOW</h2>

            {/* Form */}
            <form className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input
                  type="text"
                  placeholder="Name*"
                  className="border p-3 w-full rounded"
                  required
                />
                <input
                  type="email"
                  placeholder="Email*"
                  className="border p-3 w-full rounded"
                  required
                />
              </div>
              <input
                type="text"
                placeholder="Mobile Number*"
                className="border p-3 w-full rounded"
                required
              />

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
               
                <input type="text" className="border p-3 w-full rounded" placeholder="Country " required />
                <input type="text"className="border p-3 w-full rounded" placeholder="State " required />
                <input type="text"  className="border p-3 w-full rounded"placeholder="City " required />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input
                  type="text"
                  placeholder="Pincode"
                  className="border p-3 w-full rounded"
                />
                {/* <select className="border p-3 w-full rounded">
                  <option>Select Products</option>
                </select> */}
              </div>

              <textarea
                placeholder="Comments"
                className="border p-3 w-full rounded h-24"
              ></textarea>

              {/* Submit Button */}
              <button
                type="submit"
                className="bg-orange-600 text-white w-full p-3 rounded"
              >
                SUBMIT
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default Footer;
