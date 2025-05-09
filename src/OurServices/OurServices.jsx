import { useEffect, useState } from 'react';
import './OurServices.scss';
import CTA from '../CTA/CTA';
import { observer } from 'mobx-react-lite';
import { useTranslation } from 'react-i18next';
import { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';

export default observer(() => {

    const { t } = useTranslation();

    const [activeElement, setactiveElement] = useState(0);

    // let interval
    // useEffect(() => {
    //     interval = setInterval(() => {
    //         setactiveElement(prev => (prev + 1) % 7)
    //     }, 2000);

    //     return () => {
    //         clearInterval(interval)
    //     }
    // }, [])



    const scope = useRef(null)


    useGSAP(() => {
        gsap.to('.OurServices_list', {
            y: '0px',
            scrollTrigger: {
                trigger: '.OurServices',
                scrub: 1,
                // markers: true,
                start: '50% 80%',
                end: 'bottom 80%',
                onUpdate: self => {
                    const percent = Math.round(self.progress * 6);
                    console.log('Progress:', percent + '%');
                    setactiveElement(percent)
                }
            }
        })
    }, { scope: scope })

    const linesCount = 5;
    const linesTime = 20;

    return (
        <>
            <div className='OurServices_wrapper' ref={scope}>
                <div className='OurServices'>
                    <div className='OurServices_note'>
                        <div className='OurServices_note_duga free_img'>
                            <img src="/coloredDuga.svg" alt="" />
                        </div>
                        <div className='OurServices_note_content'>
                            {t('Мы предлагаем не только проверенные аккаунты, но и полный спектр услуг для арбитражников: от настройки прокси до помощи с залива трафика.')}
                        </div>
                        <div className='OurServices_note_duga OurServices_note_duga_right free_img'>
                            <img src="/coloredDuga.svg" alt="" />
                        </div>
                    </div>
                    <div className='OurServices_header'>
                        {t('Наши услуги')}
                    </div>
                    <div className='OurServices_list'>
                        {
                            [
                                t('ФАРМ-СЕРВИС'),
                                t('ТЕХНИЧЕСКОЕ СОПРОВОЖДЕНИЕ'),
                                t('СПЕНДОВЫЕ АККАУНТЫ GOOGLE ADS'),
                                t('АККАУНТЫ С ПРЕДВАРИТЕЛЬНЫМ ПРОГРЕВОМ'),
                                t('КОНСАЛТИНГ ПО GOOGLE ADS'),
                                t('ВСЕ ВИДЫ ВЕРИФИКАЦИИ'),
                                t('ПЛАТЕЖНЫЕ РЕШЕНИЯ')
                            ].map((el, index) => {
                                return <div className={`OurServices_element ${index === activeElement && 'OurServices_element_active'}`} style={{
                                    transform: `rotate3d(1, 0, 0, ${-(index - activeElement) * 15}deg)
                             translate(0px, ${(index - activeElement) * 50}px)`,
                                }}>
                                    <div className='OurServices_element_arrow OurServices_element_arrow_right free_img'>
                                        <img src="/triangle.svg" alt="" />
                                    </div>
                                    <div className='OurServices_element_content'>
                                        {el}
                                    </div>
                                    <div className='OurServices_element_arrow OurServices_element_arrow_left free_img'>
                                        <img src="/triangle.svg" alt="" />
                                    </div>
                                </div>
                            })
                        }
                    </div>
                    <div className='OurServices_cta'>
                        <CTA skin={'blue'} />
                    </div>
                </div>
            </div>

            <div className='OurServices_lines free_img'>
                {Array(linesCount)
                    .fill(0)
                    .map((_, index) => {
                        return <div className={`OurServices_line_wrapper free_img`} style={{
                            animation: `lineMove ${linesTime}s ${index * (linesTime / linesCount)}s infinite linear`
                        }}>
                            <div className='OurServices_line_inner' style={{
                                animation: `lineScale ${linesTime}s ${index * (linesTime / linesCount)}s infinite linear`
                            }}>

                            </div>
                        </div>
                    })}
            </div>
        </>

    )
})