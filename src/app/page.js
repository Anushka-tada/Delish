// 'use client'
// import React from 'react'
// import Navbar from './components/Navbar'
// import { Swiper, SwiperSlide } from 'swiper/react';
// import { Navigation, Pagination } from 'swiper/modules';
// import 'swiper/css';
// import 'swiper/css/navigation';
// import 'swiper/css/pagination';
// import Footer from './components/Footer';
// import { useRouter } from 'next/navigation';
// import { motion } from 'framer-motion';

// // ── Animation Variants ───────────────────────────────────────────────

// const pageVariants = {
//   initial: { opacity: 0, y: 24 },
//   animate: { opacity: 1, y: 0, transition: { duration: 0.45, ease: 'easeOut' } },
//   exit:    { opacity: 0, y: -16, transition: { duration: 0.3 } },
// };

// const fadeUp = {
//   hidden:  { opacity: 0, y: 40 },
//   visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
// };

// const staggerContainer = {
//   hidden:  {},
//   visible: { transition: { staggerChildren: 0.12 } },
// };

// const staggerItem = {
//   hidden:  { opacity: 0, y: 30 },
//   visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
// };

// // ── Data ─────────────────────────────────────────────────────────────

// const data = [
//   {
//     img: 'https://media.istockphoto.com/id/650655146/photo/catering-food-wedding-event-table.jpg?s=612x612&w=0&k=20&c=ATGYgW8bM_559jJ5aUNO4HlJqpkOWUmNNMMflx5kajo=',
//     title: 'Wedding Service',
//     desc: 'The chocolate fondant which did not disappoint It was rich and indulgent, with a gooey center that was pure bliss.'
//   },
//   {
//     img: 'https://chaingupshup.com/wp-content/uploads/2024/01/table-with-delicious-sweets-covered-with-pink-silk-scaled.jpg',
//     title: 'Party Service',
//     desc: 'Assertively myocardinate robust e-tailers for extensible human capital. dpropriately benchmark networks.'
//   },
//   {
//     img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQY1CJ2F-RMQcaA70G9TAarmYydFOg-MfmfBbmyXO3DBGt4ycaB_5cJ1IurcHbMR4ZJwt4&usqp=CAU',
//     title: 'Buffet Service',
//     desc: 'Assertively myocardinate robust e-tailers for extensible human capital. dpropriately benchmark networks.'
//   }
// ];

// const chefs = [
//   { img: "https://img.freepik.com/free-photo/portrait-confident-male-chef-kitchen_23-2147863584.jpg?semt=ais_hybrid&w=740&q=80", name: "Naman Kumar", post: "Executive Chef" },
//   { img: "https://thumbs.dreamstime.com/b/female-chef-14984977.jpg", name: "Shefali Mehta", post: "Head of Culinary Innovation" },
//   { img: "https://www.shutterstock.com/image-photo/asian-indian-young-male-chef-600nw-2488047379.jpg", name: "Raghav Singh", post: "Seafood Specialist" },
//   { img: "https://plus.unsplash.com/premium_photo-1661778091956-15dbe6e47442?fm=jpg&q=60&w=3000", name: "Ananya Sharma", post: "Pastry & Dessert Chef" },
// ];

// const foods = [
//   { name: "Classic Caesar Salad", category: "Lunch", img: "https://feelgoodfoodie.net/wp-content/uploads/2020/04/Caesar-Salad-TIMG.jpg", price: "$15.00" },
//   { name: "Spaghetti Aglio", category: "Dinner", img: "https://walkingthroughlavenderfields.com/wp-content/uploads/2022/09/aglio-e-olio-e-peperoncino-01.jpeg", price: "$18.00" },
//   { name: "Chocolate Lava Cake", category: "Dessert", img: "https://www.verybestbaking.com/sites/g/files/jgfbjl326/files/styles/large/public/recipe-thumbnail/116744-bd4b61de9035d59377d72c224a320cbd_Lava_Cake.jpg?itok=k_dLaW-U", price: "$25.00" },
//   { name: "Alfredo Pasta", category: "Dinner", img: "https://images.immediate.co.uk/production/volatile/sites/30/2022/08/Alfredo-dc662e3.jpg", price: "$23.00" },
//   { name: "Margherita Pizza", category: "All", img: "https://grandecheese.com/wp-content/uploads/2025/02/Margherita-Pizza-deck-oven.jpg.webp", price: "$15.00" },
//   { name: "Vegetable Biryani", category: "Lunch", img: "https://www.indianveggiedelight.com/wp-content/uploads/2020/04/veg-biryani-instant-pot.jpg", price: "$15.00" },
//   { name: "Paneer Butter Masala", category: "Dinner", img: "https://www.ruchiskitchen.com/wp-content/uploads/2020/12/Paneer-butter-masala-recipe-3-500x500.jpg", price: "$12.00" },
//   { name: "Avocado Toast", category: "Breakfast", img: "https://allnutritionkitchen.com/wp-content/uploads/2024/06/avocado-cottage-cheese-toast.jpg", price: "$24.00" },
// ];

