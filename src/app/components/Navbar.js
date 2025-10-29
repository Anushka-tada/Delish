// // import React from 'react'
// // import Link from "next/link";

// // const Navbar = () => {

// //     const navArr = [
// //     {
// //       name: "Home",
// //       link: "/",
// //     },
// //     {
// //       name: "Shop",
// //       link: "/shop",
// //     },
// //     {
// //       name: "Our Team",
// //       link: "/",
// //     },
// //     {
// //       name: "About",
// //       link: "/about-us",
// //     },
// //     {
// //       name: "Blogs",
// //       link: "/blogs",
// //     },
// //      {
// //       name: "Contact",
// //       link: "/contact",
// //     },
    
// //   ];

// //   return (
// //     <div>
// //         <div className='nav-outer d-flex justify-content-between align-items-center p-3 px-5 position-fixed top-0 w-100'>
// //            <img src='/assets/logo.png' style={{height:"50px"}}></img>
            

// //              <ul
// //           className={`nav-links list-unstyled mb-0 d-flex gap-4`}
// //         >
// //           {navArr?.map((v, i) => {
// //             return (
// //               <li key={i}>
// //                 <Link style={{textDecoration:"none" , color:"white"} }
// //                   href={v?.link}
// //                  >
// //                   {v?.name}
// //                 </Link>
// //               </li>
// //             );
// //           })}
// //         </ul>

// //            <div className='navBtn px-3 d-flex justify-content-center gap-3 align-items-center'>
// //             <p className='mb-0'>Book A Table</p>
// //             <img src='/assets/white_arrow.png'></img>
// //            </div>
// //         </div>
      
// //     </div>
// //   )
// // }

// // export default Navbar


// "use client";
// import React, { useState } from "react";
// import Link from "next/link";
// import { Offcanvas, Button } from "react-bootstrap";

// const Navbar = () => {
//   const [show, setShow] = useState(false);

//   const handleClose = () => setShow(false);
//   const handleShow = () => setShow(true);

//   const navArr = [
//     { name: "Home", link: "/" },
//     { name: "Shop", link: "/shop" },
//     { name: "Our Team", link: "/" },
//     { name: "About", link: "/about-us" },
//     { name: "Blogs", link: "/blogs" },
//     { name: "Contact", link: "/contact" },
//   ];

//   return (
//     <div className="nav-outer d-flex justify-content-between align-items-center p-3 px-5 position-fixed top-0 w-100">
//       {/* Logo */}
//       <img src="/assets/logo.png" style={{ height: "50px" }} alt="Logo" />

//       {/* Nav Links (Hidden on small screens) */}
//       <ul className="nav-links list-unstyled mb-0 d-flex gap-4 d-none d-lg-flex">
//         {navArr.map((v, i) => (
//           <li key={i}>
//             <Link
//               style={{ textDecoration: "none", color: "white" }}
//               href={v.link}
//             >
//               {v.name}
//             </Link>
//           </li>
//         ))}
//       </ul>

//       {/* Right Side Button / Menu Icon */}
//       <div className="navBtn px-3 d-flex justify-content-center gap-3 align-items-center">
//         <p className="mb-0 d-none d-lg-block">Book A Table</p>
//         <img src="/assets/white_arrow.png" className="d-none d-lg-block" />

//         {/* Menu Button for Mobile */}
//         <Button
//           variant="outline-light"
//           className="d-lg-none"
//           onClick={handleShow}
//         >
//           ☰
//         </Button>
//       </div>

//       {/* Offcanvas Menu */}
//       <Offcanvas show={show} onHide={handleClose} placement="end">
//         <Offcanvas.Header closeButton>
//           <Offcanvas.Title>
//             <img src="/assets/logo.png" style={{ height: "40px" }} alt="Logo" />
//           </Offcanvas.Title>
//         </Offcanvas.Header>
//         <Offcanvas.Body>
//           <ul className="list-unstyled d-flex flex-column gap-3">
//             {navArr.map((v, i) => (
//               <li key={i}>
//                 <Link
//                   href={v.link}
//                   onClick={handleClose}
//                   style={{
//                     textDecoration: "none",
//                     color: "var(--secondary-color)",
//                     fontWeight: "500",
//                     fontSize: "18px",
//                   }}
//                 >
//                   {v.name}
//                 </Link>
//               </li>
//             ))}
//           </ul>
//         </Offcanvas.Body>
//       </Offcanvas>
//     </div>
//   );
// };

// export default Navbar;


"use client";
import React from "react";
import Link from "next/link";

const Navbar = () => {
  const navArr = [
    { name: "Home", link: "/" },
    { name: "Shop", link: "/shop" },
    { name: "Our Team", link: "/" },
    { name: "About", link: "/about-us" },
    { name: "Blogs", link: "/blogs" },
    { name: "Contact", link: "/contact" },
  ];

  return (
    <>
      {/* Navbar */}
      <nav className="navbar navbar-expand-lg nav-outer p-3 px-4 position-fixed top-0 w-100">
        <div className="container-fluid d-flex justify-content-between align-items-center">
          {/* Logo */}
          <a className="navbar-brand" href="/">
            <img src="/assets/logo.png" alt="Logo" style={{ height: "50px" }} />
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
            <ul className="navbar-nav ms-auto mb-0 d-flex gap-4 align-items-center">
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
          <div className="navBtn px-3 d-none d-lg-flex justify-content-center gap-3 align-items-center">
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
