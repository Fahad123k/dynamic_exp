import React, { useState } from "react";
import { FaRegUser } from "react-icons/fa";
import { RiEyeCloseLine } from "react-icons/ri";
import { FaEye } from "react-icons/fa";
import { Link } from "react-router-dom";
import axios from "axios";
import {  toast } from 'react-toastify';

function Register() {
  const [showPassword, setShowPassword] = useState(true);
  const [showConfirmPassword, setShowConfirmPassword] = useState(true);
  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setData((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    if (data.password === data.confirm_password) {
      try {
        const res = await axios.post('http://localhost:5000/api/register', data);
        if (res.status === 201) {
          toast.success("Register Successfully");
          console.log("Register Successfully", res.data);
        }
      } catch (error) {
        if (error.response) {
          // Server responded with a status other than 2xx
          console.log("Response Error ", error.response.data);
          toast.error(`Response Error: ${error.response.data}`);
        } else if (error.request) {
          // Request was made but no response received
          console.log("Request Error ", error.request);
          toast.error("Request Error: No response received from the server");
        } else {
          // Something happened in setting up the request
          console.log("Error", error.message);
          toast.error(`Error: ${error.message}`);
        }
      }
    } else {
      toast.error("Password and Confirm Password do not match");
    }
  };

  const [data, setData] = useState({
    username: "",
    password: "",
    confirm_password: "",

  });

  return (
    <div className="bg-gray-100">
    
      <section id="register" className="">
        <div className="mx-auto container p-4 pt-16 ">
          {/* bg-slate-100 */}
          <div className="  p-5 w-full max-w-sm mx-auto rounded border border-gray  bg-white ">
            <div className="mx-auto block w-fit">
              {/* <img src={loginIcons} alt='login icon' /> */}
              <div className="text-7xl text-blue-500">
                <FaRegUser />
              </div>
            </div>
            <h3>Register</h3>
            <form className="pt-6 flex flex-col gap-3" onSubmit={handleSubmit}>
              <div>
                <label>Email:</label>
                <div className="bg-white p-2 flex justify-start items-center rounded border border-gray">
                  {/* <div className="">
                    <FaRegUser />
                  </div> */}
                  <input
                    value={data.username || ""}
                    onChange={handleOnChange}
                    name="username"
                    type="email"
                    placeholder="Enter Email"
                    className="w-full h-full outline-none bg-transparent ml-4 "
                  />
                </div>
              </div>
              <div>
                <div>
                  <label>Password:</label>
                  <div className="bg-white p-2 flex justify-start items-center rounded border border-gray ">
                    {/* <div className="">
                      <IoLockClosedOutline />
                    </div> */}
                    <input
                      value={data.password || ""}
                      name="password"
                      onChange={handleOnChange}
                      type={showPassword ? "text" : "password"}
                      placeholder="Enter Password"
                      className="w-full h-full outline-none bg-transparent ml-4"
                    />
                    <div
                      className="cursor-pointer"
                      onClick={() => setShowPassword((preve) => !preve)}
                    >
                      <span>
                        {showPassword ? <FaEye /> : <RiEyeCloseLine />}
                      </span>
                    </div>
                  </div>
                </div>
                <div>
                  <label>Confirm Password:</label>
                  <div className="bg-white p-2 flex justify-start items-center rounded border border-gray ">
                    {/* <div className="">
                      <IoLockClosedOutline />
                    </div> */}
                    <input
                      value={data.confirm_password || ""}
                      name="confirm_password"
                      onChange={handleOnChange}
                      type={showConfirmPassword ? "text" : "password"}
                      placeholder="Enter Confirm Password"
                      className="w-full h-full outline-none bg-transparent ml-4"
                    />
                    <div
                      className="cursor-pointer"
                      onClick={() => setShowConfirmPassword((preve) => !preve)}
                    >
                      <span>
                        {showConfirmPassword ? <FaEye /> : <RiEyeCloseLine />}
                      </span>
                    </div>
                  </div>
                </div>

           
              </div>
              
              <button className="bg-blue-500 text-white px-6 w-full py-2 max-w-[150px] mt-2 rounded-full  hover:bg-blue-700 hover:scale-110 transition-all  mx-auto block ">
                Sign Up
              </button>
            </form>
            <p className='my-2'>Already  have an account? <Link to={'/login'} className='text-red-500 hover:text-red-700 transition-all'>Login</Link> </p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Register;
