import React from "react";
import { musics } from "./musicsdata";
import MusicPlayer from "@/components/MusicPlayer";

const getData = (mus) => {
  const musData = musics[mus];
  if (musData) {
    return musData;
  }
  // return notFound();
  return <>Not Found</>;
};

const KaraokePlayer = ({ params }) => {
  const musData = getData(params.music);
  return (
    <>
      <div className="w-full h-[80vh] flex flex-col gap-3 items-center justify-center">
        <MusicPlayer setTitle={musData.title} setAudio={musData.audio} setLyric={musData.lyric} />
      </div>
    </>
  );
};

export default KaraokePlayer;
