import './Header.scss';

import LangChanger from '../LangChanger/LangChanger';
import MessageToManager from '../MessageToManager/MessageToManager';
import NavLinks from '../NavLinks/NavLinks';
import { Link, useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { observer } from 'mobx-react-lite';


export default observer(() => {
    const location = useLocation();
    const hideLayout = location.pathname === '/request';

    // Always call hooks at the top level
    const [showedMMButton, setshowedMMButton] = useState(false);
    const [mmOpened, setmmOpened] = useState(false);

    useEffect(() => {
        setTimeout(() => {
            setshowedMMButton(mmOpened);
        }, 200);
    }, [mmOpened]);

    // Conditionally render the layout part of the JSX
    if (hideLayout) return null;

    return (
        <>
            <div className='Header_mm' style={{
                transform: `translate(${mmOpened ? 0 : -100}vw, 0px)`
            }}>
                <div className='Header_mm_links'>
                    <NavLinks />
                </div>
                <div className='Header_mm_manager'>
                    <MessageToManager />
                </div>
                <div className='Header_mm_lang'>
                    <LangChanger />
                </div>
            </div>
            <div className='Header container'>
                <div className='Header_side'>
                    <Link to='/' className='Header_logo'>
                        Outcore
                    </Link>
                    <div className='Header_links'>
                        <NavLinks />
                    </div>
                </div>
                <div className='Header_side Header_right'>
                    <div className='Header_side Header_right_content'>
                        <MessageToManager />
                        <LangChanger />
                    </div>
                    <div className='Header_opener' onClick={() => { setmmOpened(!mmOpened) }}>
                        <img src={`/mm${showedMMButton ? 'Closer' : 'Opener'}.svg`} alt="" style={{
                            transform: `rotate(${mmOpened ? 720 : 0}deg)`
                        }} />
                    </div>
                </div>
            </div>
        </>
    );
});