// // ── Page ─────────────────────────────────────────────────────────────

// const page = () => {
//   const router = useRouter();
//   const handleBookingRoute = () => router.push("/booking");

//   return (
//     <motion.div
//       variants={pageVariants}
//       initial="initial"
//       animate="animate"
//       exit="exit"
//     >
//       <Navbar />

//       {/* ── Hero Section ── */}
//       <div className='herosection'>
//         <div className='container text-white'>
//           <motion.h2
//             initial={{ opacity: 0, y: -20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.6, delay: 0.1 }}
//           >
//             The Great
//           </motion.h2>

//           <motion.h1
//             initial={{ opacity: 0, y: -20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.6, delay: 0.25 }}
//           >
//             Flavored Food
//           </motion.h1>

//           <motion.div
//             className='d-flex gap-3 align-items-center justify-content-center'
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             transition={{ duration: 0.6, delay: 0.4 }}
//           >
//             <img src='/assets/white_line.png' style={{ height: "1px" }} className='hero-line' />
//             <h2>Part Of Us</h2>
//             <img src='/assets/white_line.png' style={{ height: "1px" }} className='hero-line' />
//           </motion.div>

//           <motion.div
//             className="d-flex gap-4 justify-content-center mt-4"
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.6, delay: 0.55 }}
//           >
//             <p>BOOK A TABLE</p>
//             <p>VIEW MENU</p>
//           </motion.div>
//         </div>
//       </div>

//       {/* ── Reservation ── */}
//       <div className='container py-5 my-sm-5 my-4'>
//         <div className='row align-items-center'>

//           <motion.div
//             className='col-md-6 order-2 order-md-1'
//             variants={fadeUp}
//             initial="hidden"
//             whileInView="visible"
//             viewport={{ once: true, margin: '-60px' }}
//           >
//             <img
//               src='https://www.oberoihotels.com/-/media/oberoi-hotel/the-oberoi-gurgaon/gurgaon-resized/ziya/820x646/evening_shot_at_ziya_gurgaon.jpg'
//               className='img-fluid'
//             />
//           </motion.div>

//           <motion.div
//             className='col-md-6 mb-5 mb-md-0 ps-md-5 order-1 order-md-2'
//             variants={fadeUp}
//             initial="hidden"
//             whileInView="visible"
//             viewport={{ once: true, margin: '-60px' }}
//           >
//             <h6 className='subtitle' style={{ justifySelf: "start" }}>Reservation</h6>
//             <h2 className='text-uppercase mb-4'>Welcome To our <br />Luxury Restaurant</h2>
//             <p className="para mb-4">
//               The scallops were perfectly cooked, tender, and flavorful, paired beautifully with a creamy
//               risotto and seasonal vegetables. The presentation was artful, showcasing the chef's attention to detail.
//             </p>
//             <motion.div
//               className='navBtn px-3 d-flex justify-content-center gap-3 align-items-center'
//               style={{ width: "fit-content", height: "41px" }}
//               onClick={handleBookingRoute}
//               whileHover={{ scale: 1.05 }}
//               whileTap={{ scale: 0.96 }}
//               transition={{ type: 'spring', stiffness: 350, damping: 20 }}
//             >
//               <p className='mb-0 text-danger fw-semibold text-uppercase'>Book a table</p>
//               <img src='/assets/red_arrow.png' />
//             </motion.div>
//           </motion.div>

//         </div>
//       </div>

//       {/* ── Our Services ── */}
//       <div className='our-services py-sm-5'>
//         <div className='container py-5'>
//           <motion.h6
//             className='subtitle'
//             variants={fadeUp}
//             initial="hidden"
//             whileInView="visible"
//             viewport={{ once: true }}
//           >
//             Our Services
//           </motion.h6>
//           <motion.h2
//             className='text-center'
//             variants={fadeUp}
//             initial="hidden"
//             whileInView="visible"
//             viewport={{ once: true }}
//           >
//             Our Restaurant Service
//           </motion.h2>

//           <motion.div
//             className="row"
//             variants={staggerContainer}
//             initial="hidden"
//             whileInView="visible"
//             viewport={{ once: true, margin: '-50px' }}
//           >
//             {data.map((item, index) => (
//               <motion.div
//                 key={index}
//                 className="d-flex align-items-stretch col-lg-4 col-sm-6 col-12 p-3"
//                 variants={staggerItem}
//               >
//                 <motion.div
//                   className="card bg-white text-white w-100 d-flex flex-column border-0 rounded-0"
//                   whileHover={{ y: -6, boxShadow: '0 12px 32px rgba(0,0,0,0.12)' }}
//                   transition={{ type: 'spring', stiffness: 300, damping: 20 }}
//                 >
//                   <div className='service-image p-3'>
//                     <img src={item.img} className="card-img-top rounded-0" alt={item.title} />
//                   </div>
//                   <div className="card-body d-flex flex-column px-4 pb-4">
//                     <h5 className="card-title fw-semibold text-black text-uppercase">{item.title}</h5>
//                     <p className="card-text flex-grow-1 para">{item.desc}</p>
//                     <motion.div
//                       className='navBtn px-3 d-flex justify-content-center gap-3 align-items-center'
//                       style={{ width: "fit-content", height: "41px" }}
//                       whileHover={{ scale: 1.05 }}
//                       whileTap={{ scale: 0.96 }}
//                       transition={{ type: 'spring', stiffness: 350, damping: 20 }}
//                     >
//                       <p className='mb-0 text-danger fw-semibold text-uppercase'>Read More</p>
//                       <img src='/assets/red_arrow.png' />
//                     </motion.div>
//                   </div>
//                 </motion.div>
//               </motion.div>
//             ))}
//           </motion.div>
//         </div>
//       </div>

