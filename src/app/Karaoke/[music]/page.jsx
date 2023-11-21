import React from "react";
import { musicNlyrics } from "./musicData";
import MusicNLyricPlayer from "@/components/MusicNLyricPlayer";

const getData = (mus) => {
  const musData = musicNlyrics[mus];
  if (musData) {
    return musData;
  }
  // return notFound();
};

const MusicPlayer = ({ params }) => {
  const musData = getData(params.music);
  return (
    <>
      <div className="">
        <h1 className="catoTitle text-[25px] text-[#53c28b] uppercase font-bold">
          {params.music}
        </h1>
      </div>
      <div className="">
        {/* {musData.map((musNlrc) => (
          <div className="w-full h-full">
            <h1 className="catoTitle text-[25px] text-[#53c28b] uppercase font-bold">
              {musNlrc.title}
            </h1>
            <div className="">
              <MusicNLyricPlayer
                setAudio={musNlrc.audio}
                setLyric={musNlrc.lyric}
              />
            </div>
          </div>
        ))} */}

        <div className="w-full h-full">
          {musData.map((musLrc) => {
            <div className="">
              <h1 className="catoTitle text-[25px] text-[#53c28b] uppercase font-bold">
                {musLrc.title}
              </h1>
              <div className="">
                <MusicNLyricPlayer
                  setAudio={musLrc.audio}
                  setLyric={musLrc.lyric}
                />
              </div>
            </div>;
          })}
        </div>
      </div>
    </>
  );
};

export default MusicPlayer;
