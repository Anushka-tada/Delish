"use client";
import React, { useEffect, useState } from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import { motion } from "framer-motion";
import { useSelector } from "react-redux";
import { useRouter, useParams } from "next/navigation";
import Link from "next/link";
import {
  IconArrowLeft,
  IconCalendar,
  IconClock,
  IconUsers,
  IconPhone,
  IconMail,
  IconUser,
  IconMessage,
  IconChefHat,
} from "@tabler/icons-react";
import { getBookingByIdServ } from "../../../../services/booking.service";

// ─────────────────────────────────────────────────────────────────────
// Variants
// ─────────────────────────────────────────────────────────────────────
const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] },
  }),
};

const staggerWrap = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1, delayChildren: 0.05 } },
};

// ─────────────────────────────────────────────────────────────────────
// Status config
// ─────────────────────────────────────────────────────────────────────
const statusConfig = {
  pending: {
    bg: "#fff4e0",
    color: "#b45309",
    border: "#fbbf2440",
    label: "Pending",
    desc: "Your reservation is awaiting confirmation from our team.",
    icon: "⏳",
  },
  confirmed: {
    bg: "#ecfdf5",
    color: "#065f46",
    border: "#10b98130",
    label: "Confirmed",
    desc: "Your table is reserved! We look forward to seeing you.",
    icon: "✅",
  },
  cancelled: {
    bg: "#fef2f2",
    color: "#991b1b",
    border: "#ef444430",
    label: "Cancelled",
    desc: "This reservation has been cancelled.",
    icon: "❌",
  },
};

// ─────────────────────────────────────────────────────────────────────
// Detail Row
// ─────────────────────────────────────────────────────────────────────
const DetailRow = ({ icon, label, value, index }) => (
  <motion.div
    className="bd-detail-row"
    custom={index}
    variants={fadeUp}
  >
    <span className="bd-detail-icon">{icon}</span>
    <div className="bd-detail-text">
      <p className="bd-detail-label">{label}</p>
      <p className="bd-detail-value">{value || "—"}</p>
    </div>
  </motion.div>
);

