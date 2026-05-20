import React from "react";

export default function YellowButton({ name = "", children, type = "button", className = "" }) {
  return (
    <button
      type={type}
      className={`w-full text-[#2a3572] font-medium text-center px-3 py-2 text-[1em] md:text-[1em] transition rounded-xl border border-[#aaaaaa] bg-[#edcf2e]/80 ${className}`}
    >
      {children ?? name}
    </button>
  );
}
