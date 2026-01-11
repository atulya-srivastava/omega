"use client";
import { useState } from "react";

const images = [
  "/carcarousel/car1.png",
  "/carcarousel/car2.png",
  "/carcarousel/car3.png",
  "/carcarousel/car4.png",
];

export default function CarImageCarousel() {
  const [current, setCurrent] = useState(0);

  const prevSlide = () => {
    setCurrent((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrent((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="relative w-full overflow-hidden rounded-2xl bg-gray-100">
      
      <div className="relative h-105 w-full">
        <img
          src={images[current]}
          alt="Car image"
          className="h-full w-full object-contain transition-all duration-500"
        />
      </div>

      <button
        onClick={prevSlide}
        className="absolute left-3 top-1/2 z-10 -translate-y-1/2 rounded-full bg-black/40 p-2 text-white hover:bg-black/60"
      >
        ‹
      </button>
      
      <button
        onClick={nextSlide}
        className="absolute right-3 top-1/2 z-10 -translate-y-1/2 rounded-full bg-black/40 p-2 text-white hover:bg-black/60"
      >
        ›
      </button>

      <div className="absolute bottom-3 left-1/2 z-10 flex -translate-x-1/2 gap-2">
        {images.map((_, index) => (
          <div
            key={index}
            onClick={() => setCurrent(index)}
            className={`h-2 w-2 cursor-pointer rounded-full ${
              index === current ? "bg-white" : "bg-white/40"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
