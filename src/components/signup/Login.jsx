"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { toast } from "react-toastify";
import { loginWithFirebase } from "../../../services/users";
import { useRouter } from "next/navigation";


const Login = () => {

  const router = useRouter();
  const[data, setData] = useState({
    email : "",
    password : ""
  });

  const handleLogin = async (e) => {
    e.preventDefault();

    
    try {
      const userCredential = await loginWithFirebase(data.email, data.password);
      console.log(userCredential);
      
  
      // Check if login was successful by verifying if a user object exists
      if (userCredential ) {
        localStorage.setItem('email', data.email); // Store email, not password, for security reasons
        toast.success("Login successful!", {
          position: "top-center",
        });
        router.push("/")
     
      } else {
        toast.error("Incorrect Credentials!");
      }
    } catch (error) {
      console.log(error);
  
      // Display a more accurate error toast for failed login attempts
      toast.error("Login failed: " + error.message, {
        position: "top-center",
      });
    }
  };
  

  const userData = (e) => {
    const {name, value} = e.target;

    setData({...data, [name] : value});

    
  };

  return (
    <section className="pb-20 pt-28">
      <div className="max-width">
        <form onSubmit={handleLogin}>
          <div className="flex  items-center">
            <div className="w-1/2  mr-36 max-md:hidden">
              <Image
                src="/images/login.jpg"
                alt="Hero image"
                className="w-full h-[80vh] rounded-br-3xl object-cover"
                width={900}
                height={800}
              />
            </div>

            <div className="flex flex-col  font-rufina w-1/3 max-md:w-full">
              <h4 className="text-3xl font-bold pb-2">Welcome back!!</h4>
              <p className="text-md  pb-10">Please login here</p>

              <label className="font-medium pb-2 text-md">Email Address</label>
              <input
                type="email"
                placeholder="Your Email Address"
                className="border-solid border-2 border-offgrey  pr-10 pl-2 mb-4 py-2 rounded-lg  "
                name="email"
                onChange={userData}
                required
                autoComplete="off"
              />

              <label className="font-medium pb-2 text-md">Password</label>
              <input
                type="password"
                placeholder="Password"
                className="border-solid border-2 border-offgrey  pr-10 pl-2 mb-2 py-2  rounded-lg  "
                name="password"
                onChange={userData}
                required
                autoComplete="off"
              />

              <button
                className="bg-primary1 text-lg text-white py-3 my-3 rounded-lg  "
                type="submit"
              >
                Login
              </button>

              <p className="text-md text-center">
                Didnt have account? Signup here
                <Link
                  href="/signup"
                  className="font-bold underline underline-offset-4"
                >
                  Signup here
                </Link>
              </p>
            </div>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Login;
