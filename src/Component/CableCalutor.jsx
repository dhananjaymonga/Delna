import React from "react";
import { useState } from "react";

const CableSizeConverter = () => {
  const [current, setCurrent] = useState(10);
  const [voltage, setVoltage] = useState(230);
  const [length, setLength] = useState(10);
  const [size, setSize] = useState(null);

  const calculateSize = () => {
    // Basic formula for voltage drop consideration (simplified)
    const resistancePerMeter = 0.017; // Example value for copper wire (ohm/m)
    const voltageDrop = (current * length * resistancePerMeter) / 1000;
    const recommendedSize = Math.max(1.5, (current * length) / (voltage - voltageDrop));
    setSize(recommendedSize.toFixed(2));
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-6">
      <div className="max-w-md w-full bg-white p-6 rounded-xl shadow-lg">
        <h2 className="text-2xl font-bold text-center text-gray-800 mb-4">Cable Size Converter</h2>
        <div className="space-y-4">
          <div>
            <label className="block text-gray-700 font-medium">Current (A)</label>
            <input
              type="number"
              value={current}
              onChange={(e) => setCurrent(e.target.value)}
              className="w-full p-2 border rounded"
            />
          </div>
          <div>
            <label className="block text-gray-700 font-medium">Voltage (V)</label>
            <input
              type="number"
              value={voltage}
              onChange={(e) => setVoltage(e.target.value)}
              className="w-full p-2 border rounded"
            />
          </div>
          <div>
            <label className="block text-gray-700 font-medium">Cable Length (m)</label>
            <input
              type="number"
              value={length}
              onChange={(e) => setLength(e.target.value)}
              className="w-full p-2 border rounded"
            />
          </div>
          <button
            onClick={calculateSize}
            className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition"
          >
            Calculate
          </button>
          {size && (
            <div className="mt-4 text-center text-lg font-semibold text-gray-700">
              Recommended Cable Size: <span className="text-blue-600">{size} mm²</span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default CableSizeConverter;