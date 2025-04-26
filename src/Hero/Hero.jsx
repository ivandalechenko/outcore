import './Hero.scss';
import { useEffect, useRef } from 'react';
import HeroCta from './HeroCta/HeroCta';

export default () => {
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




    return (
        <div className='Hero'>
            <div className='Hero_decor'>
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
                {/* <video autoPlay loop className='Hero_decor_video'>
                    <source src='/1.mp4' type='video/mp4' />
                </video> */}
            </div>
            <HeroCta />
        </div>
    )
}