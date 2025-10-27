
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
];

const foods = [
  {
    name: "Classic Caesar Salad",
    category: "Lunch",
    img: "https://feelgoodfoodie.net/wp-content/uploads/2020/04/Caesar-Salad-TIMG.jpg",
    price:"$15.00"
  },
  {
  name: "Spaghetti Aglio",
  category: "Dinner",
  img: "https://walkingthroughlavenderfields.com/wp-content/uploads/2022/09/aglio-e-olio-e-peperoncino-01.jpeg",
   price:"$18.00"
},

  {
    name: "Chocolate Lava Cake",
    category: "Dessert",
    img: "https://www.verybestbaking.com/sites/g/files/jgfbjl326/files/styles/large/public/recipe-thumbnail/116744-bd4b61de9035d59377d72c224a320cbd_Lava_Cake.jpg?itok=k_dLaW-U",
     price:"$25.00"
  },
  {
    name: "Alfredo Pasta",
    category: "Dinner",
    img: "https://images.immediate.co.uk/production/volatile/sites/30/2022/08/Alfredo-dc662e3.jpg",
     price:"$23.00"
  },
  {
    name: "Margherita Pizza",
    category: "All",
    img: "https://grandecheese.com/wp-content/uploads/2025/02/Margherita-Pizza-deck-oven.jpg.webp",
     price:"$15.00"
  },
  {
    name: "Vegetable Biryani",
    category: "Lunch",
    img: "https://www.indianveggiedelight.com/wp-content/uploads/2020/04/veg-biryani-instant-pot.jpg",
     price:"$15.00"
  },
  {
    name: "Paneer Butter Masala",
    category: "Dinner",
    img: "https://www.ruchiskitchen.com/wp-content/uploads/2020/12/Paneer-butter-masala-recipe-3-500x500.jpg",
     price:"$12.00"
  },
  {
    name: "Avocado Toast",
    category: "Breakfast",
    img: "https://allnutritionkitchen.com/wp-content/uploads/2024/06/avocado-cottage-cheese-toast.jpg",
     price:"$24.00"
  },
  // {
  //   name: "Veg Club Sandwich",
  //   category: "Lunch",
  //   img: "https://static.toiimg.com/thumb/83740315.cms?imgsize=361903&width=800&height=800",
  //    price:"$21.00"
  // }

];


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
          <div className="card bg-white text-white w-100 d-flex flex-column border-0  rounded-0">
            <div className='service-image p-3'>
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

       

     {/* our food */}


       <div className='container py-5 my-5'>
     <div className='d-flex align-items-center justify-content-between'>
    <div className=''>
         <h6 className='subtitle' style={{justifySelf:"start"}}>
              Food Menu
             </h6>

             <h2 className='text-uppercase mb-4 fw-bold '>Our delicious food</h2>
       </div>
       
         <div className='d-flex gap-2'>
          <div className='navBtn px-3 d-flex justify-content-center gap-3 align-items-center ' style={{width:"fit-content" , height:"41px"}}>
            <p className='mb-0 text-danger fw-semibold text-uppercase'>All Food</p>
      
           </div>

            <div className='navBtn px-3 d-flex justify-content-center gap-3 align-items-center ' style={{width:"fit-content" , height:"41px"}}>
            <p className='mb-0 text-black fw-semibold text-uppercase'>Breakfast</p>
           </div>

            <div className='navBtn px-3 d-flex justify-content-center gap-3 align-items-center ' style={{width:"fit-content" , height:"41px"}}>
            <p className='mb-0 text-black fw-semibold text-uppercase'>Lunch</p>
           </div>

            <div className='navBtn px-3 d-flex justify-content-center gap-3 align-items-center ' style={{width:"fit-content" , height:"41px"}}>
            <p className='mb-0 text-black fw-semibold text-uppercase'>Dinner</p>
           </div>
         </div>

     </div>

     <div className='row'>
      <div className='col-4'>
          <div className='p-3'  style={{backgroundColor:"#f4f4f4"}}>
              <div>
                   <div className='service-image mb-3' style={{height:"32%" , maxHeight:"215px" , minHeight:"215px"}}>
              <img src="https://images.immediate.co.uk/production/volatile/sites/30/2022/08/Alfredo-dc662e3.jpg" className="card-img-top rounded-0"  />
            </div>

            <div className='d-flex justify-content-between align-items-start border-bottom pb-2 mb-2'>
               <div>
                <h5 className='mb-2'>Braised Short Ribs</h5>
               <p className=' fs-6 para'> lorem spum fd uidds ssdd kllss pewer
               </p>
               </div>
               <p className=' fw-semibold text-danger'>$15.00</p>
            </div>

             <div className='d-flex justify-content-between align-items-start border-bottom pb-2 mb-2'>
               <div>
                <h5 className='mb-2'>Braised Short Ribs</h5>
               <p className=' fs-6 para'> lorem spum fd uidds ssdd kllss pewer
               </p>
               </div>
               <p className=' fw-semibold text-danger'>$15.00</p>
            </div>

             <div className='d-flex justify-content-between align-items-start border-bottom pb-2 mb-2'>
               <div>
                <h5 className='mb-2'>Braised Short Ribs</h5>
               <p className=' fs-6 para'> lorem spum fd uidds ssdd kllss pewer
               </p>
               </div>
               <p className=' fw-semibold text-danger'>$15.00</p>
            </div>

             <div className='d-flex justify-content-between align-items-start border-bottom pb-2 mb-2'>
               <div>
                <h5 className='mb-2'>Braised Short Ribs</h5>
               <p className=' fs-6 para'> lorem spum fd uidds ssdd kllss pewer
               </p>
               </div>
               <p className=' fw-semibold text-danger'>$15.00</p>
            </div>

             <div className='d-flex justify-content-between align-items-start border-bottom pb-2 mb-2'>
               <div>
                <h5 className='mb-2'>Braised Short Ribs</h5>
               <p className=' fs-6 para'> lorem spum fd uidds ssdd kllss pewer
               </p>
               </div>
               <p className=' fw-semibold text-danger'>$15.00</p>
            </div>
              </div>
          </div>
      </div>
      <div className='col-8'>
        <div className='row p-3 ' style={{backgroundColor:"#f4f4f4"}}>
         {
              foods.map((food , index) => (
                 <div
          key={index}
          className=" d-flex col-3 p-2"
        >
          <div className="card text-white w-100 d-flex flex-column border-0  rounded-0">
            <div className='service-image' style={{height:"82%" , maxHeight:"215px" , minHeight:"215px"}}>
              <img src={food.img} className="card-img-top rounded-0" alt={food.name} />
            </div>
            <div className="card-body d-flex flex-column px-4 pb-4">
              <h6 className="card-title fw-semibold  text-black  text-center">{food?.name}</h6>
              <p className="card-text text-danger text-center">{food?.price}</p>
            </div>
          </div>
        </div>
              ))
             }
        </div>

      </div>
     </div>
     </div>

     {/* our team */}
        
        <div className='our-team'>
        <div className='container py-5 my-5'>
     <div className='row align-items-center'>
    <div className=''>
         <h6 className='subtitle'>
              Our Team
             </h6>

             <h2 className='text-uppercase mb-4 fw-bold text-center'>OUr Popular chefs</h2>
             
             <div className='chefs row'>
             {
              chefs.map((chef , index) => (
                 <div
          key={index}
          className=" d-flex col-3 p-3"
        >
          <div className="card bg-black text-white w-100 d-flex flex-column border-0  rounded-0">
            <div className='service-image' style={{height:"82%" , maxHeight:"360px"}}>
              <img src={chef.img} className="card-img-top rounded-0" alt={chef.name} />
            </div>
            <div className="card-body d-flex flex-column px-4 pb-4">
              <h5 className="card-title fw-semibold text-white text-uppercase">{chef?.name}</h5>
              <p className="card-text  para">{chef?.post}</p>

             
            </div>
          </div>
        </div>
              ))
             }
             </div>

    </div>
     </div>
     </div>
     </div>

     {/* clients feedback */}

    
        <div className='container py-5 my-5'>
     <div className='row align-items-center'>
    <div className=''>
         <h6 className='subtitle'>
              Clients Feedback
             </h6>

             <h2 className='text-uppercase mb-4 fw-bold text-center'>What our customers says</h2>
             
             <div className='row justify-content-center'>
              <div className='col-5 p-3'>
                <div className='client-card d-flex gap-3 p-3' style={{backgroundColor:"#ffefef"}}>
                 <div>
                  <img src='https://img.freepik.com/free-photo/indian-woman-posing-cute-stylish-outfit-camera-smiling_482257-122351.jpg?semt=ais_hybrid&w=740&q=80' className='img-fluid mb-3' style={{maxHeight:"165px"}}></img>

                  <img src='/assets/star.png'></img>

                 </div>
                 <div>
                  <p>The scallops were perfectly cooked, tender, and flavorful, paired beautifully with a creamy risotto and seasonal vegetables. The presentation was artful, showcasing the chef's attention to detail.  highly recommend it for anyone looking for a memorable dining experience.</p>

                 <div className='d-flex justify-content-between'>
                   <div>
                    <h5 className='fw-bold text-uppercase '>kuman tunman</h5>
                  <p className='para fs-6 mb-0 '>Waiter</p>
                   </div>
                   <img src='/assets/quotes.png' style={{height:"33px"}}></img>
                 </div>
                 </div>
                </div>
                

              </div>

              <div className='col-5 p-3'>
                <div className='client-card d-flex gap-3 p-3' style={{backgroundColor:"#ffefef"}}>
                 <div>
                  <img src='https://thumbs.dreamstime.com/b/smart-smiling-middle-aged-indian-business-man-26978835.jpg' className='img-fluid mb-3' style={{maxHeight:"165px"}}></img>

                  <img src='/assets/star.png'></img>

                 </div>
                 <div>
                  <p>The scallops were perfectly cooked, tender, and flavorful, paired beautifully with a creamy risotto and seasonal vegetables. The presentation was artful, showcasing the chef's attention to detail.  highly recommend it for anyone looking for a memorable dining experience.</p>

                 <div className='d-flex justify-content-between'>
                   <div>
                    <h5 className='fw-bold text-uppercase '>kuman tunman</h5>
                  <p className='para fs-6 mb-0 '>Waiter</p>
                   </div>
                   <img src='/assets/quotes.png' style={{height:"33px"}}></img>
                 </div>
                 </div>
                </div>
                

              </div>
            
             </div>

    </div>
     </div>
     </div>
    

     
    </div>
  )
}

export default page
