import React from "react";
import { Link } from "react-router-dom";

export default function Footer() {
  const pageLinks = [
    { name: "Home", link: "/" },
    { name: "About", link: "/about" },
    { name: "Universities", link: "/" },
  ];

  return (
    <footer className="bg-[#1a2250] text-white">
      <div className="grid w-full gap-10 px-4 py-10 mx-auto max-w-7xl sm:px-6 lg:grid-cols-4 lg:px-8">
        <div className="space-y-4">
          <p className="text-2xl font-semibold">Nextgen</p>
          <p className="max-w-sm text-sm leading-6 text-white/80">
            Find the right university, course, and mentor with guided support
            for your study journey.
          </p>
        </div>

        <div>
          <h3 className="mb-4 text-lg font-semibold">Pages</h3>
          <ul className="space-y-3 text-sm text-white/80">
            {pageLinks.map((item) => (
              <li key={item.name}>
                <Link
                  to={item.link}
                  className="transition hover:text-[#facc42]"
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="mb-4 text-lg font-semibold">Location</h3>
          <div className="space-y-3 text-sm leading-6 text-white/80">
            <p
              className="transition hover:text-[#facc42] block"
            >
              <p>Nexgen Education</p>
              <p>Chttipadi PO</p>
              <p>Malappuram DT</p>
              <p>Kerala, India</p>
              <p>Pin. 676319</p>
            </p>
          </div>
        </div>

        <div>
          <h3 className="mb-4 text-lg font-semibold">Contact</h3>
          <div className="space-y-3 text-sm leading-6 text-white/80">
            <p>
              <span className="font-semibold text-white">Contact:</span>{" "}
              <a href="tel:+918891788828" className="transition hover:text-[#facc42]">
                8891788828
              </a>
            </p>
            <p>
              <span className="font-semibold text-white">WhatsApp:</span>{" "}
              <a
                href="https://wa.me/918891788828"
                target="_blank"
                rel="noopener noreferrer"
                className="transition hover:text-[#facc42]"
              >
                8891788828
              </a>
            </p>
            <p>
              <span className="font-semibold text-white">Email:</span>{" "}
              <a
                href="mailto:nexgeneduind@gmail.com"
                className="transition hover:text-[#facc42]"
              >
                nexgeneduind@gmail.com
              </a>
            </p>
          </div>
        </div>
      </div>

      <div className="px-4 py-4 text-sm text-center border-t border-white/10 text-white/70 sm:px-6 lg:px-8">
        © 2026 Nextgen. All rights reserved.
      </div>
    </footer>
  );
}
