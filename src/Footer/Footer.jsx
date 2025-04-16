import './Footer.scss';

import LangChanger from '../LangChanger/LangChanger';
import MessageToManager from '../MessageToManager/MessageToManager';
import NavLinks from '../NavLinks/NavLinks';
import MediaLinks from '../MediaLinks/MediaLinks';
import PolicyAndRights from '../PolicyAndRights/PolicyAndRights';
import { useLocation } from 'react-router-dom';
import { observer } from 'mobx-react-lite';
import { useTranslation } from 'react-i18next';

export default observer(() => {

    const { t } = useTranslation();

    const location = useLocation();
    const hideLayout = location.pathname === '/request';
    if (hideLayout) return
    return (
        <div className='Footer container' id='contacts'>
            <div className='Footer_info'>
                <div className='Footer_header'>
                    {t('Контакты')}
                </div>
                <div className='Footer_content'>
                    <div className='Footer_row'>
                        <div className='Footer_links'>
                            <NavLinks />
                        </div>
                        <MessageToManager />
                        <LangChanger />
                    </div>
                    <div className='Footer_row Footer_row_end'>
                        <MediaLinks />
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
                    </div>
                    <div className='Footer_mob_right'>
                        <NavLinks />
                    </div>
                </div>
                <div className='Footer_mob_row'>
                    <MessageToManager />
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