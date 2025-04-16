import { Link } from 'react-router-dom';
import CTA from '../CTA/CTA';
import LangChanger from '../LangChanger/LangChanger';
import MediaLinks from '../MediaLinks/MediaLinks';
import NavLinks from '../NavLinks/NavLinks';
import './RequestPage.scss';
import Header from '../Header/Header';
import MessageToManager from '../MessageToManager/MessageToManager';
import { useEffect, useState } from 'react';

import { observer } from 'mobx-react-lite';
import { useTranslation } from 'react-i18next';
export default observer(() => {

    const { t } = useTranslation();

    const handleSumbit = () => {
        console.log('meow');
    }

    const [mmOpened, setmmOpened] = useState(false);

    const [showedMMButton, setshowedMMButton] = useState(false);

    useEffect(() => {
        setTimeout(() => {
            setshowedMMButton(mmOpened)
        }, 200);
    }, [mmOpened])

    return (
        <>
            <div className='RequestPage__mm' style={{
                transform: `translate(${mmOpened ? 0 : -100}vw, 0px)`
            }}>
                <div className='RequestPage__mm_links'>
                    <NavLinks />
                </div>
                <div className='RequestPage__mm_manager'>
                    <MessageToManager />
                </div>
                <div className='RequestPage__mm_social'>
                    <MediaLinks inline />
                </div>
                <div className='RequestPage__mm_lang'>
                    <LangChanger />
                </div>
            </div>
            <div className='Header_opener RequestPage_header_mob__mm' onClick={() => { setmmOpened(!mmOpened) }}>
                <img src={`/mm${showedMMButton ? 'Closer' : 'Opener'}.svg`} alt="" style={{
                    transform: `rotate(${mmOpened ? 720 : 0}deg)`
                }} />
            </div>
            <div className='RequestPage container sizecontainer'>
                <div className='RequestPage_header'>
                    <div className='RequestPage_header_side'>
                        <div className='RequestPage_header_home_border'>
                            <Link to="/" className='RequestPage_header_home'>
                                <img src="/arrow.svg" alt="" />
                                {t('На главную')}
                            </Link>
                        </div>
                        <div className='RequestPage_header_links'>
                            <NavLinks />
                        </div>
                    </div>
                    <div className='RequestPage_header_side RequestPage_header_side_right'>
                        <MediaLinks inline />
                        <LangChanger />
                    </div>
                </div>
                <div className='RequestPage_decor'>
                    <div className='RequestPage_decor_abstract free_img'>
                        <img src="/abstract3.webp" alt="" />
                    </div>
                    <div className='RequestPage_decor_text free_img'>
                        Outcore
                    </div>
                </div>
                <div className='RequestPage_note'>
                    <div className='RequestPage_note_inner'>
                        <div className='RequestPage_note_duga free_img'>
                            <img src="/aboutUsDuga.svg" alt="" />
                        </div>
                        <div className='RequestPage_note_content'>
                            {t('Наш менеджер свяжется с вами в ближайшее время')}
                        </div>
                        <div className='RequestPage_note_duga RequestPage_note_duga_right free_img'>
                            <img src="/aboutUsDuga.svg" alt="" />
                        </div>
                    </div>
                </div>
                <div className='RequestPage_title'>
                    {t('ОСТАВИТЬ ЗАЯВКУ')} <br /> {t('ДЛЯ')} <span>Outcore</span>{t('ПОКУПКИ')} <br />{t('АККАУНТА')}
                </div>
                <div className='RequestPage_form'>
                    <input type="text" placeholder={t('Имя')} />
                    <input type="text" placeholder={t('Телеграм')} />
                    <input type="text" placeholder='Email'/>
                    <div className='RequestPage_form_cta'>
                        <CTA onClick={handleSumbit} />
                    </div>
                </div>
            </div>
        </>
    )
})