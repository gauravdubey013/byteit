import EventCompo from "@/components/EventCompo";
import { techBlitz } from "@/context/data";
import React from "react";

const TechBlitz = () => {
  return (
    <>
      <EventCompo
        eventTitle={"TechBlitz"}
        eventDay={"20"}
        eventDateSup={`th`}
        eventMonth={"December"}
        eventDec={
          "The TechBlitz event is an electrifying showcase of technology, featuring a variety of mini-games that immerse participants in the world of cutting-edge innovations. From coding challenges to virtual reality experiences, attendees engage in interactive activities that highlight different facets of technology. This event not only entertains but also educates, offering a fun and insightful way for individuals to explore and appreciate the ever-evolving landscape of technology."
        }
        eventAbout={"About Activites"}
        eventData={techBlitz}
        eventBtnLink={"Registet Now"}
      />
    </>
  );
};

export default TechBlitz;
