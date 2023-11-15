import Link from "next/link";
import React from "react";
import Image from "next/image";

import withAutoplay from "react-awesome-slider/dist/autoplay";
import AwesomeSlider from "react-awesome-slider";
import "react-awesome-slider/dist/styles.css";
import { HOD, faculties, sliderImgs } from "@/context/data";
// import styles from "react-awesome-slider/dist/custom-animations/fold-out-animation.css";

const About = () => {
  return (
    <>
      <div className="w-full h-auto border-[px] overflow-hidde ease-in-out duration-300">
        <h3 className="text-[#43fcff]/80 font-extrabold text-xl sm:text-2xl md:text-3xl lg:text-4xl mb-4">
          About us
        </h3>
        <div className="w-full h-auro border-[px] overflow-hidden flex flex-col gap-2 ease-in-out duration-300">
          <AboutByteIT />
          <EventBtn />
          <ImageSlider />
          <AboutCollege />
          <Faculty />
          <EventVenue />
        </div>
      </div>
    </>
  );
};

export default About;

export const AboutByteIT = () => {
  return (
    <>
      <div className="w-full h-auto flex flex-col gap-4 md:gap-0">
        <div className="w-full h-auto flex flex-col md:flex-row gap-2 justify-center">
          <div className="w-full md:w-1/2 h-full flex items-center justify-center">
            <Image
              src={"/byteITLogo.png"}
              width={500}
              height={500}
              alt="Byte IT Logo"
              className="w-[250px] h-[250px] sm:w-[300px] sm:h-[300px] md:w-[350px] md:h-[350px] lg:w-[400px] lg:h-[400px] mr-1 ease-in-out duration-300"
            />
          </div>
          <div className="w-full md:w-1/2 h-full flex flex-col justify-center px-4 md:px-8 lg:px-12">
            <h1 className="text-2xl md:text-3xl text-[#43fcff]">
              ABOUT BYTE-IT
            </h1>
            <div className="text-[15px] md:text-[18px] text-justify ease-in-out duration-500">
              <span>
                BYTE IT is organized by the Department of Information Technology
                of Sathaye College. This event emphasizes on motivating the
                students in the field of IT.
              </span>
            </div>
          </div>
        </div>
        <div className="w-full h-auto flex flex-col justify-center gap-2 px-10 md:px-20">
          <span className="text-[#53c2be] font-extrabold text-xl sm:text-2xl md:text-3xl lg:text-4xl text-center ease-in-out duration-500">
            WE WOULD LIKE TO INVITE YOU ON A JOURNEY THAT IS FULL OF MESMERIZING
            STORIES AND ARTIFACTS !
          </span>
          <ul className="list-disc list-outside text-[15px] md:text-[18px] px-10 ease-in-out duration-500">
            <li>
              Young brains will get to showcase their skills and compete with
              others to find the best.
            </li>
            <li>Create awareness about IT and career prospects.</li>
            <li>
              To offer internships and job opportunities for the students.
            </li>
            <li>Inclusion of workshops and fun games.</li>
          </ul>
        </div>
      </div>
    </>
  );
};

