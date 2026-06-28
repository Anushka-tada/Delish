"use client";
import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { motion } from "framer-motion";
import { useSelector, useDispatch } from "react-redux";
import { useRouter } from "next/navigation";
import Link from "next/link";
import {
  IconUser,
  IconMail,
  IconCalendar,
  IconClock,
  IconUsers,
  IconEye,
  IconLogout,
  IconChefHat,
} from "@tabler/icons-react";
import { logout } from "../../redux/authSlice";
import { getBookingServ, getUserBookingsServ } from "../../../services/booking.service";

// ─────────────────────────────────────────────────────────────────────
// Variants
// ─────────────────────────────────────────────────────────────────────
const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] },
  }),
};

const staggerWrap = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08, delayChildren: 0.1 } },
};

const rowVariant = {
  hidden: { opacity: 0, x: -20 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
  },
};

// ─────────────────────────────────────────────────────────────────────
// Status Badge
// ─────────────────────────────────────────────────────────────────────
const StatusBadge = ({ status }) => {
  const map = {
    pending:   { bg: "#fff4e0", color: "#b45309", label: "Pending"   },
    confirmed: { bg: "#ecfdf5", color: "#065f46", label: "Confirmed" },
    cancelled: { bg: "#fef2f2", color: "#991b1b", label: "Cancelled" },
  };
  const s = map[status] || map.pending;
  return (
    <span
      style={{
        backgroundColor: s.bg,
        color: s.color,
        padding: "4px 12px",
        borderRadius: "20px",
        fontSize: "12px",
        fontWeight: 600,
        textTransform: "uppercase",
        letterSpacing: "0.05em",
        border: `1px solid ${s.color}30`,
      }}
    >
      {s.label}
    </span>
  );
};

