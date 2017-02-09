import React from 'react';

const VideoListItem = (props) => {
  return <li><img src={props.video.snippet.thumbnails.medium.url} /></li>  
};

export default VideoListItem;