//       {/* ── Food Menu ── */}
//       <div className='container py-5 my-sm-5'>
//         <motion.div
//           className='d-flex flex-wrap align-items-center justify-content-between'
//           variants={fadeUp}
//           initial="hidden"
//           whileInView="visible"
//           viewport={{ once: true }}
//         >
//           <div>
//             <h6 className='subtitle' style={{ justifySelf: "start" }}>Food Menu</h6>
//             <h2 className='text-uppercase mb-4 fw-bold'>Our delicious food</h2>
//           </div>
//           <div className='d-flex flex-wrap gap-2'>
//             {['All Food', 'Breakfast', 'Lunch', 'Dinner'].map((label, i) => (
//               <motion.div
//                 key={i}
//                 className='navBtn px-3 d-flex justify-content-center gap-3 align-items-center'
//                 style={{ width: "fit-content", height: "41px" }}
//                 whileHover={{ scale: 1.05 }}
//                 whileTap={{ scale: 0.96 }}
//                 transition={{ type: 'spring', stiffness: 350, damping: 20 }}
//               >
//                 <p className={`mb-0 fw-semibold text-uppercase ${i === 0 ? 'text-danger' : 'text-black'}`}>{label}</p>
//               </motion.div>
//             ))}
//           </div>
//         </motion.div>

//         <div className='row'>
//           <div className='col-md-4 d-md-block d-none'>
//             <div className='p-3' style={{ backgroundColor: "#f4f4f4" }}>
//               <div className='service-image mb-3' style={{ height: "32%", maxHeight: "215px", minHeight: "215px" }}>
//                 <img src="https://images.immediate.co.uk/production/volatile/sites/30/2022/08/Alfredo-dc662e3.jpg" className="card-img-top rounded-0" />
//               </div>
//               {[...Array(5)].map((_, i) => (
//                 <div key={i} className='d-flex justify-content-between align-items-start border-bottom pb-2 mb-2'>
//                   <div>
//                     <h5 className='mb-2'>Braised Short Ribs</h5>
//                     <p className='fs-6 para'>lorem spum fd uidds ssdd kllss pewer</p>
//                   </div>
//                   <p className='fw-semibold text-danger'>$15.00</p>
//                 </div>
//               ))}
//             </div>
//           </div>

//           <div className='col-md-8'>
//             <motion.div
//               className='row p-3'
//               style={{ backgroundColor: "#f4f4f4" }}
//               variants={staggerContainer}
//               initial="hidden"
//               whileInView="visible"
//               viewport={{ once: true, margin: '-40px' }}
//             >
//               {foods.map((food, index) => (
//                 <motion.div
//                   key={index}
//                   className="d-flex col-lg-3 col-sm-6 col-12 p-2"
//                   variants={staggerItem}
//                 >
//                   <motion.div
//                     className="card text-white w-100 d-flex flex-column border-0 rounded-0"
//                     whileHover={{ y: -5, boxShadow: '0 8px 24px rgba(0,0,0,0.1)' }}
//                     transition={{ type: 'spring', stiffness: 300, damping: 20 }}
//                   >
//                     <div className='service-image' style={{ height: "82%", maxHeight: "215px", minHeight: "215px" }}>
//                       <img src={food.img} className="card-img-top rounded-0" alt={food.name} />
//                     </div>
//                     <div className="card-body d-flex flex-column px-4 pb-4">
//                       <h6 className="card-title fw-semibold text-black text-center">{food.name}</h6>
//                       <p className="card-text text-danger text-center">{food.price}</p>
//                     </div>
//                   </motion.div>
//                 </motion.div>
//               ))}
//             </motion.div>
//           </div>
//         </div>
//       </div>

//       {/* ── Our Team ── */}
//       <div className='our-team'>
//         <div className='container py-5 my-5'>
//           <motion.h6
//             className='subtitle'
//             variants={fadeUp}
//             initial="hidden"
//             whileInView="visible"
//             viewport={{ once: true }}
//           >
//             Our Team
//           </motion.h6>
//           <motion.h2
//             className='text-uppercase mb-4 fw-bold text-center'
//             variants={fadeUp}
//             initial="hidden"
//             whileInView="visible"
//             viewport={{ once: true }}
//           >
//             Our Popular Chefs
//           </motion.h2>

