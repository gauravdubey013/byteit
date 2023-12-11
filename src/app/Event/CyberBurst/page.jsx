import EventCompo from "@/components/EventCompo";
import { cyberBurst } from "@/context/data";
import React from "react";

const CyberBurst = () => {
  return (
    <>
      <EventCompo
        eventTitle={"CyberBurst"}
        eventDay={"18"}
        eventDateSup={`th`}
        eventMonth={"December"}
        eventDec={
          "The Cyberburst event is a dynamic gathering that combines the excitement of gaming with the importance of cybersecurity and digital awareness. Participants engage in a series of interactive games and challenges designed to enhance their understanding of cybersecurity principles, digital threats, and best practices for online safety. Through this event, players not only have fun but also gain valuable knowledge and skills to protect themselves and others in the digital world."
        }
        eventAbout={"About Activites"}
        eventData={cyberBurst}
        eventBtnLink={"Register Now"}
        eventTarget={"_blank"}
      />
    </>
  );
};

export default CyberBurst;
