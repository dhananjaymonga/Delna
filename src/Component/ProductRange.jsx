import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Navbar from "./Navbar";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Autoplay } from "swiper/modules";

const productSlides = [
  { id: 1, name: "LEDBulb", category: "Lights", image: "/image/pipe.webp" },
  { id: 2, name: "FloodLight", category: "Lights", image: "/image/wires.webp" },
  { id: 3, name: "CopperWire", category: "Wires", image: "/image/multimeter-tapes-table.jpg" },
  { id: 4, name: "WaterPump", category: "Pumps", image: "/image/top-view-circuit-board-repair.jpg" },
  { id: 5, name: "CeilingFan", category: "Fans", image: "/image/different-electrical-tools-wooden-background-flat-lay.jpg" }
];
export function ProductRange() {
  const navigate = useNavigate();
  const handleProductClick = (category) => {
    navigate(`/products/${category}`);
  };

  return (
    <div className="bg-white  text-gray-900 ">
      <div className="max-w-6xl mx-auto py-10 px-4">
        <h2 className="text-3xl font-semibold text-center mb-6">Our Product Range</h2>
        {console.log("Swiper loaded")}
        <Swiper
          modules={[Pagination, Autoplay]}
          spaceBetween={20}
          slidesPerView={2}
          breakpoints={{
            640: { slidesPerView: 2 },
            768: { slidesPerView: 3 },
            1024: { slidesPerView: 4 },
          }}
          pagination={{ clickable: true }}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          className="rounded-lg overflow-hidden shadow-lg"
        >
          {productSlides.map((product) => (
            <SwiperSlide key={product.id} className="cursor-pointer" onClick={() => handleProductClick(product.category)}>
              <img src={product.image} alt={product.name} className="w-full h-48 object-cover rounded-lg shadow-md" />
              <h3 className="mt-2 text-lg font-semibold text-center">{product.name}</h3>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}