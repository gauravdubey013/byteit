"use client";

// import { Link } from "react-scroll";
import Link from "next/link";
import React, { useState } from "react";
import { Sling as Hamburger } from "hamburger-react";
import Image from "next/image";
import Headroom from "react-headroom";
import { navLink } from "@/context/data";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  return (
    <>
      <Headroom>
        <div className="containerNav backdrop-filter backdrop-blur-sm px-5 w-full h-[70px] flex justify-between items-center gap-5 z-10">
          {" "}
          {/*  w-[80%] fixed */}
          <div className="open md:hidden ">
            <Hamburger
              size={25}
              easing="ease-in"
              color="#43fcff"
              toggled={toggle}
              toggle={setToggle}
            />
          </div>
          <Link
            spy={true}
            href={"/"}
            className="flex flex-row items-center animate-fade-in-down hover:text-[#43fcff] ease-in-out duration-500"
          >
            <Image
              src={"/byteITLogo.png"}
              width={50}
              height={50}
              alt="Byte IT Logo"
              className="w-10 h-10 mr-1"
            />
            <span className="self-center text-xl font-semibold text-[#43fcff]">
              BYTE-IT
            </span>
          </Link>
          <div className="flex items-center">
            <div
              className={`menu duration-300 flex-col gap-2 md:gap-0 lg:gap-3 flex md:flex-row fixed top-[4.5rem] md:top-0 ${
                !toggle
                  ? ` left-[-100%] ease-in-out duration-650`
                  : ` left-0 md:left-[-100%] top-[4.2rem] p-1 md:p-0 w-auto md:w-full h-auto md:h-full border-r-[0.1px] border-b-[0.1px] md:border-none rounded-r-[20px] border-[#43fcff] ease-in-out duration-500 md:duration-0 backdrop-filter backdrop-blur-md bg-[#000300]/60 md:bg-transparent`
              }  md:static`}
            >
              {navLink.map((link) => (
                <Link
                  key={link.id}
                  href={link.url}
                  spy={true}
                  smooth={true}
                  offset={-100}
                  duration={500}
                  onClick={() => {
                    setToggle(!toggle);
                  }}
                  className="hoverText cursor-pointer z-10 active:bg-[#43fcff]/20 text-[#e6e7ec]/90 hover:text-[#43fcff] md:rounded-[10px] rounded-r-[10px] hover:backdrop-blur-sm hover:bg-[#43fcff]/30 px-2"
                >
                  {link.title}
                </Link>
                // </div>
              ))}
            </div>
            <Link href={"/Event"} className="ml-2">
              <button className="eventBtn p-[4px] border-[0.5px] border-[#43fcff] w-[6rem] bg-[#43fcff]/[60%] hover:bg-transparent text-white hover:text-[#43fcff] cursor-pointer rounded-[5px] ease-in-out duration-300">
                Events
              </button>
            </Link>
          </div>
        </div>
      </Headroom>
    </>
  );
};

export default Navbar;