//           <motion.div
//             className='chefs row'
//             variants={staggerContainer}
//             initial="hidden"
//             whileInView="visible"
//             viewport={{ once: true, margin: '-50px' }}
//           >
//             {chefs.map((chef, index) => (
//               <motion.div
//                 key={index}
//                 className="d-flex col-lg-3 col-md-4 col-sm-6 col-12 p-3"
//                 variants={staggerItem}
//               >
//                 <motion.div
//                   className="card bg-black text-white w-100 d-flex flex-column border-0 rounded-0"
//                   whileHover={{ y: -6, boxShadow: '0 12px 32px rgba(0,0,0,0.25)' }}
//                   transition={{ type: 'spring', stiffness: 300, damping: 20 }}
//                 >
//                   <div className='service-image' style={{ height: "82%", maxHeight: "360px" }}>
//                     <img src={chef.img} className="card-img-top rounded-0" alt={chef.name} />
//                   </div>
//                   <div className="card-body d-flex flex-column px-4 pb-4">
//                     <h5 className="card-title fw-semibold text-white text-uppercase">{chef.name}</h5>
//                     <p className="card-text para">{chef.post}</p>
//                   </div>
//                 </motion.div>
//               </motion.div>
//             ))}
//           </motion.div>
//         </div>
//       </div>

//       {/* ── Clients Feedback ── */}
//       <div className='container py-5 my-5'>
//         <motion.h6
//           className='subtitle'
//           variants={fadeUp}
//           initial="hidden"
//           whileInView="visible"
//           viewport={{ once: true }}
//         >
//           Clients Feedback
//         </motion.h6>
//         <motion.h2
//           className='text-uppercase mb-4 fw-bold text-center'
//           variants={fadeUp}
//           initial="hidden"
//           whileInView="visible"
//           viewport={{ once: true }}
//         >
//           What our customers says
//         </motion.h2>

//         <motion.div
//           className='row justify-content-center'
//           variants={staggerContainer}
//           initial="hidden"
//           whileInView="visible"
//           viewport={{ once: true }}
//         >
//           {[
//             {
//               img: 'https://img.freepik.com/free-photo/indian-woman-posing-cute-stylish-outfit-camera-smiling_482257-122351.jpg?semt=ais_hybrid&w=740&q=80',
//               name: 'Kuman Tunman', role: 'Waiter'
//             },
//             {
//               img: 'https://thumbs.dreamstime.com/b/smart-smiling-middle-aged-indian-business-man-26978835.jpg',
//               name: 'Kuman Tunman', role: 'Waiter'
//             }
//           ].map((client, index) => (
//             <motion.div
//               key={index}
//               className='col-lg-5 col-md-6 col-12 p-3'
//               variants={staggerItem}
//             >
//               <motion.div
//                 className='client-card d-flex flex-wrap gap-3 p-3'
//                 style={{ backgroundColor: "#ffefef" }}
//                 whileHover={{ y: -4, boxShadow: '0 8px 24px rgba(0,0,0,0.08)' }}
//                 transition={{ type: 'spring', stiffness: 300, damping: 20 }}
//               >
//                 <div className='d-flex flex-column'>
//                   <img src={client.img} className='img-fluid mb-3' style={{ maxHeight: "165px" }} />
//                   <img src='/assets/star.png' />
//                 </div>
//                 <div>
//                   <p>The scallops were perfectly cooked, tender, and flavorful, paired beautifully with a creamy
//                     risotto and seasonal vegetables. The presentation was artful, showcasing the chef's attention
//                     to detail. Highly recommend it for anyone looking for a memorable dining experience.</p>
//                   <div className='d-flex justify-content-between'>
//                     <div>
//                       <h5 className='fw-bold text-uppercase'>{client.name}</h5>
//                       <p className='para fs-6 mb-0'>{client.role}</p>
//                     </div>
//                     <img src='/assets/quotes.png' style={{ height: "33px" }} />
//                   </div>
//                 </div>
//               </motion.div>
//             </motion.div>
//           ))}
//         </motion.div>
//       </div>

//       <Footer />
//     </motion.div>
//   );
// };

// export default page;

'use client'
import React, { useState, useEffect, useRef } from 'react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import { useRouter } from 'next/navigation'
import {
  motion,
  useScroll,
  useTransform,
  useInView,
  AnimatePresence,
} from 'framer-motion'

// ─────────────────────────────────────────────
// Animation Variants
// ─────────────────────────────────────────────

const fadeUp = {
  hidden:  { opacity: 0, y: 56 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.75, ease: [0.22, 1, 0.36, 1] } },
}

const fadeUpSlow = {
  hidden:  { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 1, ease: [0.22, 1, 0.36, 1] } },
}

const slideLeft = {
  hidden:  { opacity: 0, x: -72 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.85, ease: [0.22, 1, 0.36, 1] } },
}

const slideRight = {
  hidden:  { opacity: 0, x: 72 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.85, ease: [0.22, 1, 0.36, 1] } },
}