export const AboutCollege = () => {
  return (
    <>
      <div className="w-full h-auto flex flex-col gap-1"></div>
      <div className="w-full h-auto border-[px] flex flex-col md:flex-row gap-2 justify-center">
        <div className="w-full md:w-1/2 h-auto flex items-center justify-center">
          <Image
            src={"/sathayeLogo.png"}
            width={500}
            height={500}
            alt="Byte IT Logo"
            className="w-[250px] h-auto sm:w-[300px] sm:h-[300px] md:w-[350px] md:h-[350px] lg:w-[400px] lg:h-[400px] mr-1 ease-in-out duration-300"
          />
        </div>
        <div className="w-full md:w-1/2 h-auto border-[px] flex flex-col justify-center px-2 md:px-4 lg:px-8">
          <h1 className="text-2xl md:text-3xl text-[#43fcff]">ABOUT COLLEGE</h1>
          <h1 className="text-lg md:text-xl text-[#43fcff] mt-5">
            PTVA&apos;S SATHAYE COLLEGE :
          </h1>
          <span className="flex text-justify text-[14px] md:text-[16px] lg:text-[18px] ease-in-out duration-500">
            Parle Tilak Vidyalaya Association’s Sathaye College located in the
            cultural hub of suburbs Vile Parle, is a well known College
            affiliated to the University of Mumbai, founded in 1959. This Arts,
            Science College later on added Commerce faculty in 1982 and
            Sociology, Microbiology, Psychology as courses from 2001 to 2016.
            New self-financing courses like B.Sc(I.T.), B.M.S., B.M.M. along
            with M.Sc. (I.T.), M.A. in Hindi, M.A. in Buddhist Studies, and
            Ph.D. in Physics and a variety of certificate courses were later
            added during 2001-2016.
          </span>
        </div>
      </div>
      {/* [57vh] sm:h-[46vh] md:h-[55vh] lg:h-[550px] */}
      <div className="w-full h-auto border-[px] flex flex-col px-2 md:px-4 lg:px-8">
        <span className="text-[14px] md:text-[16px] lg:text-[18px] ease-in-out duration-300 flex text-justify">
          Dr. Kavita Rege started some interesting intercollegiate festivals
          giving a platform to students to inculcate in them leadership
          qualities, organizational skills, and interpersonal relations. The
          college was twice accredited by NAAC with an ‘A’ grade. It was
          recognized in 2004 as ‘Best Vocational Institute’ at +2 level.
          Moreover, the University of Mumbai awarded the College in January 2015
          as ‘Best College of Mumbai University (urban) for the year 2013-14.
          The college bagged the prestigious ‘Vice-Chancellor’s Banner’ on 25th
          November 2015 (NCC day) for the excellent work done by our NCC cadets
          in all these years and particularly in the year 2014-15. Parle Tilak
          Vidyalaya Association founded in 1921, established Parle College now
          Sathaye College, with a vision to establish an institution of higher
          learning. This Arts and Science college immediately attracted a large
          number of students and with Principal C. B. Joshi as the founding
          Principal, the college flourished. He pursued academic excellence
          relentlessly. Dr. K. S. Nargund, doyen of Organic chemistry put the
          college name in the research area of chemistry.
          <br />
          <br />
          The college has its alumni placed in various good positions, who have
          brought laurels by shining in all walks of life like administrative
          and foreign services, defense, education, art, film, theatre, sports,
          dance, music, I.T., media and so on.
          <br />
          <br />
          Simple, hard-working students imbibed with a sense of educational
          attainment, is our true strength, reminding all of us of our vision
          statement, “Purnata Gauravay” (पूर्णता गौरवाय).
        </span>
      </div>
    </>
  );
};

export const EventBtn = () => {
  return (
    <>
      <div className="w-full h-[10vh] border-[px] flex items-center justify-center">
        <Link
          href={"/Event"}
          className="w-auto md:w-[40%] h-[5vh] flex items-center justify-center px-10 border-[0.5px] border-[#43fcff] bg-[#43fcff]/[65%] hover:bg-transparent text-white hover:text-[#43fcff] cursor-pointer rounded-xl ease-in-out duration-300"
        >
          Check out Events
        </Link>
      </div>
    </>
  );
};

export const ImageSlider = () => {
  const AutoplaySlider = withAutoplay(AwesomeSlider);
  return (
    <>
      <div className="w-full h-auto border-[px] flex items-center justify-center">
        {/* Slider images */}
        <div className="w-full md:w-[60%] h-auto relativ border-[px] flex items-center justify-center rounded-2xl overflow-hidden">
          <AutoplaySlider
            play={true}
            cancelOnInteraction={false}
            interval={6000}
          >
            {sliderImgs.map((sImgs) => (
              // <div className="w-full h-full" >
                <div key={sImgs.id} data-src={sImgs.img} alt={sImgs.title} />
              // </div>
            ))}
          </AutoplaySlider>
        </div>
      </div>
    </>
  );
};

