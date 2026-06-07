// import React from 'react'
// import Navbar from '../components/Navbar'
// import Footer from '../components/Footer'

// const page = () => {
//   return (
//     <>
//     <Navbar/>

//     <div className="booking-herosection d-flex align-items-center justify-content-center">
//         <div className="booking-herosection-text d-flex flex-column align-items-center justify-content-center">
//           <h1 className="text-white">ABOUT US</h1>
//           <p className="text-white">HOME / ABOUT US</p>
//         </div>
//       </div>

//       {/* our delicious food section */}

//       <div className='container py-5 mt-5'>
//        <div className='row justify-content-center align-items-center'>
//         <div className='col-5'>
//            <h6 className='subtitle mb-3' style={{justifySelf:"start"}}>
//               Reservation
//              </h6>

//              <h2 className='mb-5'>Delicious Food For Healthy Life</h2>

//              <div className='d-flex gap-4 align-items-center mb-4'>

//                 <img src='/assets/about-icon-1.png' style={{height:"fit-content"}} className=''></img>

//                 <div className='ps-4' style={{borderLeft:"2px solid #cdcdcd"}}>
//                     <h4>Quality Food</h4>
//                     <p className='para'>The wise man therefore always holds Indies matters this
// principle information</p>
//                 </div>

//              </div>

//              <div className='d-flex gap-4 align-items-center'>

//                 <img src='/assets/about-icon-2.png' style={{height:"fit-content"}} className=''></img>

//                 <div className='ps-4' style={{borderLeft:"2px solid #cdcdcd"}}>
//                     <h4>Supply Chain Maintain</h4>
//                     <p className='para'>The wise man therefore always holds Indies matters this
// principle information</p>
//                 </div>

//              </div>

//              <button className='about-btn p-2 px-5  mt-5 bg-white'>BOOK A TABLE</button>
//         </div>
//         <div className='col-5 d-flex align-items-center'>
//           <img src='https://media.istockphoto.com/id/944478708/photo/couple-eating-lunch-with-fresh-salad-and-appetizers.jpg?s=612x612&w=0&k=20&c=xZdIIHvakQrYCbR59RM8nrhEnw-xu4nE-BOeOhQPnck=' style={{boxShadow: "rgba(0, 0, 0, 0.16) 0px 1px 4px"}}></img>
//         </div>
//        </div>
//       </div>


//     <Footer/>
      
//     </>
//   )
// }

// export default page


'use client'
import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { useRouter } from 'next/navigation'
import { motion } from 'framer-motion'

// ─────────────────────────────────────────────────────────────────────
// Viewport configs — amount means "this % of element must be visible"
// before animation triggers. Higher = user scrolls deeper before it fires.
// ─────────────────────────────────────────────────────────────────────
const VP      = { once: true, amount: 0.25 }
const VP_SLOW = { once: true, amount: 0.35 }
const VP_CARD = { once: true, amount: 0.2  }

// ─────────────────────────────────────────────────────────────────────
// Variants
// ─────────────────────────────────────────────────────────────────────
const fadeUp = {
  hidden:  { opacity: 0, y: 60 },
  visible: { opacity: 1, y: 0,  transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } },
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

const scaleUp = {
  hidden:  { opacity: 0, scale: 0.85 },
  visible: { opacity: 1, scale: 1,
    transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] } },
}

// ─────────────────────────────────────────────────────────────────────
// Data
// ─────────────────────────────────────────────────────────────────────
const values = [
  {
    icon: '/assets/about-icon-1.png',
    title: 'Quality Food',
    desc: 'We source only the freshest seasonal ingredients, working closely with local farms to bring authentic flavors to your plate.',
  },
  {
    icon: '/assets/about-icon-2.png',
    title: 'Supply Chain Maintained',
    desc: 'Our transparent supply chain ensures every ingredient meets our strict quality standard before it reaches your table.',
  },
]

const whyUs = [
  { icon: '🌿', title: 'Farm to Table',     desc: 'Every ingredient is sourced fresh from local farms, guaranteeing natural flavors in every dish.'   },
  { icon: '👨‍🍳', title: 'Expert Chefs',      desc: 'Our award-winning chefs bring decades of culinary expertise and passion to every single plate.'     },
  { icon: '✨', title: 'Elegant Ambiance',  desc: 'Dine in a space crafted for romance, celebration, and the art of slow, intentional dining.'          },
  { icon: '🤝', title: 'Warm Hospitality',  desc: 'We treat every guest like family — expect service that is attentive, genuine, and memorable.'        },
  { icon: '🍷', title: 'Curated Wine List', desc: 'Sommelier-selected wines from across the globe, perfectly paired with every course on our menu.'     },
  { icon: '🎵', title: 'Live Music Nights', desc: 'Every Friday and Saturday, enjoy live acoustic performances that elevate your dining experience.'     },
]

