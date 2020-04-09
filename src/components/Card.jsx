import React from 'react';
import '../assets/styles/components/Card.css';

const Card = ({ children }) => (
  <section className='card'>
    {children}
  </section>
);

export default Card;
