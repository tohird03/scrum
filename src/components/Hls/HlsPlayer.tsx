import React from 'react';

type Props = {
  videoId: string
}

const VideoPlayer = ({ videoId }: Props) => {
  return (
    <video controls>
      <source src={`http://localhost:3001/video/${videoId}`} autoFocus type="video/mp4" />
      Your browser does not support the video tag.
    </video>
  );
};

export default VideoPlayer;
