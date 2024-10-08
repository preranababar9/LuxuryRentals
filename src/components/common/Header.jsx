"use client";

import { useState } from "react";

import { FiMenu } from "react-icons/fi";
import { RxCross2 } from "react-icons/rx";
import { useEffect } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";

const Header = () => {
  const router = useRouter();

  const path = usePathname();
  const [open, setOpen] = useState(false);

  const [toggle, setToggle] = useState(false);

  const [user, setUser] = useState("");
  useEffect(() => {
    if (toggle) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [toggle]);

  useEffect(() => {
    const user = localStorage.getItem("email");
    setUser(user);
  }, [path]);

  return (
    
    <div className="flex justify-around h-10vh absolute z-30 w-full items-center  bg-gradient-to-r from-[#476682] to-[#27466a]  py-5 top-0">
      <div className="z-30">
        <Link
          href="/"
          className="uppercase text-xl tracking-wide font-raleway  text-[#D9D9D9]"
        >
          {" "}
          Luxury Rentals
        </Link>
      </div>

      <div className="flex z-30 ">
        {!open ? (
          <button
            className="md:hidden"
            onClick={() => {
              setOpen(true);
              setToggle(true);
            }}
          >
            <FiMenu size={30} className="text-white" />
          </button>
        ) : (
          <button
            className="md:hidden"
            onClick={() => {
              setOpen(false);
              setToggle(false);
            }}
          >
            <RxCross2 size={30} className="text-white" />
          </button>
        )}
      </div>

      {open && (
        <div className="lg:hidden top-0 absolute left-0 px-16 pt-32  h-[100vh] bg-gradient-to-r from-blue-500 to-[#646464] w-full z-10 flex flex-col ">
          {nav.map((item, index) => (
            <ul
              key={index}
              className="flex flex-col  items-center tracking-wide"
            >
              <Link
                onClick={() => {
                  setOpen(false);
                  setToggle(false);
                }}
                href={item.href}
                className="text-2xl text-[#D9D9D9] font-raleway pb-5 hover:scale-110 hover:text-white"
              >
                {item.title}
              </Link>
            </ul>
          ))}
           {user ? (
          <div
            className="text-2xl text-[#D9D9D9] text-center  font-raleway cursor-pointer hover:scale-110 hover:text-white"
            onClick={() => {
              localStorage.removeItem("email");
              router.push("/login");
            }}
          >
            Logout
          </div>
        ) : (
          <Link
            href={"/login"}
            className="text-lg text-[#D9D9D9] font-raleway hover:scale-110 hover:text-white"
          >
            Login
          </Link>
        )}
        </div>
      )}

      <div className="max-md:hidden flex gap-10">
        {nav.map((item, index) => (
          <ul key={index} className=" tracking-wide">
            <Link
              href={item.href}
              className="text-lg text-[#D9D9D9] font-raleway hover:scale-110 hover:text-white"
            >
              {item.title}
            </Link>
          </ul>
        ))}
        {user ? (
          <div
            className="text-lg text-[#D9D9D9] font-raleway cursor-pointer hover:scale-110 hover:text-white"
            onClick={() => {
              localStorage.removeItem("email");
              router.push("/login");
            }}
          >
            Logout
          </div>
        ) : (
          <Link
            href={"/login"}
            className="text-lg text-[#D9D9D9] font-raleway hover:scale-110 hover:text-white"
          >
            Login
          </Link>
        )}
      </div>
    </div>
  );
};

export default Header;

const nav = [
  {
    href: "/allvillas",
    title: "Villas",
  },
  {
    href: "/aboutus",
    title: "About Us",
  },
  {
    href: "/contact",
    title: "Contact",
  },
];
