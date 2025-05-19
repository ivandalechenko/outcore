import './MiniBlog.scss';

import BlogElements from "../BlogElements";
import { useEffect, useMemo, useState } from 'react';
import { observer } from 'mobx-react-lite';
import { useTranslation } from 'react-i18next';
import languageStore from '../languageStore';

import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useRef } from 'react';

gsap.registerPlugin(ScrollTrigger);

export default observer(() => {

    const { t } = useTranslation();

    const [currentSlide, setcurrentSlide] = useState(0);

    const handleNext = () => {
        setcurrentSlide(prev => (prev + 1) % BlogElements.length)
    }
    const handlePrev = () => {
        setcurrentSlide(prev => (prev - 1) < 0 ? BlogElements.length - 1 : prev - 1)
    }

    const [windowWidth, setWindowWidth] = useState(window.innerWidth);

    useEffect(() => {
        const handleResize = () => setWindowWidth(window.innerWidth);
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const scrollOffset = useMemo(() => {
        if (windowWidth <= 470) return 235;
        if (windowWidth <= 650) return 380;
        return 470;
    }, [windowWidth]);

    const scope = useRef(null);

    useGSAP(() => {
        gsap.to('.MiniBlog_note_duga:not(.MiniBlog_note_duga_right)', {
            x: -1200,
            scrollTrigger: {
                trigger: '.MiniBlog_note',
                scrub: 1,
                start: 'top 70%',
                end: 'bottom top',
                // markers: true
            }
        });

        gsap.to('.MiniBlog_note_duga_right', {
            x: 1200,
            scrollTrigger: {
                trigger: '.MiniBlog_note',
                scrub: 1,
                start: 'top 70%',
                end: 'bottom top',
            }
        });
    }, { scope });

    return (
        <div className='MiniBlog' ref={scope}>
            <div className='MiniBlog_header'>
                {t('Будьте в центре событий арбитражного мира')}
            </div>
            <div className='MiniBlog_slider'>
                {
                    BlogElements.map((el, index) => {
                        return <div key={`miniBlogEl-${index}`} className='MiniBlog_element_wrapper free_img' style={{
                            transform: `translate(${(index - currentSlide) * scrollOffset}px, 0px) scale(${(currentSlide - index) === 0 ? 1 : 0.9})`,
                            opacity: (index - currentSlide) === 0 ? 1 : .5
                        }}>
                            <div className='MiniBlog_element'>
                                <div className='MiniBlog_element_header'>
                                    <div className='MiniBlog_element_date'>
                                        {el.date}
                                    </div>
                                    <div className='MiniBlog_element_minutesToRead'>
                                        {el.minutesToRead[languageStore.activeLanguage]}
                                    </div>
                                </div>
                                <div className='MiniBlog_element_img'>
                                    <img src={el.img} alt="" />
                                </div>
                                <div className='MiniBlog_element_tags'>
                                    {
                                        el.tags.map((tag, tag_index) => {
                                            return <div key={`miniBlogEl-${index}-tag-${tag_index}`} className='MiniBlog_element_tag'>
                                                #{tag}
                                            </div>
                                        })
                                    }
                                </div>
                                <div className='MiniBlog_element_header MiniBlog_element_header_mt'>
                                    {el.name[languageStore.activeLanguage]}
                                </div>
                                <div className='MiniBlog_element_text'>
                                    {typeof el.text === 'object' ? el.text[languageStore.activeLanguage].slice(0, 150) : el.text.slice(0, 150)}
                                    ...
                                </div>
                            </div>
                        </div>
                    })
                }
            </div>
            <div className='MiniBlog_arrows' >
                <div className='MiniBlog_arrow' onClick={handlePrev}>
                    <img src="/miniBlogArrow.svg" alt="" />
                </div>
                <div className='MiniBlog_arrow MiniBlog_arrow_right' onClick={handleNext}>
                    <img src="/miniBlogArrow.svg" alt="" />
                </div>
            </div>
            <div className='MiniBlog_note'>
                <div className='MiniBlog_note_duga free_img'>
                    <img src="/aboutUsDuga.svg" alt="" />
                </div>
                <div className='MiniBlog_note_content'>
                    {t('Мы регулярно присутствуем на мероприятих для арбитражников и маркетологов, где делимся опытом, последними трендами и лайфхаками с Google Ads.')}
                </div>
                <div className='MiniBlog_note_duga MiniBlog_note_duga_right free_img'>
                    <img src="/aboutUsDuga.svg" alt="" />
                </div>
            </div>
        </div>
    )
})
