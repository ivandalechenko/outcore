import './Footer.scss';

import LangChanger from '../LangChanger/LangChanger';
import MessageToManager from '../MessageToManager/MessageToManager';
import NavLinks from '../NavLinks/NavLinks';
import MediaLinks from '../MediaLinks/MediaLinks';
import PolicyAndRights from '../PolicyAndRights/PolicyAndRights';
import { useLocation } from 'react-router-dom';


export default () => {

    const location = useLocation();
    const hideLayout = location.pathname === '/request';
    if (hideLayout) return
    return (
        <div className='Footer container sizecontainer'>
            <div className='Footer_info'>
                <div className='Footer_header'>
                    Контакты
                </div>
                <div className='Footer_content'>
                    <div className='Footer_row Footer_row_upper'>
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
}