const milestones = [
  { year: '2009', event: 'Restaurant Founded', desc: 'Opened our first doors in the heart of the city with a vision to redefine fine dining.'        },
  { year: '2013', event: 'First Award',         desc: 'Received the Regional Excellence in Dining Award — our first of many recognitions.'            },
  { year: '2017', event: 'Second Location',     desc: 'Expanded to a second venue, bringing our signature experience to a wider audience.'            },
  { year: '2022', event: 'Michelin Recognition',desc: 'Featured in the Michelin Guide — a milestone that validated our unwavering commitment to craft.'},
]

const teamHighlights = [
  { img: 'https://img.freepik.com/free-photo/portrait-confident-male-chef-kitchen_23-2147863584.jpg?semt=ais_hybrid&w=740&q=80', name: 'Naman Kumar',   role: 'Executive Chef'              },
  { img: 'https://thumbs.dreamstime.com/b/female-chef-14984977.jpg',                                                               name: 'Shefali Mehta', role: 'Head of Culinary Innovation' },
  { img: 'https://www.shutterstock.com/image-photo/asian-indian-young-male-chef-600nw-2488047379.jpg',                             name: 'Raghav Singh',  role: 'Seafood Specialist'          },
]

// ─────────────────────────────────────────────────────────────────────
// Page
// ─────────────────────────────────────────────────────────────────────
export default function Page() {
  const router = useRouter()

  return (
    <div className="about-root">
      <Navbar />

      {/* ════════════════════════════════════════════════
          HERO — page load entrance (uses animate, not whileInView)
      ════════════════════════════════════════════════ */}
      <div className="about-hero booking-herosection d-flex align-items-center justify-content-center">
        <div className="booking-herosection-text d-flex flex-column align-items-center justify-content-center">
          <motion.h1
            className="text-white"
            initial={{ opacity: 0, y: 50, filter: 'blur(10px)' }}
            animate={{ opacity: 1, y: 0,  filter: 'blur(0px)' }}
            transition={{ duration: 0.85, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          >
            ABOUT US
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
                     HOME / <span className="contact-hero-crumb-active">ABOUT US</span>
                   </motion.p>
         
        </div>
      </div>

      {/* ════════════════════════════════════════════════
          OUR STORY — image left, text right
      ════════════════════════════════════════════════ */}
      <section className="container about-section-gap">
        <div className="row justify-content-center align-items-center g-5">

          {/* Image */}
          <motion.div
            className="col-lg-5 col-md-6"
            variants={slideLeft}
            initial="hidden"
            whileInView="visible"
            viewport={VP}
          >
            <div className="about-img-frame">
              <img
                src="https://media.istockphoto.com/id/944478708/photo/couple-eating-lunch-with-fresh-salad-and-appetizers.jpg?s=612x612&w=0&k=20&c=xZdIIHvakQrYCbR59RM8nrhEnw-xu4nE-BOeOhQPnck="
                alt="Couple dining"
                className="about-main-img"
              />
              {/* Floating stat card */}
              <motion.div
                className="about-float-card"
                initial={{ opacity: 0, scale: 0.8, y: 20 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                viewport={VP}
                transition={{ duration: 0.65, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
              >
                <p className="about-float-number">15<span>+</span></p>
                <p className="about-float-label">Years of Excellence</p>
              </motion.div>
            </div>
          </motion.div>

          {/* Text */}
          <motion.div
            className="col-lg-5 col-md-6"
            variants={slideRight}
            initial="hidden"
            whileInView="visible"
            viewport={VP}
          >
            <h6 className="subtitle" style={{ justifySelf: 'start' }}>Our Story</h6>
            <h2 className="mt-3 mb-4">
              Delicious Food For <span className="text-red">Healthy Life</span>
            </h2>

            <p className="para about-lead-para">
              Since 2009, we have been on a mission to create dining experiences that linger long
              after the last bite. Born from a love of bold flavors and genuine hospitality, our
              restaurant is a place where every meal feels like a celebration.
            </p>

            {/* Feature rows */}
            <motion.div
              className="about-values-list"
              variants={staggerWrap}
              initial="hidden"
              whileInView="visible"
              viewport={VP}
            >
              {values.map((v, i) => (
                <motion.div key={i} className="about-value-row" variants={scaleUp}>
                  <img src={v.icon} alt={v.title} className="about-value-icon" />
                  <div className="about-value-text">
                    <h4 className="about-value-title">{v.title}</h4>
                    <p className="para about-value-desc">{v.desc}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            <motion.button
              className="btn-primary-red mt-4"
              onClick={() => router.push('/booking')}
              whileHover={{ scale: 1.05, backgroundColor: '#CB3A1A', color: '#fff' }}
              whileTap={{ scale: 0.94 }}
            >
              Book a Table
            </motion.button>
          </motion.div>

        </div>
      </section>

      {/* ════════════════════════════════════════════════
          MISSION STRIP — dark full-width band
      ════════════════════════════════════════════════ */}
      <motion.section
        className="about-mission-strip"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.9 }}
      >
        <motion.div
          className="container about-mission-inner"
          initial={{ y: 40, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.75, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
        >
          <h6 className="subtitle about-mission-subtitle">Our Mission</h6>
          <h2 className="about-mission-heading">
            "To create moments of pure joy — one perfectly crafted plate at a time."
          </h2>
          <p className="about-mission-body para">
            We believe food is more than sustenance — it is memory, connection, and culture.
            Every dish we serve is a promise: to honour tradition, push boundaries,
            and make every guest feel extraordinary.
          </p>
        </motion.div>
      </motion.section>

      {/* ════════════════════════════════════════════════
          WHY CHOOSE US — 6 icon cards staggered
      ════════════════════════════════════════════════ */}
      <section className="container about-section-gap">

        <motion.div
          className="section-header"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={VP_SLOW}
        >
          <h6 className="subtitle">Why Choose Us</h6>
          <h2 className="mt-3">
            What Makes Us <span className="text-red">Different</span>
          </h2>
          <p className="para mt-2 section-sub">
            We go beyond the plate — here is what makes dining with us an experience you will want to repeat.
          </p>
        </motion.div>

        <motion.div
          className="row mt-4 g-4"
          variants={staggerWrap}
          initial="hidden"
          whileInView="visible"
          viewport={VP_CARD}
        >
          {whyUs.map((item, i) => (
            <motion.div key={i} className="col-lg-4 col-md-6" variants={staggerCard}>
              <motion.div
                className="why-card"
                whileHover={{ y: -6, boxShadow: '0 16px 40px rgba(203,58,26,0.1)' }}
                transition={{ type: 'spring', stiffness: 300, damping: 22 }}
              >
                <span className="why-card-icon">{item.icon}</span>
                <h5 className="why-card-title">{item.title}</h5>
                <p className="para why-card-desc">{item.desc}</p>
                {/* Hover underline */}
                <motion.div
                  className="why-card-line"
                  initial={{ scaleX: 0 }}
                  whileHover={{ scaleX: 1 }}
                  transition={{ duration: 0.35 }}
                />
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* ════════════════════════════════════════════════
          JOURNEY TIMELINE
      ════════════════════════════════════════════════ */}
      <section className="about-timeline-section">
        <div className="container about-section-gap">

          <motion.div
            className="section-header"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={VP_SLOW}
          >
            <h6 className="subtitle">Our Journey</h6>
            <h2 className="mt-3">
              Milestones That <span className="text-red">Define Us</span>
            </h2>
          </motion.div>

          <div className="about-timeline mt-5">
            {milestones.map((m, i) => (
              <motion.div
                key={i}
                className={`about-timeline-item ${i % 2 === 0 ? 'left' : 'right'}`}
                variants={i % 2 === 0 ? slideLeft : slideRight}
                initial="hidden"
                whileInView="visible"
                viewport={VP}
              >
                <div className="about-timeline-dot" />
                <div className="about-timeline-card">
                  <span className="about-timeline-year">{m.year}</span>
                  <h5 className="about-timeline-event">{m.event}</h5>
                  <p className="para about-timeline-desc">{m.desc}</p>
                </div>
              </motion.div>
            ))}
            <div className="about-timeline-line" />
          </div>

        </div>
      </section>

      {/* ════════════════════════════════════════════════
          TEAM SNAPSHOT
      ════════════════════════════════════════════════ */}
      <section className="our-team">
        <div className="container about-section-gap">

          <motion.div
            className="section-header"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={VP_SLOW}
          >
            <h6 className="subtitle">Meet The Team</h6>
            <h2 className="mt-3">
              The Faces Behind <span className="text-red">The Flavors</span>
            </h2>
          </motion.div>

          <motion.div
            className="row justify-content-center mt-4"
            variants={staggerWrap}
            initial="hidden"
            whileInView="visible"
            viewport={VP_CARD}
          >
            {teamHighlights.map((member, i) => (
              <motion.div
                key={i}
                className="col-lg-3 col-md-4 col-sm-6 col-12 p-3"
                variants={staggerCard}
              >
                <motion.div
                  className="chef-card"
                  whileHover="hover"
                  initial="rest"
                  animate="rest"
                >
                  <div className="chef-img-wrap">
                    <motion.img
                      src={member.img}
                      alt={member.name}
                      className="chef-img"
                      variants={{ rest: { scale: 1 }, hover: { scale: 1.07 } }}
                      transition={{ duration: 0.55 }}
                    />
                    <motion.div
                      className="chef-overlay"
                      variants={{ rest: { opacity: 0 }, hover: { opacity: 1 } }}
                      transition={{ duration: 0.28 }}
                    />
                  </div>
                  <div className="chef-card-body">
                    <h5 className="chef-name">{member.name}</h5>
                    <p className="para chef-post">{member.role}</p>
                    <div className="chef-socials">
                      {[0, 1, 2].map(s => <span key={s} className="chef-social-dot" />)}
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </motion.div>

        </div>
      </section>

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
            Come Experience the Magic<br />of Our Kitchen
          </h2>
          <motion.button
            className="cta-btn"
            onClick={() => router.push('/booking')}
            whileHover={{ scale: 1.06, backgroundColor: '#fff', color: '#CB3A1A' }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: 'spring', stiffness: 350, damping: 20 }}
          >
            Book Your Table Today
          </motion.button>
        </motion.div>
      </motion.section>

      <Footer />
    </div>
  )
}