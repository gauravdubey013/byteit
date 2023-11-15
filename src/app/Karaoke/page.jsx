"use client";

import Image from "next/image";
import React, { useRef, useState, useEffect } from "react";
import { LuSend } from "react-icons/lu";

const Karaoke = () => {
  return (
    <>
      <div className="w-full h-[83vh] flex flex-col items-center justify-center text-center gap-4 px-[1rem] sm:px-[2rem] md:px-[3rem] lg:px-[4rem] ease-in-out duration-200">
        <h1 className="text-3xl">Sync To Music</h1>
        <section className="w-full h-[88%] flex flex-col gap-5 items-center justify-between ease-in-out duration-200"></section>
      </div>
    </>
  );
};

export default Karaoke;
