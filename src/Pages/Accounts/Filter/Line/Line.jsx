import React, { useState } from 'react';
import './Line.scss';

const Line = ({ title, min, max}) => {
  const [value, setValue] = useState(500000);

  return (
    <div className="Line">
      <div className="Line__row">
        <span className="Line__label">{title}</span>
        <span className="Line__range">{min} - {max}</span>
      </div>
      <input
        type="range"
        min={min}
        max={max}
        value={value}
        className="Line__slider"
        onChange={(e) => setValue(e.target.value)}
      />
      {/* <div className="Line__display">{value}</div> */}
    </div>
  );
};

export default Line;
