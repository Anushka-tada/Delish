// import React from 'react'
// import Navbar from '../components/Navbar'
// import Footer from '../components/Footer'

// const page = () => {
//   return (
//     <div>
      
//       <Navbar/>

//        <div className="booking-herosection d-flex align-items-center justify-content-center">
//         <div className="booking-herosection-text d-flex flex-column align-items-center justify-content-center">
//           <h1 className="text-white">GET IN TOUCH</h1>
//           <p className="text-white">HOME / CONTACT US</p>
//         </div>
//       </div>

//       <Footer/>
//     </div>
//   )
// }

// export default page


'use client'
import React, { useState } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { motion } from 'framer-motion'
import {
  IconMapPin,
  IconPhone,
  IconMail,
  IconClock,
  IconBrandInstagram,
  IconBrandFacebook,
  IconBrandTwitter,
  IconSend,
  IconCheck,
} from '@tabler/icons-react'

// ─────────────────────────────────────────────────────────────────────
// Viewport configs
// ─────────────────────────────────────────────────────────────────────
const VP      = { once: true, amount: 0.25 }
const VP_SLOW = { once: true, amount: 0.35 }
const VP_CARD = { once: true, amount: 0.2  }

// ─────────────────────────────────────────────────────────────────────
// Variants
// ─────────────────────────────────────────────────────────────────────
const fadeUp = {
  hidden:  { opacity: 0, y: 60 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } },
}

const slideLeft = {
  hidden:  { opacity: 0, x: -80 },
  visible: { opacity: 1, x: 0,  transition: { duration: 0.9, ease: [0.22, 1, 0.36, 1] } },
}

const slideRight = {
  hidden:  { opacity: 0, x: 80  },
  visible: { opacity: 1, x: 0,  transition: { duration: 0.9, ease: [0.22, 1, 0.36, 1] } },
}

const staggerWrap = {
  hidden:  {},
  visible: { transition: { staggerChildren: 0.13, delayChildren: 0.05 } },
}

