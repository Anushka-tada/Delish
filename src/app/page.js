
'use client'
import React from 'react'
import Navbar from './components/Navbar'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
// import './slider.css';

const data = [
  {
    img: 'https://media.istockphoto.com/id/650655146/photo/catering-food-wedding-event-table.jpg?s=612x612&w=0&k=20&c=ATGYgW8bM_559jJ5aUNO4HlJqpkOWUmNNMMflx5kajo=',
    title: 'Wedding Service',
    desc: 'The chocolate fondant which did not disappoint It was rich and indulgent, with a gooey center that was pure bliss.'
  },
  {
    img: 'https://chaingupshup.com/wp-content/uploads/2024/01/table-with-delicious-sweets-covered-with-pink-silk-scaled.jpg',
    title: 'Party Service',
    desc: 'Assertively myocardinate robust e-tailers for extensible human capital. dpropriately benchmark networks.'
  },
  
  {
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQY1CJ2F-RMQcaA70G9TAarmYydFOg-MfmfBbmyXO3DBGt4ycaB_5cJ1IurcHbMR4ZJwt4&usqp=CAU',
    title: 'Buffet Service',
    desc: 'Assertively myocardinate robust e-tailers for extensible human capital. dpropriately benchmark networks.'
  }
]

const page = () => {

  //  const [sliderRef] = useKeenSlider({
  //   loop: true,
  //   slides: {
  //     perView: 3,
  //     spacing: 15,
  //   },
  // })

  return (
    <div>
      <Navbar/>

      {/* herosection */}

     <div className='herosection'>
        <div className='container text-white'>
            <h2>The Great</h2>
            <h1>Flavored Food</h1>
            <div className='d-flex gap-3 align-items-center justify-content-center'>
              <img src='/assets/white_line.png' style={{height:"1px"}}></img>
              <h2>Part Of Us</h2>
               <img src='/assets/white_line.png' style={{height:"1px"}}></img>
            </div>

            <div className="d-flex gap-4 justify-content-center mt-4">
               <p>BOOK A TABLE</p>

               <p>VIEW MENU</p>
            </div>
      </div>
     </div>


     {/* reservation */}

     <div className='container py-5 my-5'>
     <div className='row align-items-center'>
    <div className='col-6'>
      <img src='https://www.oberoihotels.com/-/media/oberoi-hotel/the-oberoi-gurgaon/gurgaon-resized/ziya/820x646/evening_shot_at_ziya_gurgaon.jpg' className='img-fluid'></img>
    </div>

    <div className='col-6 ps-5'>
         <h6 className='subtitle' style={{justifySelf:"start"}}>
              Reservation
             </h6>

             <h2 className='text-uppercase mb-4'>Welcome To our  <br></br>Luxury Restaurant</h2>
             <p className=" para mb-4">The scallops were perfectly cooked, tender, and flavorful, paired beautifully with a creamy risotto and seasonal vegetables. The presentation was artful, showcasing the chef's attention to detail.</p>
             <div className='navBtn px-3 d-flex justify-content-center gap-3 align-items-center ' style={{width:"fit-content" , height:"41px"}}>
            <p className='mb-0 text-danger fw-semibold text-uppercase'>Book a table</p>
            <img src='/assets/red_arrow.png'></img>
           </div>

    </div>
     </div>
     </div>

     {/* slider */}
       
       <div className='our-services py-5'>
<div className='container py-5 '>
             <h6 className='subtitle'>
              Our Services
             </h6>
            <h2 className='text-center'>Our Restaurant Service</h2>
             <div
              // ref={sliderRef} 
             className="row">
      {data.map((item, index) => (
        <div
          key={index}
          className=" d-flex align-items-stretch col-4 p-3"
        >
          <div className="card bg-white text-white w-100 d-flex flex-column border-0 rounded-0">
            <div className='service-image p-3 '>
              <img src={item.img} className="card-img-top rounded-0" alt={item.title} />
            </div>
            <div className="card-body d-flex flex-column px-4 pb-4">
              <h5 className="card-title fw-semibold text-black text-uppercase">{item.title}</h5>
              <p className="card-text flex-grow-1 para">{item.desc}</p>

              <div className='navBtn px-3 d-flex justify-content-center gap-3 align-items-center ' style={{width:"fit-content" , height:"41px"}}>
            <p className='mb-0 text-danger fw-semibold text-uppercase'>Read More</p>
            <img src='/assets/red_arrow.png'></img>
           </div>
            </div>
          </div>
        </div>
      ))}
    </div>
       </div>
       </div>
     
    </div>
  )
}

export default page
