import './Hero.scss';
import { useEffect, useRef } from 'react';
import HeroCta from './HeroCta/HeroCta';
import Hls from 'hls.js';

export default ({ type = 2 }) => {
    const target = useRef({ x: 0, y: 0, rot: 0 });
    const leftState = useRef({ x: 0, y: 0, rot: 0 });
    const rightState = useRef({ x: 0, y: 0, rot: 0 });

    const leftHand = useRef(null);
    const rightHand = useRef(null);

    useEffect(() => {
        const handleMouseMove = (e) => {
            const { innerWidth, innerHeight } = window;
            const x = e.clientX / innerWidth;
            const y = e.clientY / innerHeight;

            target.current.x = (1 - x) * 30;
            target.current.y = (1 - y) * 15;
            target.current.rot = (x - 0.5) * 10; // -5 до +5 градусов
        };

        const animate = () => {
            // Левая — медленно (0.03), правая — быстро (0.2)
            leftState.current.x += (target.current.x - leftState.current.x) * 0.03;
            leftState.current.y += (target.current.y - leftState.current.y) * 0.03;
            leftState.current.rot += (-target.current.rot - leftState.current.rot) * 0.03;

            rightState.current.x += (target.current.x - rightState.current.x) * 0.2;
            rightState.current.y += (target.current.y - rightState.current.y) * 0.2;
            rightState.current.rot += (target.current.rot - rightState.current.rot) * 0.2;

            if (leftHand.current)
                leftHand.current.style.transform = `translate(${leftState.current.x.toFixed(2)}px, ${leftState.current.y.toFixed(2)}px) rotate(${leftState.current.rot.toFixed(2)}deg)`;
            if (rightHand.current)
                rightHand.current.style.transform = `translate(${rightState.current.x.toFixed(2)}px, ${rightState.current.y.toFixed(2)}px) rotate(${rightState.current.rot.toFixed(2)}deg)`;

            requestAnimationFrame(animate);
        };

        window.addEventListener('mousemove', handleMouseMove);
        animate();

        return () => window.removeEventListener('mousemove', handleMouseMove);
    }, []);


    const video1 = useRef(null)
    const video2 = useRef(null)

    useEffect(() => {
        let hls1;

        if (video1.current) {
            if (Hls.isSupported()) {
                hls1 = new Hls();
                hls1.loadSource('https://speed-video.qteam.dev/outcore/1/master.m3u8');
                hls1.attachMedia(video1.current);
                hls1.on(Hls.Events.MANIFEST_PARSED, () => {
                    video1.current.addEventListener('canplay', () => {
                        video1.current.play().catch(console.error);
                    }, { once: true });
                });
            } else if (video1.current.canPlayType('application/vnd.apple.mpegurl')) {
                video1.current.src = 'https://speed-video.qteam.dev/outcore/1/master.m3u8';
                video1.current.addEventListener('canplay', () => {
                    video1.current.play().catch(console.error);
                }, { once: true });
            }

            const handleEnded = () => {
                console.log('video1 ended');
                video1.current.style.opacity = 0;

                if (video2.current) {
                    if (video2.current.readyState >= 3) {
                        video2.current.style.opacity = 1;
                        video2.current.play().catch(console.error);
                    } else {
                        video2.current.addEventListener('canplay', () => {
                            video2.current.style.opacity = 1;
                            video2.current.play().catch(console.error);
                        }, { once: true });
                    }
                }
            };

            video1.current.addEventListener('ended', handleEnded);
            return () => {
                // video1.current.removeEventListener('ended', handleEnded);
                if (hls1) hls1.destroy();
            };
        }
    }, []);

    useEffect(() => {
        let hls2;

        if (video2.current) {
            if (Hls.isSupported()) {
                hls2 = new Hls();
                hls2.loadSource('https://speed-video.qteam.dev/outcore/2/master.m3u8');
                hls2.attachMedia(video2.current);
            } else if (video2.current.canPlayType('application/vnd.apple.mpegurl')) {
                video2.current.src = 'https://speed-video.qteam.dev/outcore/2/master.m3u8';
            }
            video2.current.style.opacity = 0;
        }

        return () => {
            if (hls2) hls2.destroy();
        };
    }, []);





    return (
        <div className='Hero'>
            <div className={`Hero_decor ${type > 0 && `Hero_decor_vid`}`}>
                {(type === 0 || !type) && <>
                    <div className='Hero_decor_leftHand free_img' ref={leftHand}>
                        <img src="/handLeft.webp" alt="" />
                    </div>
                    <div className='Hero_decor_crystall free_img'>
                        <div className='Hero_decor_crystall_light_large free_img'>
                            <div className='Hero_decor_crystall_light_large_inner'></div>
                        </div>
                        <div className='Hero_decor_crystall_light_blue free_img'>
                            <div className='Hero_decor_crystall_light_blue_inner'></div>
                        </div>
                        <div className='Hero_decor_crystall_light_green free_img'>
                            <div className='Hero_decor_crystall_light_green_inner'></div>
                        </div>
                        <div className='Hero_decor_crystall_item free_img'>
                            <img src="/crystall.webp" alt="" />
                        </div>
                    </div>
                    <div className='Hero_decor_rightHand free_img' ref={rightHand}>
                        <img src="/handRight.webp" alt="" />
                    </div>
                </>}
                {
                    type > 0 && <>
                        {/* <div className='Hero_decor_video free_img'> */}
                        <div className='Hero_decor_video_fade free_img'>
                            <div className='Hero_decor_video_fade_inner'></div>
                        </div>
                        <div className='Hero_decor_video_2_wrapper free_img'>
                            <video loop muted playsInline
                                preload="auto"
                                crossOrigin="anonymous"
                                className='Hero_decor_video' ref={video2} />
                        </div>
                        <video autoPlay muted playsInline
                            preload="auto"
                            crossOrigin="anonymous" className='Hero_decor_video' ref={video1} />
                        <div className='Hero_decor_video_fade Hero_decor_video_fade_r free_img'>
                            <div className='Hero_decor_video_fade_inner'></div>
                        </div>
                        {/* </div> */}
                    </>
                }
            </div>
            <HeroCta />
        </div >
    )
}