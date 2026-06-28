'use client'
import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from 'next/image';

const BookingSuccessModal = ({ show, onClose, bookingDetails }) => {
  return (
    <AnimatePresence>
      {show && (
        <motion.div
          className="booking-success-overlay"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          onClick={onClose}
        >
          <motion.div
            className="booking-success-modal"
            initial={{ opacity: 0, scale: 0.7, y: 40 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.7, y: 40 }}
            transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Animated check icon */}
            <div className="booking-success-icon-wrap">
             <img src="/assets/success.gif" style={{width:"70px" }}/>
            </div>

            <motion.h3
              className="booking-success-title"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.65, duration: 0.5 }}
            >
              Table Booked Successfully!
            </motion.h3>

            <motion.p
              className="booking-success-text"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.75, duration: 0.5 }}
            >
              Thank you{bookingDetails?.name ? `, ${bookingDetails.name}` : ""}! Your reservation
              {bookingDetails?.date && bookingDetails?.time
                ? ` for ${bookingDetails.date} at ${bookingDetails.time}`
                : ""}{" "}
              has been confirmed. We can't wait to host you.
            </motion.p>

            {bookingDetails?.guests && (
              <motion.div
                className="booking-success-details"
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.85, duration: 0.5 }}
              >
                <div className="booking-success-chip">
                  Guests: <span>{bookingDetails.guests}</span>
                </div>
              </motion.div>
            )}

            <motion.button
              className="booking-success-btn"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.95, duration: 0.5 }}
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
              onClick={onClose}
            >
              Done
            </motion.button>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default BookingSuccessModal;