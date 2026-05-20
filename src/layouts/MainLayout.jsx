import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function MainLayout() {
  return (
    <div className="overflow-hidden">
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
}
