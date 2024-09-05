// src/components/Navbar.js
import React, { useEffect, useState } from 'react';
import { FaCartArrowDown } from "react-icons/fa";
import { BsSearch } from 'react-icons/bs';

import { MdChecklist } from "react-icons/md";
import { SiSpeedypage } from "react-icons/si";
import { useSelector } from 'react-redux';
import {Link} from "react-router-dom"

const Navbar = () => {
  const count = useSelector((state) => state.counter.value);
  const favcount=useSelector((state)=>state.phone.wishlist.count)
  // const count2 = useSelector((state) => state);


  console.log(favcount);
  
  const [alertShown, setAlertShown] = useState(false);

  useEffect(() => {
    console.log('Count:', count);
    console.log('Alert Shown:', alertShown);

    if (count >= 5) {
      console.log("Reached the limit, showing alert");
      // alert('You reached the max limit');
      setAlertShown(true);
    } else if (count <= 5) {
      setAlertShown(false);
    }
  }, [count, alertShown]);

  return (
    <>
   
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" >
        <div className="text-white text-2xl font-bold italic inline-flex items-center">
        <span>Dynamic</span>
        <SiSpeedypage className="text-yellow-500" />
        <span> Express</span>
        </div>
        </Link>
         

        <div className="flex items-center space-x-4">
        <Link to="/home" className="text-gray-300 hover:text-white">Home</Link>
        <input
              type="text"
              placeholder="Search for products"
              className="p-2 rounded-md border border-gray-300"
            />
            <BsSearch className="text-xl text-gray-300" />

          {/* <Link to="#about" className="text-gray-300 hover:text-white">About</Link>
          <Link to="#services" className="text-gray-300 hover:text-white">Services</Link>
          <Link to="#contact" className="text-gray-300 hover:text-white">Contact</Link> */}
          <Link to="/favourite" className="text-gray-300 hover:text-white flex items-center">
            <span>

              <MdChecklist className="text-xl" />
            </span>
            <span className='relative -top-2 -right-1 text-red-600 font-bold'>
            {favcount}
            </span>
          </Link>
          <Link to="#cart" className="text-gray-300 hover:text-white flex items-center">
            <span>

              <FaCartArrowDown className="text-xl" />
            </span>
            <span className='relative -top-2 -right-1 text-red-600 font-bold'>
            {count}
            </span>
          </Link>
          
        </div>
      </div>
    </nav>
    { alertShown && (<div className='bg-red-600 flex justify-evenly items-center mx-8 my-5 h-10'> <p className='text-white'>You have reache the limit</p> <span className='text-white'>x</span></div>)}
    </>
  );
};

export default Navbar;
