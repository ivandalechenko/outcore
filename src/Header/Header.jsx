import './Header.scss';

import LangChanger from '../LangChanger/LangChanger';
import MessageToManager from '../MessageToManager/MessageToManager';
import NavLinks from '../NavLinks/NavLinks';
import { useLocation } from 'react-router-dom';



export default () => {


    const location = useLocation();
    const hideLayout = location.pathname === '/request';
    if (hideLayout) return

    return (
        <div className='Header container'>
            <div className='Header_side'>
                <div className='Header_logo'>
                    Outcore
                </div>
                <div className='Header_links'>
                    <NavLinks />
                </div>
            </div>
            <div className='Header_side Header_right'>

                <MessageToManager />
                <LangChanger />
            </div>
        </div>
    )
}