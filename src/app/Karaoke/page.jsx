import React from "react";
import Link from "next/link";

const KaraokeMenu = () => {
  return (
    <>
      <div className="w-full h-full flex flex-col gap-5 p-20">
        <Link href={"/Karaoke/theGoodPart"}>The Good Part - ARJ</Link>
        <Link href={"/Karaoke/theLoneliest"}>The Loneliest - Mae</Link>
      </div>
    </>
  );
};

export default KaraokeMenu;
