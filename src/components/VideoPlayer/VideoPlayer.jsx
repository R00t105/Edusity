import React, { useRef } from "react";
import "./VideoPlayer.css";
import Video from "../../assests/Video.mp4";

const VideoPlayer = ({ play, SetPlay }) => {

    const player = useRef(null)
    const closePlayer = (e) => {
        if(e.target === player.current){
            SetPlay(false);
        }
    }

  return (
    <div className={`VideoPlayer ${play ? "" : "hide"}`} ref={player} onClick={closePlayer}>

      <video src={Video} autoPlay muted controls></video>
    </div>
  );
};

export default VideoPlayer;
