import EventCompo from "@/components/EventCompo";
import { events } from "@/context/data";
import React from "react";

const Event = () => {
  return (
    <>
      <EventCompo
        eventTitle={"Byte IT"}
        eventDay={"On this 18"}
        eventDateSup={`th`}
        eventMonth={"December"}
        eventAbout={"About Events"}
        setEventDate={true}
        setEventLineClamp={true}
        eventData={events}
        eventBtnLink={"Read more"}
      />
    </>
  );
};

export default Event;
