import React from "react";
import { useState, useEffect } from "react";

export default function PopupImage() {
  const [showPopup, setShowPopup] = useState(false);
  const [randomImage, setRandomImage] = useState("");

  // List of images
  const images = [
    "/image/led.webp", // Image 1
    "image/light.webp", // Image 2
    "image/pipe.webp",
    "image/wires.webp", // Image 4
    "/image/top-view-circuit-board-repair.jpg", // Image 5
  ];

  // Show popup on page load & select a random image
  useEffect(() => {
    const randomIndex = Math.floor(Math.random() * images.length);
    setRandomImage(images[randomIndex]);
    setShowPopup(true);
  }, []);

  return (
    <>
      {/* Popup Overlay */}
      {showPopup && (
        <div className="fixed inset-0 bg-black bg-opacity-70 flex justify-center items-center z-50">
          <div className="relative bg-white p-4 rounded-lg shadow-lg max-w-sm">
            {/* Close Button */}
            <button
              className="absolute top-2 right-2 bg-red-500 text-white rounded-full w-6 h-6 flex items-center justify-center"
              onClick={() => setShowPopup(false)}
            >
              ×
            </button>
            {/* Random Popup Image */}
            <img src={randomImage} alt="Popup" className="rounded" />
          </div>
        </div>
      )}
    </>
  );
}
