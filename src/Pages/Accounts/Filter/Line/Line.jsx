import React, { useState } from 'react';
import './Line.scss';

const Line = ({ title, min, max }) => {

  const [from, setfrom] = useState(min);
  const [to, setto] = useState(max);

  const [minMouseDown, setminMouseDown] = useState(false);
  const [maxMouseDown, setmaxMouseDown] = useState(false);



  return (
    <div className="Line">
      <div className="Line__row">
        <span className="Line__label">{title}</span>
        <span className="Line__range">{min} - {max}</span>
      </div>

      <div className='Line_content' onClick={() => { }}>
        <div className='Line_left'></div>
        <div className='Line_center'>
          <div className='Line_center_ball_wrapper free_img'>
            <div className='Line_center_ball' onMouseDown={() => setminMouseDown(true)} onMouseUp={() => setminMouseDown(false)}></div>
          </div>
          <div className='Line_center_ball_wrapper free_img'>
            <div className='Line_center_ball' onMouseDown={() => setmaxMouseDown(true)} onMouseUp={() => setmaxMouseDown(false)}></div>
          </div>
        </div>
        <div className='Line_right'>

        </div>
      </div>

    </div>
  );
};

export default Line;
