import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

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

const page = () => {

  
  return (
    <>
    <Navbar/>

     <div className='booking-herosection d-flex align-items-center justify-content-center'>
         <div className='booking-herosection-text d-flex flex-column align-items-center justify-content-center'>
          <h1 className='text-white'>OUR CHEFS</h1>
          <p className='text-white'>HOME / OUR CHEFS</p>
      </div>
     </div>

      {/* our team */}
        
        <div className='our-team2'>
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
          className=" d-flex col-lg-4 col-md-4 col-sm-6 col-12 p-3"
        >
          <div className="card  text-white w-100 d-flex flex-column border-0  rounded-0 p-3" style={{backgroundColor:"rgb(241 241 241)"}}>
            <div className='service-image' style={{height:"82%" , maxHeight:"360px"}}>
              <img src={chef.img} className="card-img-top rounded-0" alt={chef.name} />
            </div>
            <div className="card-body d-flex flex-column p-0 pt-3">
              <h5 className="card-title fw-semibold text-black text-center text-uppercase">{chef?.name}</h5>
              <p className="card-text  para text-center">{chef?.post}</p>

             
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

    <Footer/>
      
    </>
  )
}

export default page