const staggerContainer = {
  hidden:  {},
  visible: { transition: { staggerChildren: 0.11, delayChildren: 0.05 } },
}

const staggerItem = {
  hidden:  { opacity: 0, y: 44 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] } },
}

const scaleUp = {
  hidden:  { opacity: 0, scale: 0.88 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
}

// Viewport config reused everywhere
const VP = { once: true, amount: 0.15 }

// ─────────────────────────────────────────────
// Animated Counter
// ─────────────────────────────────────────────
function AnimatedCounter({ raw, suffix }) {
  const [count, setCount] = useState(0)
  const ref  = useRef(null)
  const inView = useInView(ref, { once: true })

  useEffect(() => {
    if (!inView) return
    let start = 0
    const step = raw / (1800 / 16)
    const id = setInterval(() => {
      start += step
      if (start >= raw) { setCount(raw); clearInterval(id) }
      else setCount(Math.floor(start))
    }, 16)
    return () => clearInterval(id)
  }, [inView, raw])

  return <span ref={ref}>{count}{suffix}</span>
}

// ─────────────────────────────────────────────
// Data
// ─────────────────────────────────────────────
const stats = [
  { raw: 15,  suffix: '+', label: 'Years Experience' },
  { raw: 120, suffix: '+', label: 'Menu Items'       },
  { raw: 50,  suffix: 'K+',label: 'Happy Guests'     },
  { raw: 12,  suffix: '',  label: 'Expert Chefs'     },
]

const services = [
  {
    img: 'https://media.istockphoto.com/id/650655146/photo/catering-food-wedding-event-table.jpg?s=612x612&w=0&k=20&c=ATGYgW8bM_559jJ5aUNO4HlJqpkOWUmNNMMflx5kajo=',
    title: 'Wedding Service',
    icon: '💍',
    desc: 'Rich, indulgent and crafted for your perfect day — every detail tailored with love and precision.',
  },
  {
    img: 'https://img.freepik.com/premium-photo/catering-beautifully-laid-party-table-lots-food-various-snacks_583887-431.jpg',
    title: 'Party Service',
    icon: '🎉',
    desc: 'From intimate gatherings to grand celebrations — every plate tells a story of warmth and flavor.',
  },
  {
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQY1CJ2F-RMQcaA70G9TAarmYydFOg-MfmfBbmyXO3DBGt4ycaB_5cJ1IurcHbMR4ZJwt4&usqp=CAU',
    title: 'Buffet Service',
    icon: '🍽️',
    desc: 'An abundant spread of curated global flavors — explore freely and savor every moment.',
  },
]

const chefs = [
  { img: 'https://img.freepik.com/free-photo/portrait-confident-male-chef-kitchen_23-2147863584.jpg?semt=ais_hybrid&w=740&q=80', name: 'Naman Kumar',   post: 'Executive Chef',              exp: '12 Yrs' },
  { img: 'https://thumbs.dreamstime.com/b/female-chef-14984977.jpg',                                                               name: 'Shefali Mehta', post: 'Head of Culinary Innovation', exp: '9 Yrs'  },
  { img: 'https://www.shutterstock.com/image-photo/asian-indian-young-male-chef-600nw-2488047379.jpg',                             name: 'Raghav Singh',  post: 'Seafood Specialist',          exp: '7 Yrs'  },
  { img: 'https://plus.unsplash.com/premium_photo-1661778091956-15dbe6e47442?fm=jpg&q=60&w=3000',                                  name: 'Ananya Sharma', post: 'Pastry & Dessert Chef',       exp: '8 Yrs'  },
]

const foods = [
  { name: 'Classic Caesar Salad',   category: 'Lunch',     img: 'https://feelgoodfoodie.net/wp-content/uploads/2020/04/Caesar-Salad-TIMG.jpg',                                                                                                                              price: '$15.00' },
  { name: 'Spaghetti Aglio',        category: 'Dinner',    img: 'https://mediterraneantaste.com/wp-content/uploads/2025/08/spaghetti-aglio-e-olio-0022.jpg',                                                                                                   price: '$18.00' },
  { name: 'Chocolate Lava Cake',    category: 'Dessert',   img: 'https://www.verybestbaking.com/sites/g/files/jgfbjl326/files/styles/large/public/recipe-thumbnail/116744-bd4b61de9035d59377d72c224a320cbd_Lava_Cake.jpg?itok=k_dLaW-U',                                   price: '$25.00' },
  { name: 'Alfredo Pasta',          category: 'Dinner',    img: 'https://images.immediate.co.uk/production/volatile/sites/30/2022/08/Alfredo-dc662e3.jpg',                                                                                                                  price: '$23.00' },
  { name: 'Margherita Pizza',       category: 'Breakfast', img: 'https://grandecheese.com/wp-content/uploads/2025/02/Margherita-Pizza-deck-oven.jpg.webp',                                                                                                                  price: '$15.00' },
  { name: 'Vegetable Biryani',      category: 'Lunch',     img: 'https://www.indianveggiedelight.com/wp-content/uploads/2020/04/veg-biryani-instant-pot.jpg',                                                                                                               price: '$15.00' },
  { name: 'Paneer Butter Masala',   category: 'Dinner',    img: 'https://www.ruchiskitchen.com/wp-content/uploads/2020/12/Paneer-butter-masala-recipe-3-500x500.jpg',                                                                                                       price: '$12.00' },
  { name: 'Avocado Toast',          category: 'Breakfast', img: 'https://allnutritionkitchen.com/wp-content/uploads/2024/06/avocado-cottage-cheese-toast.jpg',                                                                                                              price: '$24.00' },
]

const categories = ['All', 'Breakfast', 'Lunch', 'Dinner', 'Dessert']

const testimonials = [
  {
    img:  'https://img.freepik.com/free-photo/indian-woman-posing-cute-stylish-outfit-camera-smiling_482257-122351.jpg?semt=ais_hybrid&w=740&q=80',
    name: 'Priya Sharma', role: 'Food Blogger',
    text: 'The scallops were perfectly cooked — tender and flavorful, paired with creamy risotto. The chef\'s attention to detail is extraordinary. A truly memorable dining experience!',
  },
  {
    img:  'https://thumbs.dreamstime.com/b/smart-smiling-middle-aged-indian-business-man-26978835.jpg',
    name: 'Arjun Mehta', role: 'Regular Guest',
    text: 'I\'ve dined here over a dozen times and the quality never wavers. The ambiance is romantic, service impeccable, and the food consistently blows me away.',
  },
]

// ─────────────────────────────────────────────
// Page
// ─────────────────────────────────────────────
export default function Page() {
  const router = useRouter()
  const [activeCategory, setActiveCategory] = useState('All')
  const [hoveredFood, setHoveredFood]       = useState(null)

  // Parallax for hero bg
  const heroRef = useRef(null)
  const { scrollY } = useScroll()
  const heroBgY      = useTransform(scrollY, [0, 700], ['0%', '25%'])
  const heroOpacity  = useTransform(scrollY, [0, 500], [1, 0])

  const filteredFoods =
    activeCategory === 'All'
      ? foods
      : foods.filter(f => f.category === activeCategory)

  return (
    <div className="home-root">
      <Navbar />

      {/* ══════════════════════════════════════
          HERO
      ══════════════════════════════════════ */}
      <section className="hero-section" ref={heroRef}>
        {/* Parallax background */}
        <motion.div
          className="hero-bg"
          style={{ y: heroBgY }}
        />
        {/* Overlay */}
        <div className="hero-overlay" />

        {/* Content */}
        <motion.div className="hero-content" style={{ opacity: heroOpacity }}>

          {/* Badge */}
          <motion.div
            className="hero-badge"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
          >
            <span className="hero-badge-dot" />
            Est. 2009 — Fine Dining
          </motion.div>

          {/* Sub heading */}
          <motion.p
            className="hero-sub"
            initial={{ opacity: 0, y: 30, filter: 'blur(6px)' }}
            animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            transition={{ duration: 0.75, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          >
            The Great
          </motion.p>

          {/* Main heading */}
          <motion.h1
            className="hero-heading"
            initial={{ opacity: 0, y: 48, filter: 'blur(10px)' }}
            animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            transition={{ duration: 0.85, delay: 0.45, ease: [0.22, 1, 0.36, 1] }}
          >
            Flavored{' '}
            <span className="hero-heading-outline">Food</span>
          </motion.h1>

          {/* Divider row */}
          <motion.div
            className="hero-divider-row"
            initial={{ opacity: 0, scaleX: 0 }}
            animate={{ opacity: 1, scaleX: 1 }}
            transition={{ duration: 0.7, delay: 0.6, ease: [0.22, 1, 0.36, 1] }}
          >
            <span className="hero-line" />
            <span className="hero-divider-text">Part Of Us</span>
            <span className="hero-line" />
          </motion.div>

          {/* CTAs */}
          <motion.div
            className="hero-ctas"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.75, ease: [0.22, 1, 0.36, 1] }}
          >
            <motion.button
              className="btn-primary-red"
              onClick={() => router.push('/booking')}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Book a Table
              <img src="/assets/red_arrow.png" alt="" className="btn-arrow" />
            </motion.button>

            <motion.button
              className="btn-ghost-white"
              whileHover={{ backgroundColor: 'rgba(255,255,255,0.15)' }}
              whileTap={{ scale: 0.95 }}
            >
              View Menu
            </motion.button>
          </motion.div>

          
        </motion.div>
      </section>

      {/* ══════════════════════════════════════
          STATS BAR
      ══════════════════════════════════════ */}
      <motion.section
        className="stats-bar"
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={VP}
      >
        {stats.map((s, i) => (
          <motion.div key={i} className="stat-item" variants={scaleUp}>
            <p className="stat-value">
              <AnimatedCounter raw={s.raw} suffix={s.suffix} />
            </p>
            <p className="stat-label">{s.label}</p>
          </motion.div>
        ))}
      </motion.section>

      {/* ══════════════════════════════════════
          RESERVATION
      ══════════════════════════════════════ */}
      <section className="container section-gap">
        <div className="row align-items-center g-5">

          {/* Image */}
          <motion.div
            className="col-md-6 order-2 order-md-1"
            variants={slideLeft}
            initial="hidden"
            whileInView="visible"
            viewport={VP}
          >
            <div className="img-frame">
              <motion.img
                src="https://www.oberoihotels.com/-/media/oberoi-hotel/the-oberoi-gurgaon/gurgaon-resized/ziya/820x646/evening_shot_at_ziya_gurgaon.jpg"
                className="img-fluid"
                alt="Restaurant interior"
                whileHover={{ scale: 1.04 }}
                transition={{ duration: 0.55 }}
              />
              <span className="img-award-badge">✦ Award Winning</span>
            </div>
          </motion.div>

          {/* Text */}
          <motion.div
            className="col-md-6 order-1 order-md-2"
            variants={slideRight}
            initial="hidden"
            whileInView="visible"
            viewport={VP}
          >
            <h6 className="subtitle" style={{justifySelf:"flex-start"}}>Reservation</h6>
            <h2 className="reservation-heading">
              Welcome To Our <br />
              <span className="text-red">Luxury</span> Restaurant
            </h2>
            <p className="para reservation-para">
              The scallops were perfectly cooked, tender and flavorful, paired
              beautifully with a creamy risotto and seasonal vegetables. The
              presentation was artful — showcasing the chef's extraordinary
              attention to detail.
            </p>

            {/* Feature tags */}
            <motion.div
              className="feature-tags"
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={VP}
            >
              {['Free Wi-Fi', 'Private Dining', 'Live Music'].map((tag, i) => (
                <motion.span
                  key={i}
                  className="feature-tag"
                  variants={scaleUp}
                  whileHover={{ backgroundColor: '#CB3A1A', color: '#fff', borderColor: '#CB3A1A' }}
                >
                  {tag}
                </motion.span>
              ))}
            </motion.div>

            <motion.button
              className="btn-primary-red mt-4"
              onClick={() => router.push('/booking')}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Book a Table
              <img src="/assets/red_arrow.png" alt="" className="btn-arrow" />
            </motion.button>
          </motion.div>
        </div>
      </section>

      {/* ══════════════════════════════════════
          OUR SERVICES
      ══════════════════════════════════════ */}
      <section className="our-services section-gap-y">
        <div className="container">

          <motion.div
            className="section-header"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={VP}
          >
            <h6 className="subtitle">Our Services</h6>
            <h2 className="mt-3">Our Restaurant <span className="text-red">Service</span></h2>
            <p className="para mt-2 section-sub">Crafted experiences for every occasion — from intimate dinners to grand celebrations.</p>
          </motion.div>

          <motion.div
            className="row mt-4"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={VP}
          >
            {services.map((item, i) => (
              <motion.div key={i} className="col-lg-4 col-sm-6 col-12 p-3" variants={staggerItem}>
                <motion.div
                  className="service-card"
                  whileHover="hover"
                  initial="rest"
                  animate="rest"
                >
                  {/* Image wrapper */}
                  <div className="service-card-img-wrap">
                    <motion.img
                      src={item.img}
                      alt={item.title}
                      className="service-card-img"
                      variants={{ rest: { scale: 1 }, hover: { scale: 1.06 } }}
                      transition={{ duration: 0.55 }}
                    />
                    <span className="service-icon-badge">{item.icon}</span>
                  </div>

                  {/* Body */}
                  <div className="service-card-body">
                    <motion.div
                      className="service-card-redline"
                      variants={{ rest: { scaleX: 0 }, hover: { scaleX: 1 } }}
                      transition={{ duration: 0.4 }}
                    />
                    <h5 className="service-card-title">{item.title}</h5>
                    <p className="para service-card-desc">{item.desc}</p>
                    <motion.button
                      className="btn-outline-red"
                      whileHover={{ scale: 1.04 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      Read More
                      <img src="/assets/red_arrow.png" alt="" className="btn-arrow" />
                    </motion.button>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ══════════════════════════════════════
          FOOD MENU
      ══════════════════════════════════════ */}
      <section className="container section-gap">

        <motion.div
          className="food-menu-header"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={VP}
        >
          <div>
            <h6 className="subtitle" style={{justifySelf:"flex-start"}}>Food Menu</h6>
            <h2 className="mt-3">Our <span className="text-red">Delicious</span> Food</h2>
          </div>
          {/* Filter buttons */}
          <div className="food-filter-btns">
            {categories.map((cat, i) => (
              <motion.button
                key={i}
                className={`food-filter-btn ${activeCategory === cat ? 'active' : ''}`}
                onClick={() => setActiveCategory(cat)}
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.94 }}
                layout
              >
                {cat}
              </motion.button>
            ))}
          </div>
        </motion.div>

        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            className="row g-3 mt-2"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.4 }}
          >
            {filteredFoods.map((food, i) => (
              <motion.div
                key={food.name}
                className="col-lg-3 col-sm-6 col-12"
                initial={{ opacity: 0, scale: 0.88 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: i * 0.06 }}
              >
                <motion.div
                  className="food-card"
                  onHoverStart={() => setHoveredFood(food.name)}
                  onHoverEnd={() => setHoveredFood(null)}
                  whileHover={{ y: -8, boxShadow: '0 16px 40px rgba(0,0,0,0.13)' }}
                  transition={{ type: 'spring', stiffness: 300, damping: 22 }}
                >
                  <div className="food-card-img-wrap">
                    <motion.img
                      src={food.img}
                      alt={food.name}
                      className="food-card-img"
                      animate={{ scale: hoveredFood === food.name ? 1.1 : 1 }}
                      transition={{ duration: 0.5 }}
                    />
                    <motion.div
                      className="food-card-overlay"
                      animate={{ opacity: hoveredFood === food.name ? 1 : 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <span className="food-cat-badge">{food.category}</span>
                    </motion.div>
                  </div>
                  <div className="food-card-body">
                    <h6 className="food-card-name">{food.name}</h6>
                    <p className="food-card-price">{food.price}</p>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </section>

      {/* ══════════════════════════════════════
          OUR TEAM
      ══════════════════════════════════════ */}
      <section className="our-team">
        <div className="container section-gap-y">

          <motion.div
            className="section-header"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={VP}
          >
            <h6 className="subtitle">Our Team</h6>
            <h2 className="mt-3">Our Popular <span className="text-red">Chefs</span></h2>
          </motion.div>

          <motion.div
            className="row mt-4"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={VP}
          >
            {chefs.map((chef, i) => (
              <motion.div
                key={i}
                className="col-lg-3 col-md-4 col-sm-6 col-12 p-3"
                variants={staggerItem}
              >
                <motion.div
                  className="chef-card"
                  whileHover="hover"
                  initial="rest"
                  animate="rest"
                >
                  <div className="chef-img-wrap">
                    <motion.img
                      src={chef.img}
                      alt={chef.name}
                      className="chef-img"
                      variants={{ rest: { scale: 1 }, hover: { scale: 1.07 } }}
                      transition={{ duration: 0.6 }}
                    />
                    <motion.div
                      className="chef-overlay"
                      variants={{ rest: { opacity: 0 }, hover: { opacity: 1 } }}
                      transition={{ duration: 0.3 }}
                    >
                      <span className="chef-exp-badge">{chef.exp}</span>
                    </motion.div>
                  </div>
                  <div className="chef-card-body">
                    <h5 className="chef-name">{chef.name}</h5>
                    <p className="para chef-post">{chef.post}</p>
                    <motion.div
                      className="chef-socials"
                      variants={{ rest: { y: 10, opacity: 0 }, hover: { y: 0, opacity: 1 } }}
                      transition={{ duration: 0.3 }}
                    >
                      {['IG', 'TW', 'FB'].map(s => (
                        <span key={s} className="chef-social-dot" />
                      ))}
                    </motion.div>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ══════════════════════════════════════
          TESTIMONIALS
      ══════════════════════════════════════ */}
      <section className="container section-gap">

        <motion.div
          className="section-header"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={VP}
        >
          <h6 className="subtitle">Clients Feedback</h6>
          <h2 className="mt-3">What Our <span className="text-red">Customers</span> Say</h2>
        </motion.div>

        <motion.div
          className="row justify-content-center mt-4"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={VP}
        >
          {testimonials.map((t, i) => (
            <motion.div key={i} className="col-lg-5 col-md-6 col-12 p-3" variants={staggerItem}>
              <motion.div
                className="testimonial-card"
                whileHover={{ y: -6, boxShadow: '0 20px 50px rgba(203,58,26,0.1)' }}
                transition={{ type: 'spring', stiffness: 280, damping: 22 }}
              >
                <span className="testimonial-quote-mark">❝</span>
                <p className="testimonial-text">{t.text}</p>
                <span className="testimonial-stars">★★★★★</span>
                <div className="testimonial-author">
                  <img src={t.img} alt={t.name} className="testimonial-avatar" />
                  <div>
                    <h6 className="testimonial-name">{t.name}</h6>
                    <p className="para testimonial-role">{t.role}</p>
                  </div>
                  <img src="/assets/quotes.png" alt="" className="testimonial-quotes-icon" />
                </div>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* ══════════════════════════════════════
          CTA BANNER
      ══════════════════════════════════════ */}
      <motion.section
        className="cta-banner"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={VP}
        transition={{ duration: 0.9 }}
      >
        <motion.div
          initial={{ y: 36, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={VP}
          transition={{ duration: 0.75, delay: 0.2 }}
        >
          <h6 className="subtitle cta-subtitle">Reserve Now</h6>
          <h2 className="cta-heading">
            Ready for an Unforgettable<br />Dining Experience?
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