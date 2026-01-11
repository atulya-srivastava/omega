"use client";
import { Loader2 } from "lucide-react";
import { useEffect, useRef, useState } from "react";

const TOTAL = 25;
const SENSITIVITY = 15;

export default function Car360() {
  const [idx, setIdx] = useState(0);
  const [imagesLoaded, setImagesLoaded] = useState(false);

  const startX = useRef(0);
  const isDragging = useRef(false);
  const loadedCount = useRef(0);
  const imageCache = useRef<HTMLImageElement[]>([]); 

  useEffect(() => {
    let isMounted = true;
    loadedCount.current = 0;

    for (let i = 1; i <= TOTAL; i++) {
      const img = new Image();
      img.src = `/car_360/car_${String(i).padStart(2, "0")}.jpg`;
      img.onload = () => {
        if (!isMounted) return;
        loadedCount.current++;
        if (loadedCount.current === TOTAL) {
          setImagesLoaded(true);
        }
      };
      img.onerror = () => {
        console.error(`Failed to load image ${i}`);
      };
      imageCache.current.push(img);
    }

    return () => {
      isMounted = false;
      imageCache.current = []; // Cleanup
    };
  }, []);

  const handleMove = (x: number) => {
    if (!isDragging.current || !imagesLoaded) return;

    const delta = x - startX.current;
    if (Math.abs(delta) < SENSITIVITY) return;

    setIdx(prev => (prev + (delta > 0 ? -1 : 1) + TOTAL) % TOTAL);
    startX.current = x;
  };

  const handleStart = (x: number) => {
    if (!imagesLoaded) return;
    isDragging.current = true;
    startX.current = x;
  };

  return (
    <div className="relative w-full flex items-center justify-center">
      {!imagesLoaded && (
        <div className="absolute inset-0 flex items-center justify-center z-10">
          <div className="text-center flex gap-2 items-center">
            <Loader2 className="animate-spin h-5 w-5" />
            <p>Loading 360° view...</p>
          </div>
        </div>
      )}

      <div
        className="relative w-full max-w-4xl cursor-grab active:cursor-grabbing select-none"
        onMouseDown={(e) => handleStart(e.clientX)}
        onMouseUp={() => (isDragging.current = false)}
        onMouseLeave={() => (isDragging.current = false)}
        onMouseMove={(e) => handleMove(e.clientX)}
        onTouchStart={(e) => handleStart(e.touches[0].clientX)}
        onTouchEnd={() => (isDragging.current = false)}
        onTouchMove={(e) => handleMove(e.touches[0].clientX)}
      >
        <img
          src={`/car_360/car_${String(idx + 1).padStart(2, "0")}.jpg`}
          alt="360 view"
          draggable={false}
          className="w-full h-auto"
          style={{ opacity: imagesLoaded ? 1 : 0 }}
        />
      </div>
      
    </div>
  );
}