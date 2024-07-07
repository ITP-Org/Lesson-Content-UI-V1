import Player from "../Components/Fullscreen_video_player";
import Data from "../Sample_data/Sampletext2.json";
import Video_info from "../Components/Video_info";
import Expander_item from "../Components/Expander_Item";

function Video_page() {
  return (
    <div className="video_page">
      <div className="rectangle"></div>

      <div className="fullscreen-grid1">
        <h1 className="fullscreen-header">Fullscreen - Video Player</h1>
        <div className="fullscreen-video-player">
          <Player />
        </div>
        <Video_info />
      </div>

      <div className="fullscreen-grid2">
        <div className="Vidoe-material-content">
          <h1>Lecture Materials</h1>
          {Data.map((content, index) => {
            return (
              <>
                <Expander_item key={index} item={content} />
              </>
            );
          })}
        </div>
      </div>
    </div>
  );
}
export default Video_page;
