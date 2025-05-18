import { useEffect, useState } from 'react';
import './Preloader.scss';

export default function Preloader() {
  const [visible, setVisible] = useState(true);
  const [percent, setpercent] = useState(0);

useEffect(() => {
  const timer = setTimeout(() => {
    setVisible(false);
  }, 2700);

  const interval = setInterval(() => {
    setpercent(prev => {
      if (prev >= 100) {
        clearInterval(interval);
        return 100;
      }
      return prev + 1;
    });
  }, 25);

  return () => {
    clearTimeout(timer);
    clearInterval(interval);
  };
}, []);

  return (
    <div className={`Preloader ${!visible ? 'Preloader_hide' : ''}`}>
      {/* <video
        className="Preloader_video"
        autoPlay
        muted
        loop
        playsInline
      >
        <source src="https://assets.awwwards.com/awards/element/2024/12/676af25a92552652977357.mp4" type="video/mp4" />
        Ваш браузер не поддерживает видео.
      </video> */}
      <div className='Preloader_content'>
          <div className='Preloader_content_white'>
              <div className='Preloader_content_red'>
                <div className='Preloader_content_black'></div>
              </div>
          </div>
          <div className='Preloader_content_percent free_img'>
            <div className='Preloader_content_percent_text'>
              FYI: WE DON'T DO 'ESTIMATED LOADING TIMES. WE'RE TOO BUSY MEETING ACTUAL DEADLINES.
            </div>
            <div className='Preloader_content_percent_percent'>
              {percent}%
            </div>
          </div>
        </div>
    </div>
  );
}
