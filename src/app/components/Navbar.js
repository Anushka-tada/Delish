
"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";

const Navbar = () => {
  const navArr = [
    { name: "Home", link: "/" },
    { name: "Our Team", link: "/our-team" },
    { name: "About", link: "/about-us" },
    { name: "Booking", link: "/booking" },
    { name: "Contact", link: "/contact" },
  ];

    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Navbar */}
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

          {/* Hamburger Menu for Mobile */}
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

          {/* Right Button (Desktop only) */}
          <div className="navBtn px-3 d-none d-lg-flex justify-content-center gap-3 align-items-center" >
            <p className="mb-0">Book A Table</p>
            <img src="/assets/white_arrow.png" alt="arrow" />
          </div>
        </div>
      </nav>

      {/* Offcanvas Menu for Mobile */}
      <div
        className="offcanvas offcanvas-end " style={{zIndex:"99"}}
        tabIndex="-1"
        id="offcanvasNav"
        aria-labelledby="offcanvasNavLabel"
      >
        <div className="offcanvas-header">
          <h5 className="offcanvas-title" id="offcanvasNavLabel">
            Menu
          </h5>
          <button
            type="button"
            className="btn-close"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
          ></button>
        </div>
        <div className="offcanvas-body">
          <ul className="navbar-nav">
            {navArr.map((v, i) => (
              <li key={i} className="nav-item">
                <Link
                  href={v.link}
                  className="nav-link"
                  data-bs-dismiss="offcanvas" // closes when clicked
                  style={{
                    textDecoration: "none",
                    color: "var(--secondary-color)",
                    fontWeight: 500,
                    fontSize: "18px",
                  }}
                >
                  {v.name}
                </Link>
              </li>
            ))}
            <li className="mt-3">
              <div
                className="navBtn px-3 d-flex justify-content-center gap-3 align-items-center"
                data-bs-dismiss="offcanvas"
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
