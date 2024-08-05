import React from 'react';
import { testimonials } from '../data';

const Testimonials = () => {
  return (
    <div>
      <h2>Testimonials</h2>
      <ul className="list-group">
        {testimonials.map((testimonial, index) => (
          <li key={index} className="list-group-item">{testimonial}</li>
        ))}
      </ul>
    </div>
  );
};

export default Testimonials;