// ─────────────────────────────────────────────────────────────────────
// Page
// ─────────────────────────────────────────────────────────────────────
export default function BookingDetailPage() {
  const router = useRouter();
  const params = useParams();
  const { id } = params;

  const { isAuthenticated } = useSelector((state) => state.auth);

  const [booking, setBooking] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Auth guard
  useEffect(() => {
    if (!isAuthenticated) {
      router.replace("/login");
    }
  }, [isAuthenticated, router]);

  // Fetch single booking
  useEffect(() => {
    if (!isAuthenticated || !id) return;
    const fetchBooking = async () => {
      try {
        setLoading(true);
        const res = await getBookingByIdServ(id);
        setBooking(res?.data?.booking || res?.data || null);
      } catch (err) {
        console.error(err);
        setError("Could not load booking details. Please go back and try again.");
      } finally {
        setLoading(false);
      }
    };
    fetchBooking();
  }, [isAuthenticated, id]);

  if (!isAuthenticated) return null;

  const formatDate = (dateStr) => {
    if (!dateStr) return "—";
    const d = new Date(dateStr);
    return d.toLocaleDateString("en-IN", {
      weekday: "long",
      day: "2-digit",
      month: "long",
      year: "numeric",
    });
  };

  const formatCreatedAt = (dateStr) => {
    if (!dateStr) return "—";
    const d = new Date(dateStr);
    return d.toLocaleString("en-IN", {
      day: "2-digit",
      month: "short",
      year: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    });
  };

  const status = statusConfig[booking?.status] || statusConfig.pending;

  return (
    <>
      <Navbar />

      {/* ── Hero ── */}
      <div
        className="about-hero booking-herosection d-flex align-items-center justify-content-center">
        <div className="booking-herosection-text d-flex flex-column align-items-center justify-content-center">
          <motion.h1
            className="text-white"
            initial={{ opacity: 0, y: 50, filter: "blur(10px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 0.85, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          >
            Booking Details
          </motion.h1>

          <motion.div
            className="about-hero-divider"
            initial={{ scaleX: 0, opacity: 0 }}
            animate={{ scaleX: 1, opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
          />

          <motion.p
            className="text-white contact-hero-breadcrumb"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.65, ease: [0.22, 1, 0.36, 1] }}
          >
            HOME / <Link href="/profile" className="contact-hero-crumb-active" style={{ textDecoration: "none" }}>PROFILE</Link> /{" "}
            <span className="contact-hero-crumb-active">BOOKING</span>
          </motion.p>
        </div>
      </div>

      {/* ── Main Content ── */}
      <div className="bd-page-wrapper py-5">
        <div className="container">

          {/* Back link */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          >
            <Link href="/profile" className="bd-back-link">
              <IconArrowLeft size={16} stroke={2} />
              Back to Profile
            </Link>
          </motion.div>

          {/* Loading */}
          {loading && (
            <div className="bd-state-box">
              <div className="profile-spinner" />
              <p className="profile-state-text">Loading booking details...</p>
            </div>
          )}

          {/* Error */}
          {!loading && error && (
            <div className="bd-state-box">
              <p className="profile-state-text" style={{ color: "#CB3A1A" }}>{error}</p>
              <Link href="/profile" className="profile-new-booking-btn mt-3">
                ← Go to Profile
              </Link>
            </div>
          )}

          {/* Content */}
          {!loading && !error && booking && (
            <div className="row g-4 justify-content-center mt-2">

              {/* ── Left: Status Card ── */}
              <div className="col-lg-4 col-md-5">
                <motion.div
                  className="bd-status-card"
                  initial={{ opacity: 0, y: 40 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
                  style={{
                    borderColor: status.border,
                  }}
                >
                  {/* Icon */}
                  <div className="bd-status-icon-wrap">
                    <div className="bd-status-icon">
                      <IconChefHat size={32} stroke={1.5} color="white" />
                    </div>
                  </div>

                  <p className="bd-booking-id">Booking ID</p>
                  <p className="bd-booking-id-value">#{booking._id?.slice(-8)?.toUpperCase()}</p>

                  <div className="bd-status-divider" />

                  {/* Status pill */}
                  <div
                    className="bd-status-pill"
                    style={{
                      backgroundColor: status.bg,
                      color: status.color,
                      border: `1px solid ${status.border}`,
                    }}
                  >
                    <span style={{ fontSize: "18px" }}>{status.icon}</span>
                    <div>
                      <p className="bd-status-pill-label">Status</p>
                      <p className="bd-status-pill-value">{status.label}</p>
                    </div>
                  </div>

                  {/* Status description */}
                  <p className="bd-status-desc">{status.desc}</p>

                  <div className="bd-status-divider" />

                  {/* Booked on */}
                  <p className="bd-booked-on-label">Booked On</p>
                  <p className="bd-booked-on-value">{formatCreatedAt(booking.createdAt)}</p>

                  {/* CTA */}
                  <Link href="/booking" className="bd-rebook-btn">
                    + Make Another Booking
                  </Link>
                </motion.div>
              </div>

              {/* ── Right: Details Card ── */}
              <div className="col-lg-8 col-md-7">
                <motion.div
                  className="bd-details-card"
                  initial={{ opacity: 0, y: 40 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
                >
                  <h4 className="bd-card-title">Reservation Details</h4>
                  <div className="bd-card-title-bar" />

                  {/* Section: Reservation Info */}
                  <p className="bd-section-label">Reservation Info</p>
                  <motion.div
                    variants={staggerWrap}
                    initial="hidden"
                    animate="visible"
                    className="bd-detail-grid"
                  >
                    <DetailRow
                      icon={<IconCalendar size={18} stroke={1.8} />}
                      label="Date"
                      value={formatDate(booking.date)}
                      index={0}
                    />
                    <DetailRow
                      icon={<IconClock size={18} stroke={1.8} />}
                      label="Time"
                      value={booking.time}
                      index={1}
                    />
                    <DetailRow
                      icon={<IconUsers size={18} stroke={1.8} />}
                      label="Number of Guests"
                      value={`${booking.guests} ${booking.guests === 1 ? "Person" : "People"}`}
                      index={2}
                    />
                  </motion.div>

                  {/* Divider */}
                  <div className="bd-section-divider" />

                  {/* Section: Guest Info */}
                  <p className="bd-section-label">Guest Information</p>
                  <motion.div
                    variants={staggerWrap}
                    initial="hidden"
                    animate="visible"
                    className="bd-detail-grid"
                  >
                    <DetailRow
                      icon={<IconUser size={18} stroke={1.8} />}
                      label="Full Name"
                      value={booking.name}
                      index={0}
                    />
                    <DetailRow
                      icon={<IconMail size={18} stroke={1.8} />}
                      label="Email Address"
                      value={booking.email}
                      index={1}
                    />
                    <DetailRow
                      icon={<IconPhone size={18} stroke={1.8} />}
                      label="Phone Number"
                      value={booking.phone}
                      index={2}
                    />
                  </motion.div>

                  {/* Special Message */}
                  {booking.message && (
                    <>
                      <div className="bd-section-divider" />
                      <p className="bd-section-label">Special Request</p>
                      <motion.div
                        className="bd-message-box"
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.3 }}
                      >
                        <IconMessage size={16} stroke={1.8} color="#CB3A1A" style={{ flexShrink: 0, marginTop: "2px" }} />
                        <p className="bd-message-text">{booking.message}</p>
                      </motion.div>
                    </>
                  )}
                </motion.div>
              </div>
            </div>
          )}
        </div>
      </div>

      <Footer />
    </>
  );
}
