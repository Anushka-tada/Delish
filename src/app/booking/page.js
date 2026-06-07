// import React from "react";
// import Navbar from "../components/Navbar";
// import Footer from "../components/Footer";

// const page = () => {
//   return (
//     <>
//       <Navbar />

//       <div className="booking-herosection d-flex align-items-center justify-content-center">
//         <div className="booking-herosection-text d-flex flex-column align-items-center justify-content-center">
//           <h1 className="text-white">BOOK A TABLE</h1>
//           <p className="text-white">HOME / BOOK A TABLE</p>
//         </div>
//       </div>

//       <div className="booking-section d-flex align-items-center justify-content-center pb-5 pt-4">
//         <div className="booking-form p-5 mt-5" style={{ borderRadius: "5px" }}>
//           <h3 className="text-white text-center">Make Reservation</h3>

//           <form>
//             <div className="row mt-4">
//               <div className="col-4">
//                 <label>Number of Guest*</label>
//                 <input type="number" className="w-100 mt-2 mb-3"></input>
//               </div>
//               <div className="col-4">
//                 <label>Select date*</label>
//                 <input type="date" className="w-100 mt-2 mb-3"></input>
//               </div>
//               <div className="col-4">
//                 <label>Select Time*</label>
//                 <input type="time" className="w-100 mt-2 mb-3"></input>
//               </div>
//             </div>

//             <div className="row mt-4">
//               <div className="col-4">
//                 <label>Your Name*</label>
//                 <input type="text" className="w-100 mt-2 mb-3"></input>
//               </div>
//               <div className="col-4">
//                 <label>Email Address*</label>
//                 <input type="text" className="w-100 mt-2 mb-3"></input>
//               </div>
//               <div className="col-4">
//                 <label>Phone NUmber*</label>
//                 <input type="text" className="w-100 mt-2 mb-3"></input>
//               </div>
//             </div>

//             <div className="row mt-4">
//               <div className="col-12">
//                 <label>Type Your Special Message</label>
//                 <textarea
//                   rows={3}
//                   type="text"
//                   className="w-100 mt-2 mb-3"
//                 ></textarea>
//               </div>
//             </div>

//             <button className="gap-3 px-5 ">
//               Book A Table <img src="/assets/white_arrow.png" alt="arrow" />
//             </button>
//           </form>
//         </div>
//       </div>

//       <div className="container py-5">
// <div className="row justify-content-center align-items-center">
//             <div className="col-5">
//              <img src="/assets/resto_time.jpg" className="img-fluid "></img>
//           </div>
//           <div className="col-5">
//             <div className="p-4 mb-4 w-fit" style={{border:"1px solid #e8e8e8", width:"fit-content", boxShadow:"rgba(0, 0, 0, 0.1) 0px 4px 12px"}}>
//             <h4>
//               Opening Hours
//             </h4>
//              <p className="para mb-1">Breakfast: 9Am – 11Am </p>
//             <p className="para mb-1">Lunch: 12Pm – 3Pm  </p>
//             <p className="para">Diner: 6Pm – 8pm (Last Order At 8:00Pm)</p>
//             </div>

//             <div className="p-4 mb-4" style={{border:"1px solid #e8e8e8" , width:"fit-content" , boxShadow:"rgba(0, 0, 0, 0.1) 0px 4px 12px"}}>
//             <h4>
//              Visit Our Restaurant
//             </h4>
//             <p className="para mb-1">Eight avenue 487, NY, </p>
//             <p className="para">T. +12 344 0567899 M. fidalgo@example.com</p>
//             </div>
//           </div>
//         </div>
//       </div>

//       <Footer />
//     </>
//   );
// };

// export default page;


'use client'
import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { motion } from "framer-motion";

// ─────────────────────────────────────────────────────────────────────
// Viewport configs
// ─────────────────────────────────────────────────────────────────────
const VP      = { once: true, amount: 0.25 }
const VP_SLOW = { once: true, amount: 0.35 }

// ─────────────────────────────────────────────────────────────────────
// Variants
// ─────────────────────────────────────────────────────────────────────
const slideLeft = {
  hidden:  { opacity: 0, x: -80 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.9, ease: [0.22, 1, 0.36, 1] } },
}

const slideRight = {
  hidden:  { opacity: 0, x: 80 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.9, ease: [0.22, 1, 0.36, 1] } },
}

const staggerWrap = {
  hidden:  {},
  visible: { transition: { staggerChildren: 0.15, delayChildren: 0.05 } },
}

