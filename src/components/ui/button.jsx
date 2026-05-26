import React from "react";

export default function YellowButton({ name = "", children, type = "button", className = "", onClick }) {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`w-full text-[#2a3572] font-medium text-center px-3 py-3 text-[1em] md:text-[1em] transition rounded-lg border border-[#aaaaaa]/70 bg-[#fce042] ${className}`}
    >
      {children ?? name}
    </button>
  );
}
