"use client";
import React, { useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import Dividor from "@/components/Dividor";
import { events } from "@/context/data";

const EventCompo = (props) => {
  let ref = useRef(null);
  let { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  let by = useTransform(scrollYProgress, [0, 1], ["0%", "250%"]);
  let opacity = useTransform(scrollYProgress, [0, 1], ["80%", "-100%"]);
  let scale = useTransform(scrollYProgress, [0, 1], ["100%", "200%"]);
  return (
    <>
      <main className="w-full h-auto overflow-hidden -translate-y-[70px] -mb-[70px] border-[px]">
        <section ref={ref.current} className="relative w-full h-[60vh]">
          <motion.div
            className="inset-0 absolute z-0 bg-[#000300]"
            style={{ y: by }}
          />
          <motion.div
            className="inset-0 absolute z-10 backdrop-filter backdrop-blur-sm"
            style={{ y: by }}
          />
          <motion.div
            className="inset-0 absolute z-0"
            style={{
              backgroundImage: "url(/bg3.gif)",
              backgroundPosition: "bottom",
              backgroundSize: "cover",
              y: by,
              scale,
              opacity,
            }}
          />
          {/* content */}
          <EventContent
            evTitle={props.eventTitle}
            evDay={props.eventDay}
            evDateSup={props.eventDateSup}
            evMonth={props.eventMonth}
          />
        </section>

        <section className="w-full h-auto border-[px] bg-black z-50 flex flex-col relative ease-in-out duration-200">
          <div className="w-full -mt-[99px]">
            <Dividor />
          </div>
          <section
            id="contact"
            className="w-full h-auto bg-black border-[px] px-[1rem] sm:px-[2rem] md:px-[3rem] lg:px-[4rem] overflow-hidden"
          >
            <p className="mt-4 mb-4 text-[20px] md:text-[25px] text-justify">
              {props.eventDec}
            </p>
            <h3 className="text-[#43fcff]/80 font-extrabold text-xl sm:text-2xl md:text-3xl lg:text-4xl mb-4">
              {props.eventAbout}
            </h3>
            <EventDetails
              evData={props.eventData}
              setEvDate={props.setEventDate}
              evLineClamp={props.setEventLineClamp}
              evBtnLink={props.eventBtnLink}
              evTarget={props.eventTarget}
            />
          </section>
        </section>
      </main>
    </>
  );
};

export default EventCompo;

export const EventContent = (props) => {
  return (
    <>
      <div className="w-full h-full bg-transparent relative z-20 flex flex-col items-center justify-center  ease-in-out duration-300">
        <div className="-mt-4 text-[80px] animate-slideDown text-[#43fcff] flex flex-col items-center justify-center">
          {props.evTitle}
        </div>
        <hr className="border-[#43fcff] w-[70%] md:w-[60%] lg:w-[60vh] h-[3px] shadow-lg border-solid border-[0.5px] rounded-lg ease-in-out duration-300" />
        <div className="mt-4 text-[25px] flex items-center justify-center text-[#e6e7ec]/90 ease-in-out duration-700">
          <span>
            {props.evDay}
            <sup>{props.evDateSup}</sup> {props.evMonth} 2023
          </span>
        </div>
      </div>
    </>
  );
};

export const EventDetails = (props) => {
  // var date = props.setEvDate;
  const evDataToMap = props.evData;
  const decLineClamp = props.evLineClamp;
  return (
    <>
      <div className="w-full h-auto">
        {evDataToMap.map((event) => (
          <div
            className="w-full h-full flex flex-col items-center justify-center gap-2 overflow-hidden"
            key={event.id}
          >
            {/* <div
              className={`${
                date
                  ? "flex text-[25px] md:text-[30px] font-medium text-[#43fcff]"
                  : "hidden"
              }`}
            >
              {event.date}
            </div> */}
            <div
              style={
                event.id % 2 === 0 && window.innerWidth >= 768
                  ? { flexDirection: "row-reverse" }
                  : {}
              }
              className={`itemCato flex flex-col md:flex-row gap-5 px-1 border-[px] overflow-hidden`}
            >
              <div className="imgs border-[px] h-full flex-1 rounded-lg ease-in-out duration-200">
                <Image
                  className="img w-full h-full rounded-lg"
                  src={event.image}
                  alt="banner"
                  // fill={true}
                  width={600}
                  height={500}
                />
              </div>
              <div className="content h-full flex-1 flex flex-col gap-2 ease-in-out duration-200">
                <div className="text-[18px] md:text-[25px] font-medium text-[#43fcff] flex justify-between gap-2">
                  <div className="">{event.title}</div>
                  <div className="">{event.time}</div>
                </div>
                <p
                  className={`desc text-[15px] md:text-[20px] text-justify ${
                    decLineClamp ? "line-clamp-4" : ""
                  }`}
                >
                  {event.desc}
                </p>
                <Link
                  href={event.btn}
                  target={props.evTarget}
                  className="w-[30%] md:w-[20%] h-[4vh] text-center flex justify-center items-center text-white hover:text-[#43fcff] scale-95 hover:scale-100 bg-[#43fcff]/40 hover:bg-transparent hover:border-[0.5px] hover:border-[#43fcff] rounded-full ease-in-out duration-300"
                >
                  {props.evBtnLink}
                </Link>
              </div>
            </div>
            <hr className="border-[#43fcff] w-full h-[3px] mt-5 mb-5 shadow-lg border-solid border-[0.5px] rounded-full" />
          </div>
        ))}
      </div>
    </>
  );
};

EventDetails.defaultProps = {
  // setEvDate: false,
  evLineClamp: false,
};
