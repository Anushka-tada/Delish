import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const page = () => {
  return (
    <>
      <Navbar />

      <div className="booking-herosection d-flex align-items-center justify-content-center">
        <div className="booking-herosection-text d-flex flex-column align-items-center justify-content-center">
          <h1 className="text-white">BOOK A TABLE</h1>
          <p className="text-white">HOME / BOOK A TABLE</p>
        </div>
      </div>

      <div className="booking-section d-flex align-items-center justify-content-center pb-5 pt-4">
        <div className="booking-form p-5 mt-5" style={{ borderRadius: "5px" }}>
          <h3 className="text-white text-center">Make Reservation</h3>

          <form>
            <div className="row mt-4">
              <div className="col-4">
                <label>Number of Guest*</label>
                <input type="number" className="w-100 mt-2 mb-3"></input>
              </div>
              <div className="col-4">
                <label>Select date*</label>
                <input type="date" className="w-100 mt-2 mb-3"></input>
              </div>
              <div className="col-4">
                <label>Select Time*</label>
                <input type="time" className="w-100 mt-2 mb-3"></input>
              </div>
            </div>

            <div className="row mt-4">
              <div className="col-4">
                <label>Your Name*</label>
                <input type="text" className="w-100 mt-2 mb-3"></input>
              </div>
              <div className="col-4">
                <label>Email Address*</label>
                <input type="text" className="w-100 mt-2 mb-3"></input>
              </div>
              <div className="col-4">
                <label>Phone NUmber*</label>
                <input type="text" className="w-100 mt-2 mb-3"></input>
              </div>
            </div>

            <div className="row mt-4">
              <div className="col-12">
                <label>Type Your Special Message</label>
                <textarea
                  rows={3}
                  type="text"
                  className="w-100 mt-2 mb-3"
                ></textarea>
              </div>
            </div>

            <button className="gap-3 px-5 ">
              Book A Table <img src="/assets/white_arrow.png" alt="arrow" />
            </button>
          </form>
        </div>
      </div>

      <div className="container py-5">
<div className="row justify-content-center align-items-center">
            <div className="col-5">
             <img src="/assets/opening-hours.jpg" className="img-fluid "></img>
          </div>
          <div className="col-5">
            <div className="p-4 mb-4 w-fit" style={{border:"1px solid #e8e8e8", width:"fit-content", boxShadow:"rgba(0, 0, 0, 0.1) 0px 4px 12px"}}>
            <h4>
              Opening Hours
            </h4>
             <p className="para mb-1">Breakfast: 9Am – 11Am </p>
            <p className="para mb-1">Lunch: 12Pm – 3Pm  </p>
            <p className="para">Diner: 6Pm – 8pm (Last Order At 8:00Pm)</p>
            </div>

            <div className="p-4 mb-4" style={{border:"1px solid #e8e8e8" , width:"fit-content" , boxShadow:"rgba(0, 0, 0, 0.1) 0px 4px 12px"}}>
            <h4>
             Visit Our Restaurant
            </h4>
            <p className="para mb-1">Eight avenue 487, NY, </p>
            <p className="para">T. +12 344 0567899 M. fidalgo@example.com</p>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default page;
