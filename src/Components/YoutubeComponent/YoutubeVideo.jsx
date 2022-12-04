import React, { useState, useEffect } from "react";
import "../YoutubeComponent/YoutubeCss/bootstrap.css";
import "../YoutubeComponent/YoutubeCss/Youtube.css";

function YouTubeVideo() {
  const [YouTubeVideos, setVideo] = useState([]);

  useEffect(() => {
    fetch(
      "/YouTube.json"
    )
      .then((response) => response.json())
      .then((data) => {
        const youTubeDataValue = data.items;
        setVideo(youTubeDataValue);
      });
  }, []);

  // console.log(YouTubeVideos);

  return (
    <div className="youtubeVideosWrapper">
      <div className="container">
        <div className=" row h-100 text-center row justify-content-center text-center">
          <div className="col-12 ">
            <div className=" video-title-wrapper bold title-wrapper">
              Latest Videos
            </div>
          </div>
          <br />

          {YouTubeVideos.map((singleVedio) => {
            let vidId = singleVedio.id.videoId;
            let vidLink = `https://www.youtube.com/watch?v=${vidId}`;
            let videoWrapper = (
              <div key={vidId} className="col-sm-12 col-md-4">
                <div className="singleVideoWrapper">
                  <div className="videoThumbnail">
                    <a href={vidLink} target="_blank">
                      <img
                        src={singleVedio.snippet.thumbnails.high.url}
                        alt="#"
                      />
                    </a>
                  </div>
                  <div className="videoInfoWrapper">
                    <div className="videoTitle">
                      <a href={vidLink} target="_blank">
                        {singleVedio.snippet.title}
                      </a>
                    </div>

                    <div className="videoDesc">
                      {singleVedio.snippet.description}
                    </div>
                  </div>
                </div>
              </div>
            );
            return videoWrapper;
          })}
        </div>
      </div>
    </div>
  );
}

export default YouTubeVideo;
