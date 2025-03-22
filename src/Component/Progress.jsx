import * as React from "react";

export function Progress({ value, className }) {
  return (
    <div className={`relative w-full h-1.5 bg-gray-300 rounded-full overflow-hidden ${className}`}>
      <div
        className="h-full bg-blue-600 rounded-full transition-all duration-500 ease-linear"
        style={{ width: `${value}%` }}
      ></div>
    </div>
  );
}
