import * as React from "react";
import "./App.css";
import Expander from "./Components/Expander";
import Material_content from "./Components/Material_content";
import Data from "./Sample_data/Sampletext1.json";
import Player from "./Components/Video_player";
import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";
import VideoResource from "./Pages/Video_resource";

function App() {
  return (
    <>
      <div className="lmsapp">
        <div className="rectangle"></div>

        <div className="grid1">
          <div className="titlename">
            <div className="title-header">Lectures</div>
            <div className="title-subheader">
              Our high-quality video lessons are created by expert educators,
              ensuring that you receive the best possible instruction right at
              your fingertips
            </div>
          </div>

          <div className="Expander-class">
            {Data.map((item, index) => {
              return (
                <>
                  <Expander key={index} item={item} />
                </>
              );
            })}
          </div>
        </div>

        <div className="grid2">
          <h1 className="video-header">Content Video Player</h1>
          <div className="video-player">
            <Player />
          </div>

          <div className="material-content">
            <Material_content />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
