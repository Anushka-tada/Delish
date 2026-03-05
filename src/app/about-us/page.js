import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const page = () => {
  return (
    <>
    <Navbar/>

    <div className="booking-herosection d-flex align-items-center justify-content-center">
        <div className="booking-herosection-text d-flex flex-column align-items-center justify-content-center">
          <h1 className="text-white">ABOUT US</h1>
          <p className="text-white">HOME / ABOUT US</p>
        </div>
      </div>

      {/* our delicious food section */}

      <div className='container py-5 mt-5'>
       <div className='row justify-content-center align-items-center'>
        <div className='col-5'>
           <h6 className='subtitle mb-3' style={{justifySelf:"start"}}>
              Reservation
             </h6>

             <h2 className='mb-5'>Delicious Food For Healthy Life</h2>

             <div className='d-flex gap-4 align-items-center mb-4'>

                <img src='/assets/about-icon-1.png' style={{height:"fit-content"}} className=''></img>

                <div className='ps-4' style={{borderLeft:"2px solid #cdcdcd"}}>
                    <h4>Quality Food</h4>
                    <p className='para'>The wise man therefore always holds Indies matters this
principle information</p>
                </div>

             </div>

             <div className='d-flex gap-4 align-items-center'>

                <img src='/assets/about-icon-2.png' style={{height:"fit-content"}} className=''></img>

                <div className='ps-4' style={{borderLeft:"2px solid #cdcdcd"}}>
                    <h4>Supply Chain Maintain</h4>
                    <p className='para'>The wise man therefore always holds Indies matters this
principle information</p>
                </div>

             </div>

             <button className='about-btn p-2 px-5  mt-5 bg-white'>BOOK A TABLE</button>
        </div>
        <div className='col-5 d-flex align-items-center'>
          <img src='https://media.istockphoto.com/id/944478708/photo/couple-eating-lunch-with-fresh-salad-and-appetizers.jpg?s=612x612&w=0&k=20&c=xZdIIHvakQrYCbR59RM8nrhEnw-xu4nE-BOeOhQPnck=' style={{boxShadow: "rgba(0, 0, 0, 0.16) 0px 1px 4px"}}></img>
        </div>
       </div>
      </div>


    <Footer/>
      
    </>
  )
}

export default page
