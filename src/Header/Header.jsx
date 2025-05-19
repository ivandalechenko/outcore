import './Header.scss';

import LangChanger from '../LangChanger/LangChanger';
import MessageToManager from '../MessageToManager/MessageToManager';
import NavLinks from '../NavLinks/NavLinks';
import { Link, useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { observer } from 'mobx-react-lite';
import { gsap } from 'gsap';
import { useRef } from 'react';



export default observer(() => {
    const location = useLocation();
    const hideLayout = location.pathname === '/request';

    // Always call hooks at the top level
    const [showedMMButton, setshowedMMButton] = useState(false);
    const [mmOpened, setmmOpened] = useState(false);

    const headerRef = useRef();
    const leftSideRef = useRef();
    const rightSideRef = useRef();
    const logoRef = useRef();
    const linksRef = useRef();
    const messageRef = useRef();
    const langRef = useRef();

    useEffect(() => {
        setTimeout(() => {
            setshowedMMButton(mmOpened);
        }, 200);
    }, [mmOpened]);

    useEffect(() => {
    const tl = gsap.timeline({ delay: 2.7, defaults: { duration: 0.8, ease: 'power3.out' } });

    tl.from(logoRef.current, { x: -100, opacity: 0 });
    tl.from(linksRef.current, { y: -50, opacity: 0 }, "<0.1");
    tl.from(messageRef.current, { y: -50, opacity: 0 }, "<0.1");
    tl.from(langRef.current, { y: -50, opacity: 0 }, "<0.1");
    const opener = rightSideRef.current?.querySelector('.Header_opener');
    if (opener) {
        tl.from(opener, { x: 100, opacity: 0 }, "<0.1");
    }
}, []);

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
                <div className='Header container' ref={headerRef}>
                    <div className='Header_side' ref={leftSideRef}>
                        <Link to='/' className='Header_logo' ref={logoRef}>Outcore</Link>
                        <div className='Header_links' ref={linksRef}>
                            <NavLinks />
                        </div>
                    </div>
                    <div className='Header_side Header_right' ref={rightSideRef}>
                        <div className='Header_side Header_right_content'>
                            <div ref={messageRef}>
                                <MessageToManager />
                            </div>
                            <div ref={langRef}>
                                <LangChanger />
                            </div>
                        </div>
                    </div>
                </div>
        </>
    );
});
