"use client";
import { useEffect, useRef, useState } from "react";

const TOTAL = 25;

export default function Car360() {
  const [idx, setIdx] = useState(0);
  const startX = useRef(0);
  const isDragging = useRef(false);

  useEffect(() => {
    for (let i = 1; i <= TOTAL; i++) {
      const img = new Image();
      img.src = `/car_360/car_${String(i).padStart(2, "0")}.jpg`;
    }
  }, []);

  const handleMove = (x: number) => {
    if (!isDragging.current) return;
    const delta = x - startX.current;
    if (Math.abs(delta) < 15) return;

    requestAnimationFrame(() => {
      setIdx((prev) => (prev + (delta > 0 ? -1 : 1) + TOTAL) % TOTAL);
    });
    startX.current = x;
  };

  return (
    <div
      className="flex justify-center w-full cursor-grab active:cursor-grabbing"
      onMouseDown={(e) => { isDragging.current = true; startX.current = e.clientX; }}
      onMouseUp={() => (isDragging.current = false)}
      onMouseLeave={() => (isDragging.current = false)}
      onMouseMove={(e) => handleMove(e.clientX)}
      onTouchStart={(e) => { isDragging.current = true; startX.current = e.touches[0].clientX; }}
      onTouchEnd={() => (isDragging.current = false)}
      onTouchMove={(e) => handleMove(e.touches[0].clientX)}
    >
      <img
        src={`/car_360/car_${String(idx + 1).padStart(2, "0")}.jpg`}
        alt="360 view"
        width={700}
        height={700}
        className="pointer-events-none select-none object-contain"
        draggable={false}
      />
    </div>
  );
}