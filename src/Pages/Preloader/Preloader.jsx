import { useEffect, useState } from 'react';
import './Preloader.scss';

export default function Preloader() {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(false);
    }, 1900);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className={`Preloader ${!visible ? 'Preloader_hide' : ''}`}>
      <video
        className="Preloader_video"
        autoPlay
        muted
        loop
        playsInline
      >
        <source src="https://assets.awwwards.com/awards/element/2024/12/676af25a92552652977357.mp4" type="video/mp4" />
        Ваш браузер не поддерживает видео.
      </video>
    </div>
  );
}
