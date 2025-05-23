import './Footer.scss';

import LangChanger from '../LangChanger/LangChanger';
import MessageToManager from '../MessageToManager/MessageToManager';
import NavLinks from '../NavLinks/NavLinks';
import MediaLinks from '../MediaLinks/MediaLinks';
import PolicyAndRights from '../PolicyAndRights/PolicyAndRights';
import { useLocation } from 'react-router-dom';
import { observer } from 'mobx-react-lite';
import { useTranslation } from 'react-i18next';
import CTA from '../CTA/CTA';

import { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default observer(() => {

    const { t } = useTranslation();

    const location = useLocation();
    const hideLayout = location.pathname === '/request';


    const scope = useRef(null);

useGSAP(() => {
    gsap.from('.Footer_info > *, .Footer_mob > *, .Footer_decor > *', {
        y: 100,
        opacity: 0,
        stagger: 0.1,
        duration: 1,
        ease: 'power3.out',
        scrollTrigger: {
            trigger: '.Footer',
            start: 'top 20%',
            ned: 'bottom bottom',
            toggleActions: 'play none none none',
        }
    });
}, { scope });

    if (hideLayout) return
    return (
        <div className='Footer container' id='contacts' ref={scope}>
            <div className='Footer_info'>
                <div className='Footer_header'>
                    {t('Контакты')}
                    <MediaLinks />
                    <a href="mailto:Contact@outcore.io" className='Footer_header_email'>Contact@outcore.io</a>
                </div>
                <div className='Footer_content'>
                    <div className='Footer_row'>
                        <div className='Footer_links'>
                            <NavLinks />
                        </div>
                        <CTA text={t('Оставить заявку')} skin={'blue'}/>
                        <LangChanger />
                    </div>
                    <div className='Footer_row_end_bouncer'></div>
                    <div className='Footer_row Footer_row_end'>
                        <PolicyAndRights />
                        <img src="/designBy.svg" alt="" />
                    </div>
                </div>
            </div>
            <div className='Footer_mob'>
                <div className='Footer_mob_row Footer_mob_row_top'>
                    <div className='Footer_mob_left'>
                        <div className='Footer_header'>
                            {t('Контакты')}
                        </div>
                        <div className='Footer_mob_media'>
                            <MediaLinks />
                        </div>
                        <a href="mailto:Contact@outcore.io" className='Footer_header_email'>Contact@outcore.io</a>
                    </div>
                    <div className='Footer_mob_right'>
                        <NavLinks />
                    </div>
                </div>
                <div className='Footer_mob_row Footer_mob_row_cta'>
                    <CTA text={t('Оставить заявку')} skin={'blue'}/>
                </div>
                <div className='Footer_mob_row Footer_mob_row_lang'>
                    <LangChanger />
                </div>
                <div className='Footer_mob_row'>
                    <PolicyAndRights />
                </div>
                <div className='Footer_mob_row'>
                    <img src="/designBy.svg" alt="" />
                </div>
            </div>
            <div className='Footer_decor'>
                <div className='Footer_decor_abstract free_img'>
                    <img src="/abstract3.webp" alt="" />
                </div>
                <div className='Footer_decor_name free_img'>
                    Outcore
                </div>
            </div>
        </div>
    )
})