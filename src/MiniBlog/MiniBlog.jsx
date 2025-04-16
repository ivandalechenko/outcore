import './MiniBlog.scss';

import BlogElements from "../BlogElements";
import { useEffect, useMemo, useState } from 'react';
import languageStore from '../languageStore';

export default () => {

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
        if (windowWidth <= 470) return 260;
        if (windowWidth <= 650) return 400;
        return 570;
    }, [windowWidth]);

    return (
        <div className='MiniBlog'>
            <div className='MiniBlog_header'>
                Будьте в центре событий арбитражного мира
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
                                        Время чтения: {el.minutesToRead} мин
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
                                <div className='MiniBlog_element_header'>
                                    {el.name}
                                    {/* {el.name[languageStore.activeLanguage]} */}
                                </div>
                                <div className='MiniBlog_element_text'>
                                    {el.text.slice(0, 120)}{el.text.length > 120 && '...'}
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
                    Мы регулярно организуем мероприятия для арбитражников и маркетологов, где делимся опытом, последними трендами и лайфхаками.
                    с Google Ads.
                </div>
                <div className='MiniBlog_note_duga MiniBlog_note_duga_right free_img'>
                    <img src="/aboutUsDuga.svg" alt="" />
                </div>
            </div>
        </div>
    )
}