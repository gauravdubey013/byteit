"use client";

import React, { useRef, useState, useEffect } from "react";
import Image from "next/image";
import { LuSend } from "react-icons/lu";

const GenerateImage = () => {
  const inputValueRef = useRef();
  const [data, setData] = useState(null);

  const [img, setImg] = useState(true);
  const [loading, setLoading] = useState(false);

  const [hoveredImage, setHoveredImage] = useState(null);

  const generateImage = async (prompt) => {
    try {
      const response = await fetch("/api/generateImage", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ prompt: prompt }),
      });
      const data = await response.json();
      console.log(data);
      return data.data;
    } catch (error) {
      console.error(error);
      throw error;
    }
  };

  const fetchData = async (event) => {
    event.preventDefault();
    const prompt = inputValueRef.current.value;

    if (!prompt) {
      <div
        className={`w-[95%] h-[95%] sm:w-[80%] md:w-[70%] lg:w-[40%] ease-in-out duration-300 bg-[#43fcff]/60 bg-cover bg-center ${
          img ? `flex` : `hidden`
        } flex items-center justify-center rounded-2xl text-2xl text-[#43fcff]/80`}
        style={{
          backgroundImage: "url(/GenerateImageBG.gif)",
        }}
      >
        <h1 className="text-xl">
          Please provide prompt text first to generate image . . .
        </h1>
      </div>;
      return;
    }

    try {
      setImg(false);
      setLoading(true);
      const imageData = await generateImage(prompt);
      setData(imageData);
      setLoading(false);
    } catch (error) {
      console.error(error);
      setLoading(false);
    }
  };

  useEffect(() => {
    if (inputValueRef.current.value) {
      fetchData();
    }
  }, []);

  const openImageInNewTab = (imageUrl) => {
    window.open(imageUrl, "_blank");
  };

  return (
    <>
      <div className="w-full h-[71vh] md:h-[80vh] mb-1 flex flex-col items-center justify-center text-center gap-4 px-[1rem] sm:px-[2rem] md:px-[3rem] lg:px-[4rem] ease-in-out duration-200">
        <h1 className="text-3xl">Text to Image Generator</h1>
        <section className="w-full h-[88%] flex flex-col gap-3 items-center justify-between ease-in-out duration-200">
          <div
            className={`imagesSection border-[0.5px] rounded-3xl border-[#43fcff] w-full h-[85%] flex flex-wrap gap-6 ${
              loading
                ? "items-center justify-center"
                : "items-center justify-center"
            } p-[10px] overflow-hidden`}
          >
            <div
              className={` w-[95%] h-[95%] sm:w-[80%] md:w-[70%] lg:w-[40%] ease-in-out duration-300 bg-[#43fcff]/60 bg-cover bg-center ${
                img ? `flex` : `hidden`
              } flex items-center justify-center rounded-2xl text-2xl text-[#43fcff]/80`}
              style={{
                backgroundImage: "url(/GenerateImageBG.gif)",
              }}
            >
              <h1 className="text-xl">Write text to generate image . . .</h1>
            </div>
            <div
              className={` w-[95%] h-[95%] sm:w-[80%] md:w-[70%] lg:w-[40%] ease-in-out duration-300 bg-cover bg-center animate-pulse ${
                loading ? `flex` : `hidden`
              } flex items-center justify-center rounded-2xl text-2xl text-[#43fcff]/80`}
              style={{
                backgroundImage: "url(/GenerateImageBG.gif)",
              }}
            >
              <h1 className="text-xl">Generating in progress . . .</h1>
            </div>
            {data?.map((imageObj, index) => (
              <div
                key={index}
                className="imageContainer relative z-[1] shadow-[0px_10px_100px_25px_#28283d] w-[95%] h-[95%] sm:w-[80%] md:w-[70%] lg:w-[40%] cursor-pointer rounded-2xl ease-in-out duration-500 overflow-hidden"
                onClick={() => openImageInNewTab(imageObj.url)}
                onMouseEnter={() => setHoveredImage(index)}
                onMouseLeave={() => setHoveredImage(null)}
              >
                <Image
                  src={imageObj.url}
                  width={500}
                  height={500}
                  alt="generated images"
                  className="shadowEff w-full h-full"
                />
                {hoveredImage === index && (
                  <h1 className="absolute inset-0 flex items-center justify-center text-xl text-white bg-black bg-opacity-50 ease-in-out duration-300">
                    Tap to open image in new tab
                  </h1>
                )}
              </div>
            ))}
          </div>
          <form
            method="post"
            onSubmit={fetchData}
            className="w-full md:w-[70%] h-[5vh] border-[1px] border-[#43fcff] rounded-full flex flex-1 items-center justify-between gap-3 px-5 shadow-2xl overflow-hidden ease-in-out duration-300"
          >
            <textarea
              rows={1}
              type="text"
              ref={inputValueRef}
              name="promptInput"
              placeholder="Enter text to generate"
              className="fontFam bg-transparent w-full h-[70%] md:h-[90%] outline-none p-2 text-lg text-[#43fcff] placeholder:text-xl hover:placeholder:text-[#43fcff] focus:placeholder:text-[#43fcff] rounded-full ease-in-out duration-500"
              onKeyDown={(e) => {
                if (e.key === "Enter" && !e.shiftKey) {
                  e.preventDefault();
                  fetchData(e);
                }
              }}
            />
            <button
              type="submit"
              className="w-[25%] h-full outline-none border-[1px] border-[#43fcff] rounded-full cursor-pointer text-white hover:text-[#43fcff] bg-[#43fcff]/[60%] hover:bg-transparent focus:text-[#43fcff] -mr-5 flex items-center justify-center ease-in-out duration-300"
            >
              <div className="flex flex-row gap-2">
                <span className="text-[3vh] md:hidden">
                  <LuSend className="text-[#43fcff] text-4xl" />
                </span>
                <span className="hidden md:flex">Generate</span>
              </div>
            </button>
          </form>
        </section>
      </div>
    </>
  );
};

export default GenerateImage;