export const EventVenue = () => {
  return (
    <>
      <div className="w-full h-auto md:h-[75vh] lg:h-[90vh] border-[px] px-2 md:px-4 lg:px-8 flex flex-col gap-2 ease-in-out duration-500">
        <h1 className="w-full h-auto text-[#43fcff] font-extrabold text-2xl sm:text-3xl md:text-4xl ease-in-out duration-500">
          EVENT VENUE
        </h1>
        <div className="w-full h-auto flex flex-row items-center justify-center gap-10 border-[px] text-[14px] sm:text-xl md:text-2xl ease-in-out duration-300">
          <span className="flex items-center justify-center">
            Sathaye College :
          </span>
          <span className="flex items-center justify-center text-[#43fcff]">
            Dixit Rd, Satsang CHSL, Navpada, Vile Parle East. Mumbai,
            Maharashtra - 400057
          </span>
        </div>
        <div className="w-full h-auto flex flex-col md:flex-row items-center justify-center gap-2 border-[px] rounded-xl overflow-hidden ease-in-out duration-300">
          <div className="w-full md:w-[40%] h-auto flex flex-col gap-2 items-center justify-center">
            {/* Adjusted the width and height attributes for better responsiveness */}
            <Image
              src={"/SathayeCollegeGate.jpg"}
              width={500}
              height={300}
              alt="Byte IT Logo"
              className="rounded-lg"
            />
            {/* Adjusted the width and height attributes for better responsiveness */}
            <Image
              src={"/SathayeCollegeTurfView.jpeg"}
              width={500}
              height={300}
              alt="Byte IT Logo"
              className="rounded-lg"
            />
          </div>
          <div className="w-full md:w-[60%] h-[40vh] md:h-full flex items-center justify-center ease-in-out duration-200">
            {/* Updated the width and height to 100% for better responsiveness */}
            <iframe
              src="https://maps.google.com/maps?q=sathaye%20college&amp;t=k&amp;z=16&amp;ie=UTF8&amp;iwloc=&amp;output=embed"
              className="w-full h-full"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export const Faculty = () => {
  return (
    <div className="w-full h-auto border-[px] flex flex-col items-center ease-in-out duration-200">
      <h1 className="w-full h-full text-[#43fcff] font-extrabold text-2xl sm:text-3xl md:text-4xl px-2 md:px-4 lg:px-8 ease-in-out duration-500">
        OUR FACULTY MEMBERS
      </h1>
      <div className="flex items-center justify-center">
        <Faculties />
      </div>
    </div>
  );
};

export const Faculties = () => {
  return (
    <div className="w-full h-auto flex flex-col gap-2">
      <div className="text-center content-center flex items-center justify-center flex-wrap gap-2">
        {HOD.map((faculty) => (
          <div
            key={faculty.id}
            className="shadow-lg scale-95 hover:scale-100 ease-in-out duration-300"
          >
            <Image
              width={500}
              height={500}
              src={faculty.pic}
              alt={faculty.name}
              className="w-full h-[250px] md:w-[400px] md:h-[450px] mx-auto mb-2 rounded-lg"
            />
            <h2 className="text-[#53c2be] text-xl font-semibold">
              {faculty.name}
            </h2>
            <p className="text-[#53c2be] text-sm mb-2">{faculty.tech}</p>
            <Link href={faculty.url}>
              <span className="text-blue-500 hover:underline">View More</span>
            </Link>
          </div>
        ))}
      </div>
      <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-1 text-center content-center ease-in-out duration-300">
        {faculties.map((faculty) => (
          <div
            key={faculty.id}
            className="shadow-lg scale-90 hover:scale-95 ease-in-out duration-300"
          >
            <Image
              width={500}
              height={500}
              src={faculty.pic}
              alt={faculty.name}
              className="w-full h-[250px] md:w-[300px] md:h-[350px] mx-auto mb-2 rounded-lg"
            />
            <h2 className="text-[#43fcff] text-xl font-semibold">
              {faculty.name}
            </h2>
            <p className="text-[#47bcb8] text-sm mb-2">{faculty.tech}</p>
            <Link href={faculty.url} className="">
              <span className="text-blue-500 hover:underline ease-in-out duration-300">
                View More
              </span>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};
