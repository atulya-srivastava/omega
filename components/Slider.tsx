export type SliderProps = {
  label: string;
  min: number;
  max: number;
  value: number;
  onChange: (value: number) => void;
  unit?: string;
};

const Slider: React.FC<SliderProps> = ({
  label,
  min,
  max,
  value,
  onChange,
  unit
}) => {
  return (
    <div className="mb-6">
      <div className="mb-1 flex justify-between text-sm">
        <span className="font-medium text-gray-700">
          {label}
        </span>
        <span className="font-semibold text-purple-700">
          {value} {unit}
        </span>
      </div>

      <input
        type="range"
        min={min}
        max={max}
        value={value}
        onChange={(e) => onChange(Number(e.target.value))}
        className="w-full accent-purple-700"
      />

      <div className="mt-1 flex justify-between text-xs text-gray-400">
        <span>{min}</span>
        <span>{max}</span>
      </div>
    </div>
  );
};

export default Slider;
