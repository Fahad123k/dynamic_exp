import React, { useContext, useState } from "react";
// import Navbar from "../../components/Navbar";
import { FaRegUser } from "react-icons/fa";
import { RiEyeCloseLine } from "react-icons/ri";
import { IoLockClosedOutline } from "react-icons/io5";
import { FaEye } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
// import Context from "../../context";

import axios from "axios"

function Login() {
  const [showPassword, setShowPassword] = useState(true);

  const navigate= useNavigate();
//   const { fetchUserDetails } = useContext(Context);

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setData((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  };

  const handleSubmit = async(e) => {
    e.preventDefault()
    try{
      const res= await axios.post('http://localhost:5000/api/register',data);
      if(res.status==200){
        console.log("login Successfully",res.data);
        alert("login Successfully",res.data)
        
      }

    }
    catch(error){
      if(error.response){
         // Handle errors, e.g., incorrect login credentials or network issues
        console.log("Response Error ",error.response.data);
      }
      // Handle error response from the server
      else if(error.request){
        
        console.log("Request Error ",error.response);
      }
      else{
        console.log("Error",error.message);
        
      }

    }

  };
  const [data, setData] = useState({
    email: "",
    password: "",
  });

  return (
    <div  className="bg-gray-100">

      <section id="login">
        <div className="mx-auto container p-4 pt-16 ">
          {/* bg-slate-100 */}
          <div className="  p-5 w-full max-w-sm mx-auto rounded border border-gray bg-white">
            <div className="mx-auto block w-fit">
              {/* <img src={loginIcons} alt='login icon' /> */}
              <div className="text-7xl text-blue-500">
                <FaRegUser />
             
              </div>
            </div>
            <form className="pt-6 flex flex-col gap-3" onSubmit={handleSubmit}>
                  <h3>Login</h3>
              <div>
                <label>Email:</label>
                <div className="bg-white p-2 flex justify-start items-center rounded border border-gray">
                  <div className="">
                    <FaRegUser />
                  </div>
                  <input
                    value={data.email || ""}
                    onChange={handleOnChange}
                    name="email"
                    type="email"
                    placeholder="Enter Email"
                    className="w-full h-full outline-none bg-transparent ml-4 "
                  />
                </div>
              </div>
              <div>
                <label>Password:</label>
                <div className="bg-white p-2 flex justify-start items-center rounded border border-gray ">
                  <div className="">
                    <IoLockClosedOutline />
                  </div>
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
                    <span>{showPassword ? <FaEye /> : <RiEyeCloseLine />}</span>
                  </div>
                </div>

                <Link
                  to={"/forgot-password"}
                  className="hover:text-blue-500 block w-fit ml-auto hover:underline"
                >
                  Forgot Password
                </Link>
              </div>
              <button className="bg-blue-500 text-white px-6 w-full py-2 max-w-[150px] mt-2 rounded-full  hover:bg-blue-700 hover:scale-110 transition-all  mx-auto block ">
                Login
              </button>
            </form>
            <p className="my-2">
              Don't have an account?{" "}
              <Link
                to={"/register"}
                className="text-blue-500 hover:text-blue-700 transition-all"
              >
                Sign up
              </Link>{" "}
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Login;
