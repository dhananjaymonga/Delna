import React from "react";

const images = [
  "image/pipe.webp",
  "/image/wires.webp",
  "/image/wires.webp",
  "image/pipe.webp",
  "image/pipe.webp",
  "/image/wires.webp",
  "/image/wires.webp",
  "/image/multimeter-tapes-table.jpg",
  "/image/wires.webp",
  "image/different-electrical-tools-wooden-background-flat-lay.jpg",
  "/image/top-view-circuit-board-repair.jpg",
 
];

export default function BrandSlider() {
  return (
    <div className="w-full overflow-hidden bg-white relative mt-6">
      {/* Scrolling div */}
      <div className="flex w-[200%] animate-marquee gap-4">
        {images.concat(images).map((src, i) => (
          <img key={i} src={src} alt={`Image ${i}`} className="w-[180px] h-[12vh]  object-cover" />
        ))}
      </div>
    </div>
  );
}
