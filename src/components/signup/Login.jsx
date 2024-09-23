import React from "react";
import Image from "next/image";
import Link from "next/link";

const Login = () => {
  return (
    <section className="pb-20 pt-28">
      <div className="max-width">
        <form>
          <div className="flex  items-center">
            <div className="w-1/2  mr-36 max-md:hidden">
              <Image
                src="/images/login.jpg"
                alt="Hero image"
                className="w-full h-[80vh] rounded-br-3xl object-cover"
                width={500}
                height={400}
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
                // onChange={handleUser}
                required
                autoComplete="off"
              />

              <label className="font-medium pb-2 text-md">Password</label>
              <input
                type="password"
                placeholder="Password"
                className="border-solid border-2 border-offgrey  pr-10 pl-2 mb-2 py-2  rounded-lg  "
                name="password"
                // onChange={handleUser}
                required
                autoComplete="off"
              />

              <button
                className="bg-primary1 text-lg text-white py-3 my-3 rounded-lg  "
                type="submit"
              >
                Login
              </button>
            </div>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Login;
