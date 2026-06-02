import React from "react";
import { Link } from "react-router-dom";

export default function ErrorPage() {
  return (
    <div className="flex flex-col items-center justify-center w-full min-h-screen text-6xl text-[#232f65]">
      <div>
          <p className="items-center text-4xl text-center">404</p>
          <p className="text-2xl">Page Not Found</p>
      </div>
        <Link className="mt-4 p-4 bg-[#232f65] text-[#fefefe] rounded-xl" to="/">Return to Home page</Link>
    </div>
  );
}