const staggerCard = {
  hidden:  { opacity: 0, y: 40, scale: 0.97 },
  visible: { opacity: 1, y: 0,  scale: 1,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
}

// ─────────────────────────────────────────────────────────────────────
// Page
// ─────────────────────────────────────────────────────────────────────
const page = () => {
  return (
    <>
      <Navbar />

      {/* ════════════════════════════════════════════════
          HERO — page load staggered entrance
      ════════════════════════════════════════════════ */}
       <div className="about-hero booking-herosection d-flex align-items-center justify-content-center">
            <div className="booking-herosection-text d-flex flex-column align-items-center justify-content-center">
              <motion.h1
                className="text-white"
                initial={{ opacity: 0, y: 50, filter: 'blur(10px)' }}
                animate={{ opacity: 1, y: 0,  filter: 'blur(0px)' }}
                transition={{ duration: 0.85, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
              >BOOK A TABLE
              </motion.h1>
    
              {/* Breadcrumb line expands from center */}
              <motion.div
                className="about-hero-divider"
                initial={{ scaleX: 0, opacity: 0 }}
                animate={{ scaleX: 1, opacity: 1 }}
                transition={{ duration: 0.7, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
              />
    
              <motion.p
                         className="text-white contact-hero-breadcrumb"
                         initial={{ opacity: 0, y: 16 }}
                         animate={{ opacity: 1, y: 0  }}
                         transition={{ duration: 0.6, delay: 0.65, ease: [0.22, 1, 0.36, 1] }}
                       >
                         HOME / <span className="contact-hero-crumb-active">BOOKING</span>
                       </motion.p>
             
            </div>
          </div>

      {/* ════════════════════════════════════════════════
          BOOKING FORM — slides up from below on load
          Form markup is 100% original — zero changes
      ════════════════════════════════════════════════ */}
      <div className="booking-section d-flex align-items-center justify-content-center pb-5 pt-4">
        <motion.div
          className="booking-form p-5 mt-5"
          style={{ borderRadius: "5px" }}
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0  }}
          transition={{ duration: 0.9, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}
        >
          <h3 className="text-white text-center">Make Reservation</h3>

          <form>
            <div className="row mt-4">
              <div className="col-4">
                <label>Number of Guest*</label>
                <input type="number" className="w-100 mt-2 mb-3"></input>
              </div>
              <div className="col-4">
                <label>Select date*</label>
                <input type="date" className="w-100 mt-2 mb-3"></input>
              </div>
              <div className="col-4">
                <label>Select Time*</label>
                <input type="time" className="w-100 mt-2 mb-3"></input>
              </div>
            </div>

            <div className="row mt-4">
              <div className="col-4">
                <label>Your Name*</label>
                <input type="text" className="w-100 mt-2 mb-3"></input>
              </div>
              <div className="col-4">
                <label>Email Address*</label>
                <input type="text" className="w-100 mt-2 mb-3"></input>
              </div>
              <div className="col-4">
                <label>Phone NUmber*</label>
                <input type="text" className="w-100 mt-2 mb-3"></input>
              </div>
            </div>

            <div className="row mt-4">
              <div className="col-12">
                <label>Type Your Special Message</label>
                <textarea
                  rows={3}
                  type="text"
                  className="w-100 mt-2 mb-3"
                ></textarea>
              </div>
            </div>

            <button className="gap-3 px-5">
              Book A Table <img src="/assets/white_arrow.png" alt="arrow" />
            </button>
          </form>
        </motion.div>
      </div>

      {/* ════════════════════════════════════════════════
          INFO SECTION — image slides left, cards slide right
          each card staggers in one by one
      ════════════════════════════════════════════════ */}
      <div className="container py-5">
        <div className="row justify-content-center align-items-center">

          {/* Image */}
          <motion.div
            className="col-5"
            variants={slideLeft}
            initial="hidden"
            whileInView="visible"
            viewport={VP}
          >
            <motion.img
              src="/assets/resto_time.jpg"
              className="img-fluid"
              whileHover={{ scale: 1.03 }}
              transition={{ duration: 0.5 }}
            />
          </motion.div>

          {/* Info cards */}
          <motion.div
            className="col-5"
            variants={staggerWrap}
            initial="hidden"
            whileInView="visible"
            viewport={VP}
          >

            {/* Opening Hours card */}
            <motion.div
              className="p-4 mb-4"
              style={{
                border: "1px solid #e8e8e8",
                width: "fit-content",
                boxShadow: "rgba(0, 0, 0, 0.1) 0px 4px 12px",
              }}
              variants={staggerCard}
              whileHover={{
                y: -5,
                boxShadow: "0 16px 40px rgba(203,58,26,0.10)",
                borderColor: "#f5c5bc",
              }}
              transition={{ type: "spring", stiffness: 300, damping: 22 }}
            >
              {/* Red accent bar animates in with the card */}
              <motion.div
                className="booking-card-bar"
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={VP_SLOW}
                transition={{ duration: 0.5, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
              />
              <h4 className="mt-2">Opening Hours</h4>
              <p className="para mb-1">Breakfast: 9Am – 11Am</p>
              <p className="para mb-1">Lunch: 12Pm – 3Pm</p>
              <p className="para">Dinner: 6Pm – 8Pm (Last Order At 8:00Pm)</p>
            </motion.div>

            {/* Visit card */}
            <motion.div
              className="p-4 mb-4"
              style={{
                border: "1px solid #e8e8e8",
                width: "fit-content",
                boxShadow: "rgba(0, 0, 0, 0.1) 0px 4px 12px",
              }}
              variants={staggerCard}
              whileHover={{
                y: -5,
                boxShadow: "0 16px 40px rgba(203,58,26,0.10)",
                borderColor: "#f5c5bc",
              }}
              transition={{ type: "spring", stiffness: 300, damping: 22 }}
            >
              <motion.div
                className="booking-card-bar"
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={VP_SLOW}
                transition={{ duration: 0.5, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}
              />
              <h4 className="mt-2">Visit Our Restaurant</h4>
              <p className="para mb-1">Eight avenue 487, NY,</p>
              <p className="para">T. +12 344 0567899 M. fidalgo@example.com</p>
            </motion.div>

          </motion.div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default page;