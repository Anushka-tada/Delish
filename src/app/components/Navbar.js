"use client";
import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { IconUser } from "@tabler/icons-react";
import { useSelector } from "react-redux";

const Navbar = () => {
  const router = useRouter();
  const offcanvasRef = useRef(null);
  const offcanvasInstanceRef = useRef(null);

  const navArr = [
    { name: "Home",     link: "/"         },
    { name: "Our Team", link: "/our-team" },
    { name: "About",    link: "/about-us" },
    { name: "Booking",  link: "/booking"  },
    { name: "Contact",  link: "/contact"  },
  ];

  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Bootstrap ka Offcanvas JS instance ek baar hi banayenge, taaki hum khud control kar sakein ki kab close ho
  useEffect(() => {
    let bootstrap;
    if (typeof window !== "undefined") {
      bootstrap = require("bootstrap");
      if (offcanvasRef.current) {
        offcanvasInstanceRef.current = new bootstrap.Offcanvas(offcanvasRef.current);
      }
    }
  }, []);

  const { isAuthenticated, user } = useSelector((state) => state.auth);

  // Navigation + close offcanvas ko properly sequence karne ke liye ye function banaya
  const handleMobileNavigate = (link) => {
    router.push(link);
    // Navigation trigger hone ke turant baad offcanvas close karo,
    // taaki Bootstrap ka dismiss beech me navigation ko cancel na kare
    setTimeout(() => {
      offcanvasInstanceRef.current?.hide();
    }, 100);
  };

  return (
    <>
      {/* ── Navbar ─────────────────────────────────────── */}
      <nav
        className={`navbar navbar-expand-lg nav-outer p-2 px-md-4 position-fixed top-0 w-100 ${
          scrolled ? "nav-outer-scroll" : ""
        }`}
      >
        <div className="container-fluid d-flex justify-content-between align-items-center">

          {/* Logo */}
          <a className="navbar-brand" href="/">
            <img src="/assets/logo.png" alt="Logo" className="nav-logo" />
          </a>

          {/* Hamburger */}
          <button
            className="navbar-toggler border-0 text-white"
            type="button"
            data-bs-toggle="offcanvas"
            data-bs-target="#offcanvasNav"
            aria-controls="offcanvasNav"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          {/* Desktop Nav Links */}
          <div className="collapse navbar-collapse d-none d-lg-block">
            <ul className="navbar-nav ms-auto me-auto mb-0 d-flex gap-4 align-items-center">
              {navArr.map((v, i) => (
                <li key={i} className="nav-item">
                  <Link
                    className="nav-link text-white"
                    href={v.link}
                    style={{ textDecoration: "none" }}
                  >
                    {v.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Desktop Right — Book + Login */}
          <div className="d-none d-lg-flex align-items-center gap-3">

            {/* Login icon button */}
            <button
              className="navBtn px-3 d-flex justify-content-center gap-2 align-items-center"
              style={{ background: "transparent" }}
              onClick={() =>
                router.push(isAuthenticated ? "/profile" : "/login")
              }
              aria-label=""
            >
              <IconUser size={18} stroke={1.8} />
              <span>
                {isAuthenticated ? "PROFILE" : "LOGIN"}
              </span>
            </button>

            {/* Book a Table */}
            <div
              className="navBtn px-3 d-flex justify-content-center gap-3 align-items-center"
              style={{ cursor: "pointer", backgroundColor: "red" }}
              onClick={() => router.push("/booking")}
            >
              <p className="mb-0">Book A Table</p>
              <img src="/assets/white_arrow.png" alt="arrow" />
            </div>

          </div>
        </div>
      </nav>

      {/* ── Offcanvas Mobile Menu ───────────────────────── */}
      <div
        ref={offcanvasRef}
        className="offcanvas offcanvas-end"
        style={{ zIndex: "99" }}
        tabIndex="-1"
        id="offcanvasNav"
        aria-labelledby="offcanvasNavLabel"
      >
        <div className="offcanvas-header">
          <h5 className="offcanvas-title" id="offcanvasNavLabel">Menu</h5>
          <button
            type="button"
            className="btn-close"
            onClick={() => offcanvasInstanceRef.current?.hide()}
            aria-label="Close"
          />
        </div>
        <div className="offcanvas-body">
          <ul className="navbar-nav">
            {navArr.map((v, i) => (
              <li key={i} className="nav-item">
                <a
                  onClick={(e) => {
                    e.preventDefault();
                    handleMobileNavigate(v.link);
                  }}
                  href={v.link}
                  className="nav-link"
                  style={{
                    textDecoration: "none",
                    color: "var(--secondary-color)",
                    fontWeight: 500,
                    fontSize: "18px",
                    cursor: "pointer",
                  }}
                >
                  {v.name}
                </a>
              </li>
            ))}

            {/* Login in mobile menu */}
            <li className="nav-item mt-2">
              <button
                className="navBtn px-3 d-flex justify-content-center gap-2 align-items-center"
                style={{ background: "transparent" }}
                onClick={() =>
                  handleMobileNavigate(isAuthenticated ? "/profile" : "/login")
                }
                aria-label=""
              >
                <IconUser size={18} stroke={1.8} />
                <span>
                  {isAuthenticated ? "PROFILE" : "LOGIN"}
                </span>
              </button>
            </li>

            <li className="nav-item mt-2">
              {/* Book a Table */}
              <div
                className="navBtn px-3 d-flex justify-content-center gap-3 align-items-center"
                style={{ cursor: "pointer", backgroundColor: "red" }}
                onClick={() => handleMobileNavigate("/booking")}
              >
                <p className="mb-0">Book A Table</p>
                <img src="/assets/white_arrow.png" alt="arrow" />
              </div>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Navbar;