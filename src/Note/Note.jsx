import { useGSAP } from '@gsap/react';
import './Note.scss';
import { observer } from 'mobx-react-lite';
import { useTranslation } from 'react-i18next';
import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import languageStore from '../languageStore';

export default observer(() => {

    const { t } = useTranslation();
    const scope = useRef(null)

    const [progress, setprogress] = useState(0);

    useGSAP(() => {
        gsap.to('.Note_header', {
            y: '0px',
            scrollTrigger: {
                trigger: '.Note',
                scrub: 1,
                // markers: true,
                start: 'top 70%',
                end: 'bottom 70%',
                onUpdate: self => {
                    const percent = Math.round(self.progress * 100);
                    console.log('Progress:', percent + '%');
                    setprogress(percent)
                }
            }
        })
    }, { scope: scope })

    const [text, settext] = useState('a');

    useEffect(() => {
        settext(t('Мы специализируемся на предоставлении уникальных и эффективных решений, разработанных с учетом специфических потребностей арбитражных команд и соло-медиабаеров, работающих с Google Ads.'))
    }, [languageStore.activeLanguage])


    return (
        <div className='Note_wrapper' ref={scope}>
            <div className='Note container'>
                <div className='Note_header'>
                    Outcore
                </div>
                <div className='Note_content'>
                    <div className='Note_left free_img'>
                        <img src="/aboutUsDuga.svg" alt="" />
                    </div>
                    <div className='Note_text'>
                        {text.split('').map((el, index) => {
                            return <span style={{
                                color: ((text.length / 100) * progress) > index ? '#fff' : '#fff8'
                            }}>{el}</span>
                        })}
                    </div>
                    <div className='Note_right free_img'>
                        <img src="/aboutUsDuga.svg" alt="" />
                    </div>
                </div>
            </div>
        </div>
    )
})