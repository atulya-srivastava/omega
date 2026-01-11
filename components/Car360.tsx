"use client";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";

const TOTAL_IMAGES = 25;
const SENSITIVITY = 20;

export default function Car360() {
  const [index, setIndex] = useState(0);
  const startX = useRef(0);
  const dragging = useRef(false);

  // preload images
  useEffect(() => {
    for (let i = 1; i <= TOTAL_IMAGES; i++) {
      const img = new window.Image();
      img.src = `/car/car_${String(i).padStart(2, "0")}.jpg`;
    }
  }, []);

  const updateIndex = (currentX: number) => {
    const delta = currentX - startX.current;
    if (Math.abs(delta) < SENSITIVITY) return;

   setIndex(prev => {
  const next = delta > 0 ? prev - 1 : prev + 1;
  return (next + TOTAL_IMAGES) % TOTAL_IMAGES;
});

    startX.current = currentX;
  };

  return (
    <div
      className="flex justify-center w-full h-full cursor-grab select-none"
      onMouseDown={(e) => {
        dragging.current = true;
        startX.current = e.clientX;
      }}
      onMouseUp={() => (dragging.current = false)}
      onMouseLeave={() => (dragging.current = false)}
      onMouseMove={(e) => {
        if (!dragging.current) return;
        updateIndex(e.clientX);
      }}
      onTouchStart={(e) => {
        dragging.current = true;
        startX.current = e.touches[0].clientX;
      }}
      onTouchEnd={() => (dragging.current = false)}
      onTouchMove={(e) => {
        if (!dragging.current) return;
        updateIndex(e.touches[0].clientX);
      }}
    >
      <Image
        src={`/car/car_${String(index + 1).padStart(2, "0")}.jpg`}
        alt="360 car view"
        width={700}
        height={700}
        className="pointer-events-none object-contain"
        priority
      />
    </div>
  );
}
