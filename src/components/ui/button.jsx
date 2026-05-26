import React from "react";

export default function YellowButton({ name = "", children, type = "button", className = "", onClick, disabled }) {
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`w-full text-[#2a3572] font-medium text-center px-3 py-3 text-[1em] md:text-[1em] transition rounded-lg border border-[#aaaaaa]/70 bg-[#fce042] ${className} ${disabled ? 'opacity-50 cursor-not-allowed' : ''}`}
    >
      {children ?? name}
    </button>
  );
}