// ─────────────────────────────────────────────────────────────────────
// Page
// ─────────────────────────────────────────────────────────────────────
export default function ProfilePage() {
  const router = useRouter();
  const dispatch = useDispatch();
  const { user, isAuthenticated } = useSelector((state) => state.auth);

  const [bookings, setBookings] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Auth guard
  useEffect(() => {
    if (!isAuthenticated) {
      router.replace("/login");
    }
  }, [isAuthenticated, router]);

  // Fetch bookings
  useEffect(() => {
    if (!isAuthenticated) return;
    const fetchBookings = async () => {
      try {
        setLoading(true);
        console.log("user", user)
        const res = await getBookingServ();
        setBookings(res?.data?.bookings || res?.data || []);
      } catch (err) {
        console.error(err);
        setError("Could not load bookings. Please try again.");
      } finally {
        setLoading(false);
      }
    };
    fetchBookings();
  }, [isAuthenticated]);

  const handleLogout = () => {
    dispatch(logout());
    router.push("/");
  };

  if (!isAuthenticated) return null;

  const formatDate = (dateStr) => {
    if (!dateStr) return "—";
    const d = new Date(dateStr);
    return d.toLocaleDateString("en-IN", {
      day: "2-digit",
      month: "short",
      year: "numeric",
    });
  };

  return (
    <>
      <Navbar />

      {/* ── Hero ── */}
      <div
        className="about-hero booking-herosection d-flex align-items-center justify-content-center"
      
      >
        <div className="booking-herosection-text d-flex flex-column align-items-center justify-content-center">
          <motion.h1
            className="text-white"
            initial={{ opacity: 0, y: 50, filter: "blur(10px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 0.85, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          >
            My Profile
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
            HOME / <span className="contact-hero-crumb-active">PROFILE</span>
          </motion.p>
        </div>
      </div>

      {/* ── Main Content ── */}
      <div className="profile-page-wrapper py-5">
        <div className="container">
          <div className="row g-4 justify-content-center">

            {/* ── Left: User Info Card ── */}
            <div className="col-lg-4 col-md-5">
              <motion.div
                className="profile-info-card"
                custom={0}
                variants={fadeUp}
                initial="hidden"
                animate="visible"
              >
                {/* Avatar */}
                <div className="profile-avatar-wrap">
                  <div className="profile-avatar">
                    <IconChefHat size={40} stroke={1.5} color="white" />
                  </div>
                  <div className="profile-avatar-ring" />
                </div>

                {/* Name + email */}
                <h4 className="profile-name">{user?.username || user?.name || "Guest"}</h4>
                <p className="profile-email-tag">{user?.email || "—"}</p>

                {/* Divider */}
                <div className="profile-card-divider" />

                {/* Info rows */}
                <div className="profile-detail-rows">
                  <div className="profile-detail-row">
                    <span className="profile-detail-icon">
                      <IconUser size={16} stroke={1.8} />
                    </span>
                    <div>
                      <p className="profile-detail-label">Full Name</p>
                      <p className="profile-detail-value">{user?.username || user?.name || "—"}</p>
                    </div>
                  </div>

                  <div className="profile-detail-row">
                    <span className="profile-detail-icon">
                      <IconMail size={16} stroke={1.8} />
                    </span>
                    <div>
                      <p className="profile-detail-label">Email Address</p>
                      <p className="profile-detail-value">{user?.email || "—"}</p>
                    </div>
                  </div>

                  <div className="profile-detail-row">
                    <span className="profile-detail-icon">
                      <IconCalendar size={16} stroke={1.8} />
                    </span>
                    <div>
                      <p className="profile-detail-label">Total Bookings</p>
                      <p className="profile-detail-value">{bookings.length}</p>
                    </div>
                  </div>
                </div>

                {/* Logout btn */}
                <motion.button
                  className="profile-logout-btn"
                  onClick={handleLogout}
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  transition={{ type: "spring", stiffness: 340, damping: 22 }}
                >
                  <IconLogout size={16} stroke={2} />
                  Logout
                </motion.button>
              </motion.div>
            </div>

            {/* ── Right: Booking History ── */}
            <div className="col-lg-8 col-md-7">
              <motion.div
                className="profile-bookings-card"
                custom={1}
                variants={fadeUp}
                initial="hidden"
                animate="visible"
              >
                <div className="profile-bookings-header">
                  <h4 className="profile-section-title">Booking History</h4>
                  <Link href="/booking" className="profile-new-booking-btn">
                    + New Booking
                  </Link>
                </div>

                {/* Loading */}
                {loading && (
                  <div className="profile-state-box">
                    <div className="profile-spinner" />
                    <p className="profile-state-text">Loading your bookings...</p>
                  </div>
                )}

                {/* Error */}
                {!loading && error && (
                  <div className="profile-state-box">
                    <p className="profile-state-text" style={{ color: "#CB3A1A" }}>{error}</p>
                  </div>
                )}

                {/* Empty */}
                {!loading && !error && bookings.length === 0 && (
                  <div className="profile-state-box">
                    <IconCalendar size={40} stroke={1.2} color="#d1d5db" />
                    <p className="profile-state-text">No bookings yet.</p>
                    <Link href="/booking" className="profile-new-booking-btn">
                      Book Your First Table
                    </Link>
                  </div>
                )}

                {/* Table */}
                {!loading && !error && bookings.length > 0 && (
                  <div className="profile-table-wrap">
                    <table className="profile-table">
                      <thead>
                        <tr>
                          <th>#</th>
                          <th>Date</th>
                          <th>Time</th>
                          <th>Guests</th>
                          <th>Status</th>
                          <th>Action</th>
                        </tr>
                      </thead>
                      <motion.tbody
                        variants={staggerWrap}
                        initial="hidden"
                        animate="visible"
                      >
                        {bookings.map((booking, idx) => (
                          <motion.tr key={booking._id || idx} variants={rowVariant}>
                            <td className="profile-td-num">{idx + 1}</td>
                            <td>
                              <div className="profile-td-with-icon">
                                <IconCalendar size={14} stroke={1.8} color="#CB3A1A" />
                                {formatDate(booking.date)}
                              </div>
                            </td>
                            <td>
                              <div className="profile-td-with-icon">
                                <IconClock size={14} stroke={1.8} color="#CB3A1A" />
                                {booking.time || "—"}
                              </div>
                            </td>
                            <td>
                              <div className="profile-td-with-icon">
                                <IconUsers size={14} stroke={1.8} color="#CB3A1A" />
                                {booking.guests}
                              </div>
                            </td>
                            <td>
                              <StatusBadge status={booking.status} />
                            </td>
                            <td>
                              <Link
                                href={`/booking-detail/${booking._id}`}
                                className="profile-view-btn"
                              >
                                <IconEye size={14} stroke={2} />
                                View
                              </Link>
                            </td>
                          </motion.tr>
                        ))}
                      </motion.tbody>
                    </table>
                  </div>
                )}
              </motion.div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}
