"use client"
import { useState } from "react";
import Slider from "./Slider";

const RATE_PER_INVITE_PER_HOUR = 2;

export default function EmiCalculator() {
  const [invites, setInvites] = useState<number>(100);
  const [duration, setDuration] = useState<number>(4);

  const price: number = invites * duration * RATE_PER_INVITE_PER_HOUR;

  return (
    <div className="w-90 rounded-xl border border-gray-200 bg-white p-6 shadow-sm">

      <h2 className="mb-4 text-lg font-bold text-purple-900">
        Price Calculator
      </h2>


      <Slider
        label="Number of Invites"
        min={10}
        max={1000}
        value={invites}
        onChange={setInvites}
        unit="invites"
      />

      <Slider
        label="Duration of Event"
        min={1}
        max={24}
        value={duration}
        onChange={setDuration}
        unit="hours"
      />

      <div className="mt-6 rounded-lg bg-purple-50 p-4 text-center">
        <p className="text-sm text-gray-600">Estimated Price</p>
        <p className="text-2xl font-bold text-purple-900">
          ₹{price.toLocaleString()}
        </p>
      </div>
    </div>
  );
};

