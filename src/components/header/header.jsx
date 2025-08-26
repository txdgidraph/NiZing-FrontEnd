"use client";

import { useState } from "react";
import Link from "next/link";
import "./header.css";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="navbar">
      <div className="logo">
        <svg viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
          <defs>
            <linearGradient id="g" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0" stopColor="#0BD791"></stop>
              <stop offset="1" stopColor="#1DF2AA"></stop>
            </linearGradient>
          </defs>
          <rect x="6" y="6" width="52" height="52" rx="10" fill="url(#g)" opacity=".15"></rect>
          <path d="M16 44 L32 20 L48 44" stroke="url(#g)" strokeWidth="4" fill="none" strokeLinecap="round"></path>
          <circle cx="32" cy="20" r="3" fill="#0BD791"></circle>
        </svg>
        <span className="brand">NiGeNje</span>
      </div>

      {/* Desktop menu */}
      <nav className={`nav-links ${isOpen ? "open" : ""}`}>
        <Link href="#">Home</Link>
        <Link href="#">Why Us</Link>
        <Link href="#">Products</Link>
        <Link href="#">Proof</Link>
        <Link href="#">Benchmarks</Link>
        <Link href="#">Security</Link>
        <Link href="#">Team</Link>
        <Link href="#">Contact</Link>
        <button className="btn">Request Pilot</button>
      </nav>

      {/* Hamburger for mobile */}
      <div
        className={`hamburger ${isOpen ? "active" : ""}`}
        onClick={() => setIsOpen(!isOpen)}
      >
        <span></span>
        <span></span>
        <span></span>
      </div>
    </header>
  );
}
