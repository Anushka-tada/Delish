"use client";

import React from "react";
import { motion } from "framer-motion";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const chefs = [
  {
    img: "https://img.freepik.com/free-photo/portrait-confident-male-chef-kitchen_23-2147863584.jpg?semt=ais_hybrid&w=740&q=80",
    name: "Naman Kumar",
    post: "Executive Chef",
  },
  {
    img: "https://thumbs.dreamstime.com/b/female-chef-14984977.jpg",
    name: "Shefali Mehta",
    post: "Head of Culinary Innovation",
  },
  {
    img: "https://www.shutterstock.com/image-photo/asian-indian-young-male-chef-600nw-2488047379.jpg",
    name: "Raghav Singh",
    post: "Seafood Specialist",
  },
  {
    img: "https://plus.unsplash.com/premium_photo-1661778091956-15dbe6e47442?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Y2hlZnxlbnwwfHwwfHx8MA%3D%3D&fm=jpg&q=60&w=3000",
    name: "Ananya Sharma",
    post: "Pastry & Dessert Chef",
  },
  {
    img: "https://img.freepik.com/free-photo/portrait-confident-male-chef-kitchen_23-2147863584.jpg?semt=ais_hybrid&w=740&q=80",
    name: "Naman Kumar",
    post: "Executive Chef",
  },
  {
    img: "https://thumbs.dreamstime.com/b/female-chef-14984977.jpg",
    name: "Shefali Mehta",
    post: "Head of Culinary Innovation",
  },
];

const fadeUp = {
  hidden: {
    opacity: 0,
    y: 80,
    filter: "blur(10px)",
  },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: {
      duration: 0.8,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const staggerContainer = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const cardVariant = {
  hidden: {
    opacity: 0,
    y: 100,
    scale: 0.9,
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.8,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const page = () => {
  return (
    <>
      <Navbar />

      {/* Hero Section */}

         <div className="about-hero booking-herosection d-flex align-items-center justify-content-center">
              <div className="booking-herosection-text d-flex flex-column align-items-center justify-content-center">
                <motion.h1
                  className="text-white"
                  initial={{ opacity: 0, y: 50, filter: 'blur(10px)' }}
                  animate={{ opacity: 1, y: 0,  filter: 'blur(0px)' }}
                  transition={{ duration: 0.85, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
                >
                 OUR CHEFS
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
                           HOME / <span className="contact-hero-crumb-active">OUR CHEFS</span>
                         </motion.p>
               
              </div>
            </div>

      {/* Team Section */}

      <div className="our-team2">
        <div className="container py-5 my-5">
          <div className="row align-items-center">
            <div>
              <motion.h6
                className="subtitle"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
              >
                Our Team
              </motion.h6>

              <motion.h2
                className="text-uppercase mb-4 fw-bold text-center"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
              >
                Our Popular Chefs
              </motion.h2>

              <motion.div
                className="chefs row"
                variants={staggerContainer}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                {chefs.map((chef, index) => (
                  <motion.div
                    key={index}
                    className="d-flex col-lg-4 col-md-4 col-sm-6 col-12 p-3"
                    variants={cardVariant}
                    whileHover={{
                      y: -12,
                      transition: {
                        duration: 0.3,
                      },
                    }}
                  >
                    <motion.div
                      className="card text-white w-100 d-flex flex-column border-0 rounded-0 p-3 overflow-hidden"
                      style={{
                        backgroundColor: "rgb(241 241 241)",
                      }}
                      whileHover={{
                        boxShadow:
                          "0 25px 50px rgba(0,0,0,0.15)",
                      }}
                    >
                      <div
                        className="service-image overflow-hidden"
                        style={{
                          height: "82%",
                          maxHeight: "360px",
                        }}
                      >
                        <motion.img
                          src={chef.img}
                          className="card-img-top rounded-0"
                          alt={chef.name}
                          whileHover={{
                            scale: 1.08,
                          }}
                          transition={{
                            duration: 0.5,
                          }}
                        />
                      </div>

                      <div className="card-body d-flex flex-column p-0 pt-3">
                        <motion.h5
                          className="card-title fw-semibold text-black text-center text-uppercase"
                          initial={{
                            opacity: 0,
                            y: 20,
                          }}
                          whileInView={{
                            opacity: 1,
                            y: 0,
                          }}
                          viewport={{ once: true }}
                          transition={{
                            delay: 0.2,
                          }}
                        >
                          {chef.name}
                        </motion.h5>

                        <motion.p
                          className="card-text para text-center"
                          initial={{
                            opacity: 0,
                            y: 20,
                          }}
                          whileInView={{
                            opacity: 1,
                            y: 0,
                          }}
                          viewport={{ once: true }}
                          transition={{
                            delay: 0.3,
                          }}
                        >
                          {chef.post}
                        </motion.p>
                      </div>
                    </motion.div>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </div>
        </div>
      </div>

       {/* ════════════════════════════════════════════════
          CTA BANNER
      ════════════════════════════════════════════════ */}
      <motion.section
        className="cta-banner"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, amount: 0.35 }}
        transition={{ duration: 0.9 }}
      >
        <motion.div
          initial={{ y: 40, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.75, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
        >
          <h6 className="subtitle cta-subtitle">Reserve Now</h6>
          <h2 className="cta-heading">
            Ready to Experience<br />Something Extraordinary?
          </h2>
          <motion.button
            className="cta-btn"
            whileHover={{ scale: 1.06, backgroundColor: '#fff', color: '#CB3A1A' }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: 'spring', stiffness: 350, damping: 20 }}
          >
            Book Your Table Today
          </motion.button>
        </motion.div>
      </motion.section>

      <Footer />
    </>
  );
};

export default page;