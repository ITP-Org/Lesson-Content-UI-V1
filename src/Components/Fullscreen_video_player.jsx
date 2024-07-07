import React from "react";
import ReactPlayer from "react-player";

const video = "https://www.youtube.com/watch?v=nqPV8K6Zqfw";

const Video_player = () => {
  return (
    <div className="fullscreen-player">
      <ReactPlayer
        className="fullscreen-reactplayer"
        url={video}
        controls={true}
        width={2000}
        height={480}
      />
    </div>
  );
};
export default Video_player;
