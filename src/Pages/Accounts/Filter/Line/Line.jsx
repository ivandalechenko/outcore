import React, { useState, useRef, useEffect } from 'react';
import './Line.scss';

const Line = ({ title, minValue, maxValue, currentMin, currentMax, onChange }) => {

  const [minPercent, setminPercent] = useState(0);
  const [maxPercent, setmaxPercent] = useState(100);

  const newCurrentMin = Math.floor(Math.max((minPercent * (maxValue / 100)), minValue));
  const newCurrentMax = Math.floor(Math.max((maxPercent * (maxValue / 100)), minValue));

  useEffect(() => {
    // console.log(`minPercent: ${minPercent}, maxPercent: ${maxPercent}`);
    // console.log(`newCurrentMin: ${newCurrentMin}, newCurrentMax: ${newCurrentMax}`);

    onChange({ min: newCurrentMin, max: newCurrentMax })
  }, [minPercent, maxPercent])

  useEffect(() => {
    //Очистка
    if (currentMin === minValue && currentMax === maxValue) {    
      //я не могу понять как можно менять визуально переменную, то фильтр работает, а при очистке значения не сбрасываються
      setminPercent(0);
      setmaxPercent(100);
    }
  }, [currentMin, currentMax, minValue, maxValue]);


  return (
    <div className="Line">

      <div className="Line_wrapper">
        <div className="Line_values">
          <div className='Line_value_title'>
            {title}
          </div>
          <div className='Line_value_nubmers'>
            <span>{newCurrentMin}</span> – <span>{newCurrentMax}</span>
          </div>
        </div>
        <div className="Line_container">
          <div className="Line_slider-track" style={{
            background: `linear-gradient(to right, #fff2 ${minPercent}%, #0201FF ${minPercent}%, #81DBDF ${maxPercent}%, #fff2 ${maxPercent}%)`
          }} />
          <div className='lefttInpt'>
            <input
              type="range"
              min="0"
              max="100"
              value={minPercent}
              onChange={(e) => setminPercent(+e.target.value)}
            />
          </div>
          <div className='rightInpt'>

            <input
              type="range"
              min="0"
              max="100"
              value={maxPercent}
              onChange={(e) => setmaxPercent(+e.target.value)}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Line;
