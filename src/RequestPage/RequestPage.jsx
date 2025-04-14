import { Link } from 'react-router-dom';
import CTA from '../CTA/CTA';
import LangChanger from '../LangChanger/LangChanger';
import MediaLinks from '../MediaLinks/MediaLinks';
import NavLinks from '../NavLinks/NavLinks';
import './RequestPage.scss';
export default () => {

    const handleSumbit = () => {
        console.log('meow');
    }

    return (
        <div className='RequestPage container'>
            <div className='RequestPage_header'>
                <div className='RequestPage_header_side'>
                    <Link to="/" className='RequestPage_header_home'>
                        <img src="/arrow.svg" alt="" />
                        На главную
                    </Link>
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
                        Наш менеджер свяжется с вами в ближайшее время
                    </div>
                    <div className='RequestPage_note_duga RequestPage_note_duga_right free_img'>
                        <img src="/aboutUsDuga.svg" alt="" />
                    </div>
                </div>
            </div>
            <div className='RequestPage_title'>
                ОСТАВИТЬ ЗАЯВКУ <br /> ДЛЯ <span>Outcore</span> ПОКУПКИ <br /> АККАУНТА
            </div>
            <div className='RequestPage_form'>
                <input type="text" placeholder='Имя' />
                <input type="text" placeholder='Телеграм' />
                <input type="text" placeholder='Email' />
                <div className='RequestPage_form_cta'>
                    <CTA onClick={handleSumbit} />
                </div>
            </div>
        </div>
    )
}