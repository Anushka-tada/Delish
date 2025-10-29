import React from "react";

const Footer = () => {
  return (

    <>
    <div className="py-5 mt-5 footer-top">
      <div className="d-flex flex-wrap justify-content-between container align-items-center">
       <div>
        <h6 className="mb-2 ">Book A Table For Your and Family Members</h6>
        <h2 className="text-uppercase">Need a table on coffee house</h2>
       </div>
       
       <div className='navBtn px-3 d-flex justify-content-center gap-3 align-items-center ' style={{width:"fit-content" , height:"41px"}}>
            <p className='mb-0 text-danger fw-semibold text-uppercase'>Book a table</p>
            <img src='/assets/red_arrow.png'></img>
           </div>
       
      </div>
      
    </div>
    <div className="footer py-5  bg-black">
      <div className="container">
      <div className="d-flex flex-wrap justify-content-between pb-4  border-botom">
        <div>
          <img src="/assets/logo.png" className="border-botom pb-3 mb-3"></img>
          <p className="text-white mb-1">Silk St, Barbican, London E2Y, UK</p>
          <p className="text-white mb-1">+39-055-123456</p>
          <p className="text-white mb-3">booking@webexample.com</p>

          <img src="/assets/social_logo.png"></img>
        </div>

        {/* links */}

        <div>
          <h5 className="border-botom pb-3 mb-3 text-uppercase text-white">Links</h5>
          <p className="text-white mb-2">About us</p>
          <p className="text-white mb-2">Meet our Team</p>
          <p className="text-white mb-2">Case Stories</p>
          <p className="text-white mb-2">Latest News</p>
          <p className="text-white mb-2">Contact</p>
        </div>

         {/* other links */}

            <div>
          <h5 className="border-botom pb-3 mb-3 text-uppercase text-white" > other Links</h5>
          <p className="text-white mb-2">Careers</p>
          <p className="text-white mb-2">Creative Agency</p>
          <p className="text-white mb-2">Digital Agency</p>
          <p className="text-white mb-2">Marketing</p>
          <p className="text-white mb-2">Digital Services</p>
        </div>

        {/* newsletter */}
         
          <div>
          <h5 className="border-botom pb-3 mb-3 text-uppercase text-white" >Newsletter</h5>
          <p className="text-white mb-2">Subscribe us & receive our offers and <br></br> updates your inbox directly</p>
           <div className="position-relative">
            <input placeholder="Email" type="text"  className="newletter-input "></input>
           <img src="\assets\sent.png" style={{position:"absolute" , right:"3%" , top:"33%" , width:"32px" , height:"32px"}}></img>
           </div>
        </div>


      </div>
      

      <div className="d-flex justify-content-between pt-4">
       <p className="text-white">All rights received 2024. Delish Restaurant</p>

       <div className="d-flex gap-3">
       <p className="text-white">Terms of Use</p>
       <p className="text-white">Privacy Policy</p>
       </div>
      </div>
      </div>
    </div>
    </>
  );
};

export default Footer;
