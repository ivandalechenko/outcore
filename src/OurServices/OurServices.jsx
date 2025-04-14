import { useEffect, useState } from 'react';
import './OurServices.scss';
import CTA from '../CTA/CTA';
export default () => {

    const [activeElement, setactiveElement] = useState(0);

    let interval
    useEffect(() => {
        interval = setInterval(() => {
            setactiveElement(prev => (prev + 1) % 7)
        }, 2000);

        return () => {
            clearInterval(interval)
        }
    }, [])

    return (
        <div className='OurServices'>
            <div className='OurServices_note'>
                <div className='OurServices_note_duga free_img'>
                    <img src="/coloredDuga.svg" alt="" />
                </div>
                <div className='OurServices_note_content'>
                    Мы предлагаем не только проверенные аккаунты, но и полный спектр услуг для арбитражников: от настройки прокси до помощи с залива трафика.
                </div>
                <div className='OurServices_note_duga OurServices_note_duga_right free_img'>
                    <img src="/coloredDuga.svg" alt="" />
                </div>
            </div>
            <div className='OurServices_header'>
                Наши услуги
            </div>
            <div className='OurServices_list'>
                {
                    [
                        'ФАРМ-СЕРВИС',
                        'ТЕХНИЧЕСКОЕ СОПРОВОЖДЕНИЕ',
                        'СПЕНДОВЫЕ АККАУНТЫ GOOGLE ADS',
                        'АККАУНТЫ С ПРЕДВАРИТЕЛЬНЫМ ПРОГРЕВОМ',
                        'КОНСАЛТИНГ ПО GOOGLE ADS',
                        'ВСЕ ВИДЫ ВЕРИФИКАЦИИ',
                        'ПЛАТЕЖНЫЕ РЕШЕНИЯ'
                    ].map((el, index) => {
                        return <div className={`OurServices_element ${index === activeElement && 'OurServices_element_active'}`}>
                            <div className='OurServices_element_arrow free_img'>
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
    )
}