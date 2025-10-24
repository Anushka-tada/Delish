import React from 'react'
import Link from "next/link";

const Navbar = () => {

    const navArr = [
    {
      name: "Home",
      link: "/",
    },
    {
      name: "Shop",
      link: "/shop",
    },
    {
      name: "Our Team",
      link: "/",
    },
    {
      name: "About",
      link: "/about-us",
    },
    {
      name: "Blogs",
      link: "/blogs",
    },
     {
      name: "Contact",
      link: "/contact",
    },
    
  ];

  return (
    <div>
        <div className='nav-outer d-flex justify-content-between align-items-center p-3 px-5'>
           <img src='/assets/logo.png' style={{height:"50px"}}></img>
            

             <ul
          className={`nav-links list-unstyled mb-0 d-flex gap-4`}
        >
          {navArr?.map((v, i) => {
            return (
              <li key={i}>
                <Link style={{textDecoration:"none" , color:"white"} }
                  href={v?.link}
                 >
                  {v?.name}
                </Link>
              </li>
            );
          })}
        </ul>

           <div className='navBtn px-3 d-flex justify-content-center gap-3 align-items-center'>
            <p className='mb-0'>Book A Table</p>
            <img src='/assets/white_arrow.png'></img>
           </div>
        </div>
      
    </div>
  )
}

export default Navbar
