import React from "react";
import SongDetails from "./SongDetails";
import SongList from "./SongList";

function App() {
  return (
    <div className="grid grid-cols-8 m-20">
      <div className="col-span-5">
        <SongList ></SongList>
      </div>
      <div className="col-span-3 pl-3">
        <SongDetails ></SongDetails>
      </div>
    </div>
  );
}

export default App;
