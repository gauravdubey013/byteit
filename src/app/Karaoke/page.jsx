import React from "react";
import Link from "next/link";

const KaraokeMenu = () => {
  return (
    <>
      <div className="w-screen h-[71vh] md:h-[82.3vh] flex flex-col gap-5 items-center justify-center p-20">
        <Link href={"/Karaoke/theGoodPart"}>The Good Part - ARJ</Link>
        <Link href={"/Karaoke/theLoneliest"}>The Loneliest - Mae</Link>
      </div>
    </>
  );
};

export default KaraokeMenu;
