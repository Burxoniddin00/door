"use client";
import React, { useEffect, useRef } from "react";

const Camera = () => {
  const videoRef = useRef(null);

  const getVideo = () => {
    navigator.mediaDevices
      .getUserMedia({
        video: {
          width: 1920,
          height: 1080,
          facingMode: { exact: "environment" }, // orqa kamerani tanlash
        },
      })
      .then((stream) => {
        let video = videoRef.current;
        if (video) {
          video.srcObject = stream;
          video.play();
        }
      })
      .catch((err) => {
        console.error(err);
      });
  };

  useEffect(() => {
    getVideo();
  }, [videoRef]);

  return (
    <div className="main_app">
      <div className="camera">
        <video ref={videoRef} autoPlay playsInline></video>
      </div>
    </div>
  );
};

export default Camera;
