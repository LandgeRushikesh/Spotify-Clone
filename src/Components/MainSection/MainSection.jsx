import React from "react";
import PopularArtists from "../PopularArtists/PopularArtists";
import TrendingSongs from "../TrendingSongs/TrendingSongs";

function MainSection() {
  return (
    <div className="flex flex-col items-center h-full overflow-y-auto">
      <div className="border-2 border-red-600 w-[98%]  my-4">
        <h2>Treding Songs</h2>
        <TrendingSongs/>
      </div>
      <div className="border-2 border-yellow-600 w-[98%] my-4">
        <h2>Popular Artists</h2>
        <PopularArtists />
      </div>
      <div className="border-2 border-yellow-600 w-[98%] my-4">
        <h2>Popular Artists</h2>
        <PopularArtists />
      </div>
    </div>
  );
}

export default MainSection;
