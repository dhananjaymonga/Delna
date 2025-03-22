import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

const slides = [
  { id: 1, title: "Our Legacy", description: "Committed to quality and innovation for over 30 years.", image: "/image/wires.webp" },
 
  { id: 2, title: "Our Vision", description: "Striving to be a global leader in wire and cable solutions.", image: "/image/pipe.webp" },
  { id: 1, title: "Our Legacy", description: "Committed to quality and innovation for over 30 years.", image: "/image/wires.webp" },

  { id: 2, title: "Our Vision", description: "Striving to be a global leader in wire and cable solutions.", image: "/image/pipe.webp" },
];

export default function Carousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    setProgress(0);
    let progressValue = 0;
    const progressInterval = setInterval(() => {
      progressValue += 2;
      if (progressValue > 100) {
        clearInterval(progressInterval);
        return;
      }
      setProgress(progressValue);
    }, 100);

    return () => clearInterval(progressInterval);
  }, [currentIndex]);

  useEffect(() => {
    const slideInterval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
    }, 5000);
    return () => clearInterval(slideInterval);
  }, []);

  return (
    <div className="relative w-full mx-auto overflow-hidden  shadow-lg ">
      {/* Slide Images (Full Screen Width with Space on Sides) */}
<h2 className="align-center text-center  text-4xl mb-3">Our Company

</h2>
      <div className="relative w-full flex items-center justify-center h-[65vh] px-4 md:px-16">
        {slides.map((slide, index) => (
          <motion.div
            key={slide.id}
            className="absolute w-full h-full flex flex-col items-center justify-center text-center bg-cover bg-center text-white p-6 "
            style={{
              backgroundImage: `url(${slide.image})`,
              display: index === currentIndex ? "flex" : "none",
              width: "100%",
            }}
            initial={{ opacity: 0 }}
            animate={{ opacity: index === currentIndex ? 1 : 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-2">{slide.title}</h2>
            <p className="text-lg md:text-xl">{slide.description}</p>
          </motion.div>
        ))}
      </div>

      {/* Navigation Buttons */}
      <button
        className="absolute top-1/2 left-6 transform -translate-y-1/2 bg-black bg-opacity-50 p-3 rounded-full text-white hover:bg-opacity-75 transition"
        onClick={() => setCurrentIndex((prevIndex) => (prevIndex - 1 + slides.length) % slides.length)}
      >
        <ChevronLeft size={32} />
      </button>

      <button
        className="absolute top-1/2 right-6 transform -translate-y-1/2 bg-black bg-opacity-50 p-3 rounded-full text-white hover:bg-opacity-75 transition"
        onClick={() => setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length)}
      >
        <ChevronRight size={32} />
      </button>

      {/* Xiaomi-Style Progress Bar (Only Active One Fills) */}
      <div className="absolute bottom-6 left-0 right-0 flex justify-center space-x-2">
        {slides.map((_, index) => (
          <div key={index} className="h-1 w-16 rounded-full bg-gray-300 overflow-hidden">
            <motion.div
              className="h-full bg-blue-600"
              style={{ width: `${index === currentIndex ? progress : 0}%` }}
              transition={{ duration: 0.1 }}
            />
          </div>
        ))}
      </div>
    </div>
    
  );
}
