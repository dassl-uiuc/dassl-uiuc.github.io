// src/components/Section.js
import React from 'react';

const Section = ({ id, title, children }) => (
  <div className="container">
    <h2 id={id}>{title}</h2>
    {children}
  </div>
);

export default Section;
