import React from "react";
import ReactPlayer from "react-player";

const video = "https://www.youtube.com/watch?v=nqPV8K6Zqfw";

const Video_player = () => {
  return (
    <div className="player">
      <div className="alt-text">Video Player</div>
      <ReactPlayer className="reactplayer" url={video} controls={true} />
    </div>
  );
};
export default Video_player;
