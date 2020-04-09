import React from 'react';

const CardBody = ({ title, children }) => (
  <div className='card__body'>
    <h2>{title}</h2>
    {children}
  </div>
);

export default CardBody;
