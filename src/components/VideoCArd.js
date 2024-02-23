import React from "react";

const VideoCArd = ({ info }) => {
  const { snippet, statistics } = info;
  const { channelTitle, thumbnails, title } = snippet;
  const { viewCount, likeCount, dislikeCount } = statistics;
  return (
    <div className="p-2 m-2 shadow-lg w-72 cursor-pointer">
      <img className="rounded-lg" alt="thumbnail" src={thumbnails.medium.url} />
      <ul>
        <li className="font-bold py-2">{title}</li>
        <li>Channel: {channelTitle}</li>
        <li>Views: {viewCount}</li>
      </ul>
    </div>
  );
};

export default VideoCArd;
