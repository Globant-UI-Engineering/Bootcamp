import './InspirationList.css';
import ImageCard from './ImageCard';
import React from 'react';

const InspirationList = (props) => {
  const images = props.images.map((image) => {
    return <ImageCard key={image.id} image={image} />
  });

  return <div className="image-list">{images}</div>
};

export default InspirationList;