const staggerCard = {
  hidden:  { opacity: 0, y: 50, scale: 0.96 },
  visible: { opacity: 1, y: 0,  scale: 1,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
}

// ─────────────────────────────────────────────────────────────────────
// Data
// ─────────────────────────────────────────────────────────────────────
const infoCards = [
  {
    icon:  <IconMapPin size={28} stroke={1.6} />,
    title: 'Our Location',
    lines: ['12, Saket Nagar, AB Road', 'Indore, Madhya Pradesh 452001'],
  },
  {
    icon:  <IconPhone size={28} stroke={1.6} />,
    title: 'Phone Number',
    lines: ['+91 98765 43210', '+91 73456 78901'],
  },
  {
    icon:  <IconMail size={28} stroke={1.6} />,
    title: 'Email Address',
    lines: ['hello@flavoredfood.in', 'reservations@flavoredfood.in'],
  },
  {
    icon:  <IconClock size={28} stroke={1.6} />,
    title: 'Working Hours',
    lines: ['Mon – Fri : 11 AM – 11 PM', 'Sat – Sun : 10 AM – 12 AM'],
  },
]

const faqs = [
  { q: 'Do I need a reservation?',              a: 'Walk-ins are welcome but we strongly recommend booking ahead, especially on weekends and public holidays.' },
  { q: 'Is there a dress code?',                a: 'We follow a smart-casual dress code. We want you to feel comfortable while maintaining the elegant ambiance of our restaurant.' },
  { q: 'Do you accommodate dietary needs?',     a: 'Absolutely. Our kitchen handles vegetarian, vegan, gluten-free, and allergy-specific requests. Please let us know while booking.' },
  { q: 'Can I host a private event here?',      a: 'Yes! We have a dedicated private dining space for upto 60 guests. Reach out via the form below or call us directly.' },
]

// ─────────────────────────────────────────────────────────────────────
// FAQ Item — accordion open/close
// ─────────────────────────────────────────────────────────────────────
function FaqItem({ q, a, index }) {
  const [open, setOpen] = useState(false)
  return (
    <motion.div
      className={`faq-item ${open ? 'open' : ''}`}
      variants={staggerCard}
      onClick={() => setOpen(!open)}
    >
      <div className="faq-question">
        <span>{q}</span>
        <motion.span
          className="faq-icon"
          animate={{ rotate: open ? 45 : 0 }}
          transition={{ duration: 0.3 }}
        >
          +
        </motion.span>
      </div>
      <motion.div
        className="faq-answer"
        initial={false}
        animate={{ height: open ? 'auto' : 0, opacity: open ? 1 : 0 }}
        transition={{ duration: 0.38, ease: [0.22, 1, 0.36, 1] }}
        style={{ overflow: 'hidden' }}
      >
        <p className="para faq-answer-text">{a}</p>
      </motion.div>
    </motion.div>
  )
}

// ─────────────────────────────────────────────────────────────────────
// Page
// ─────────────────────────────────────────────────────────────────────
export default function Page() {
  const [form, setForm]       = useState({ name: '', email: '', phone: '', subject: '', message: '' })
  const [submitted, setSubmitted] = useState(false)
  const [focused, setFocused] = useState('')

  const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value })

  const handleSubmit = e => {
    e.preventDefault()
    // hook up your API here
    setSubmitted(true)
    setTimeout(() => setSubmitted(false), 4000)
    setForm({ name: '', email: '', phone: '', subject: '', message: '' })
  }

  return (
    <div className="contact-root">
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
             >
              GET IN TOUCH
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
                        HOME / <span className="contact-hero-crumb-active">CONTACT US</span>
                      </motion.p>
            
           </div>
         </div>

      {/* ════════════════════════════════════════════════
          INFO CARDS — 4 cards stagger in
      ════════════════════════════════════════════════ */}
      <section className="contact-info-strip">
        <div className="container">
          <motion.div
            className="row g-4"
            variants={staggerWrap}
            initial="hidden"
            whileInView="visible"
            viewport={VP_CARD}
          >
            {infoCards.map((card, i) => (
              <motion.div key={i} className="col-lg-3 col-sm-6" variants={staggerCard}>
                <motion.div
                  className="info-card"
                  whileHover={{ y: -6, boxShadow: '0 16px 40px rgba(203,58,26,0.12)' }}
                  transition={{ type: 'spring', stiffness: 300, damping: 22 }}
                >
                  <span className="info-card-icon">{card.icon}</span>
                  <h5 className="info-card-title">{card.title}</h5>
                  {card.lines.map((line, j) => (
                    <p key={j} className="para info-card-line">{line}</p>
                  ))}
                  {/* Red bottom border sweeps in on hover */}
                  <motion.div
                    className="info-card-bar"
                    initial={{ scaleX: 0 }}
                    whileHover={{ scaleX: 1 }}
                    transition={{ duration: 0.35 }}
                  />
                </motion.div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════
          FORM + MAP
      ════════════════════════════════════════════════ */}
      <section className="container contact-section-gap">
        <div className="row g-5 align-items-start">

          {/* ── Contact Form ── */}
          <motion.div
            className="col-lg-7"
            variants={slideLeft}
            initial="hidden"
            whileInView="visible"
            viewport={VP}
          >
            <h6 className="subtitle" style={{ justifySelf: 'start' }}>Send a Message</h6>
            <h2 className="mt-3 mb-4">
              We'd Love To <span className="text-red">Hear From You</span>
            </h2>

            <form className="contact-form" onSubmit={handleSubmit}>

              <div className="row g-3">

                {/* Name */}
                <div className="col-sm-6">
                  <div className={`contact-field-wrap ${focused === 'name' || form.name ? 'active' : ''}`}>
                    <label className="contact-label">Full Name *</label>
                    <input
                      name="name"
                      value={form.name}
                      onChange={handleChange}
                      onFocus={() => setFocused('name')}
                      onBlur={() => setFocused('')}
                      className="contact-input"
                      required
                    />
                    <span className="contact-field-line" />
                  </div>
                </div>

                {/* Email */}
                <div className="col-sm-6">
                  <div className={`contact-field-wrap ${focused === 'email' || form.email ? 'active' : ''}`}>
                    <label className="contact-label">Email Address *</label>
                    <input
                      name="email"
                      type="email"
                      value={form.email}
                      onChange={handleChange}
                      onFocus={() => setFocused('email')}
                      onBlur={() => setFocused('')}
                      className="contact-input"
                      required
                    />
                    <span className="contact-field-line" />
                  </div>
                </div>

                {/* Phone */}
                <div className="col-sm-6">
                  <div className={`contact-field-wrap ${focused === 'phone' || form.phone ? 'active' : ''}`}>
                    <label className="contact-label">Phone Number</label>
                    <input
                      name="phone"
                      type="tel"
                      value={form.phone}
                      onChange={handleChange}
                      onFocus={() => setFocused('phone')}
                      onBlur={() => setFocused('')}
                      className="contact-input"
                    />
                    <span className="contact-field-line" />
                  </div>
                </div>

                {/* Subject */}
                <div className="col-sm-6">
                  <div className={`contact-field-wrap ${focused === 'subject' || form.subject ? 'active' : ''}`}>
                    <label className="contact-label">Subject</label>
                    <input
                      name="subject"
                      value={form.subject}
                      onChange={handleChange}
                      onFocus={() => setFocused('subject')}
                      onBlur={() => setFocused('')}
                      className="contact-input"
                    />
                    <span className="contact-field-line" />
                  </div>
                </div>

                {/* Message */}
                <div className="col-12">
                  <div className={`contact-field-wrap ${focused === 'message' || form.message ? 'active' : ''}`}>
                    <label className="contact-label">Your Message *</label>
                    <textarea
                      name="message"
                      rows={5}
                      value={form.message}
                      onChange={handleChange}
                      onFocus={() => setFocused('message')}
                      onBlur={() => setFocused('')}
                      className="contact-input contact-textarea"
                      required
                    />
                    <span className="contact-field-line" />
                  </div>
                </div>

              </div>

              {/* Submit */}
              <motion.button
                type="submit"
                className="contact-submit-btn mt-4"
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: 'spring', stiffness: 350, damping: 20 }}
              >
                {submitted ? (
                  <>
                    <IconCheck size={18} /> Message Sent!
                  </>
                ) : (
                  <>
                    <IconSend size={18} /> Send Message
                  </>
                )}
              </motion.button>

            </form>
          </motion.div>

          {/* ── Sidebar info + socials ── */}
          <motion.div
            className="col-lg-5"
            variants={slideRight}
            initial="hidden"
            whileInView="visible"
            viewport={VP}
          >
            {/* Map embed */}
            <div className="contact-map-wrap">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d117828.53000063768!2d75.7849319!3d22.7195687!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3962fcad1b410ddb%3A0x96ec4da356240f4!2sIndore%2C%20Madhya%20Pradesh!5e0!3m2!1sen!2sin!4v1715000000000"
                width="100%"
                height="260"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Restaurant Location"
              />
            </div>

            {/* Opening hours card */}
            <div className="contact-hours-card mt-4">
              <h5 className="contact-hours-title">
                <IconClock size={20} stroke={1.6} /> Opening Hours
              </h5>
              {[
                { day: 'Monday – Friday', time: '11:00 AM – 11:00 PM' },
                { day: 'Saturday',        time: '10:00 AM – 12:00 AM' },
                { day: 'Sunday',          time: '10:00 AM – 12:00 AM' },
              ].map((row, i) => (
                <div key={i} className="contact-hours-row">
                  <span className="contact-hours-day">{row.day}</span>
                  <span className="contact-hours-time">{row.time}</span>
                </div>
              ))}
            </div>

            {/* Social links */}
            <div className="contact-socials mt-4">
              <p className="contact-socials-label">Follow Us</p>
              <div className="contact-socials-row">
                {[
                  { icon: <IconBrandInstagram size={22} stroke={1.6} />, label: 'Instagram' },
                  { icon: <IconBrandFacebook  size={22} stroke={1.6} />, label: 'Facebook'  },
                  { icon: <IconBrandTwitter   size={22} stroke={1.6} />, label: 'Twitter'   },
                ].map((s, i) => (
                  <motion.a
                    key={i}
                    href="#"
                    className="contact-social-btn"
                    whileHover={{ scale: 1.1, backgroundColor: '#CB3A1A', color: '#fff', borderColor: '#CB3A1A' }}
                    whileTap={{ scale: 0.94 }}
                    transition={{ type: 'spring', stiffness: 350, damping: 20 }}
                    aria-label={s.label}
                  >
                    {s.icon}
                  </motion.a>
                ))}
              </div>
            </div>

          </motion.div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════
          FAQ
      ════════════════════════════════════════════════ */}
      {/* <section className="contact-faq-section">
        <div className="container contact-section-gap">

          <motion.div
            className="section-header"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={VP_SLOW}
          >
            <h6 className="subtitle">FAQ</h6>
            <h2 className="mt-3">
              Frequently Asked <span className="text-red">Questions</span>
            </h2>
            <p className="para mt-2 section-sub">
              Got a question? Chances are we've answered it below. If not — just drop us a message!
            </p>
          </motion.div>

          <motion.div
            className="contact-faq-list mt-4"
            variants={staggerWrap}
            initial="hidden"
            whileInView="visible"
            viewport={VP_CARD}
          >
            {faqs.map((faq, i) => (
              <FaqItem key={i} q={faq.q} a={faq.a} index={i} />
            ))}
          </motion.div>

        </div>
      </section> */}

     

      <Footer />
    </div>
  )
}