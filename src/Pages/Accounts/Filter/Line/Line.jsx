import React, { useState, useRef, useEffect } from 'react';
import './Line.scss';

const Line = ({ title, minValue, maxValue, valueMin, valueMax, onChange }) => {

  const [min, setMin] = useState(0);
  const [max, setMax] = useState(100);

  const slider1 = useRef(null);
  const slider2 = useRef(null);
  const track = useRef(null);
  const minGap = 0;

  const updateTrack = () => {
    if (!slider1.current || !slider2.current || !track.current) return;
    const percent1 = (min / 100) * 100;
    const percent2 = (max / 100) * 100;
    track.current.style.background = `linear-gradient(to right, #fff2 ${percent1}%, #0201FF ${percent1}%, #81DBDF ${percent2}%, #fff2 ${percent2}%)`;
  };



  useEffect(updateTrack, [min, max]);

  const slideOne = (e) => {
    const val = Math.min(+e.target.value, max - minGap);
    setMin(val);
  };

  const slideTwo = (e) => {
    const val = Math.max(+e.target.value, min + minGap);
    setMax(val);
  };

  const realMin = Math.floor(((maxValue - minValue) / 100) * min + minValue);
  const realMax = Math.floor(((maxValue - minValue) / 100) * max + minValue);

  useEffect(() => {
    if (onChange) {
      onChange({ min: realMin, max: realMax });            
    }
  }, [realMin, realMax]);

    useEffect(() => {
      if (valueMin !== undefined && valueMax !== undefined) {
        const minPercent = ((valueMin - minValue) / (maxValue - minValue)) * 100;
        const maxPercent = ((valueMax - minValue) / (maxValue - minValue)) * 100;
        setMin(minPercent);
        setMax(maxPercent);
      }
    }, [valueMin, valueMax, minValue, maxValue]);

  return (
    <div className="Line">

      <div className="Line_wrapper">
        <div className="Line_values">
          <div className='Line_value_title'>
            {title}
          </div>
          <div className='Line_value_nubmers'>
            <span>{realMin}</span> – <span>{realMax}</span>
          </div>
        </div>
        <div className="Line_container">
          <div className="Line_slider-track" ref={track}></div>
          <div className='lefttInpt'>
            <input
              type="range"
              min="0"
              max="100"
              value={min}
              onChange={slideOne}
              ref={slider1}
            />
          </div>
          <div className='rightInpt'>

            <input
              type="range"
              min="0"
              max="100"
              value={max}
              onChange={slideTwo}
              ref={slider2}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Line;
