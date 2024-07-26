"use client"
import React, { useEffect, useRef, useState } from "react";
const Camera = () => {
  const videoRef = useRef(null);
  const getVideo = () => {
    navigator.mediaDevices
      .getUserMedia({
        video: { width: 1920, height: 1080 },
      })
      .then((statusbar) => {
        let video = videoRef.current;
        video.srcObject = statusbar;
        video.play();
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
        <video ref={videoRef}></video>
      </div>
    </div>
  );
};

export default Camera;
