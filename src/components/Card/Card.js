import React from 'react';
import './Card.css'; // Correctly imports Card.css

const Card = ({ title, description, imageSrc }) => {
  return (
    <div className='card'>
      <img src={imageSrc} alt={title} className='card-img-top' />
      <div className='card-body'>
        <h5 className='card-title'>{title}</h5>
        <p className='card-description'>{description}</p>
      </div>
    </div>
  );
};

export default Card;
