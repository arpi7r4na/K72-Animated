import React from 'react'
import videoFile from "../../assets/video.mp4";
const Video = () => {
  return (
    <div className='h-full w-full'>
        <video
          className="h-full w-full object-cover"
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          src={videoFile}
        />
    </div>
  )
}

export default Video