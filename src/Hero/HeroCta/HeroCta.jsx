import CTA from '../../CTA/CTA';
import './HeroCta.scss';
import { observer } from 'mobx-react-lite';
import { useTranslation } from 'react-i18next';
import { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import loadingStore from '../../loadingStore';



export default observer(({ btn, small, preloader }) => {

    const { t } = useTranslation();

    const textRef = useRef();
    const btnRef = useRef();

    useEffect(() => {
        if (preloader) return;

        const tl = gsap.timeline({ delay: loadingStore.isLoading ? 2.7 : 0, defaults: { duration: 0.8, ease: 'power3.out' } });

        tl.from(textRef.current, { x: -100, opacity: 0 });
        if (btn) {
            tl.from(btnRef.current, { x: 100, opacity: 0 }, "<0.2");
        }
    }, [preloader, btn]);

    return (
        <div className={`HeroCta container ${small && 'HeroCta_small'}`}>
            <div ref={preloader ? null : textRef} className={`HeroCta_text ${small && 'HeroCta_text_small'}`}>
                <span>Outcore</span>{t(' - стабильность')}
                <br />
                &nbsp;&nbsp;&nbsp;&nbsp;{t('блекхет рекламы в')}
                <br />
                {t('хаосе Google Ads')}
            </div>
            {
                btn &&
                <div className='HeroCta_wrapper' ref={preloader ? null : btnRef}>
                    <CTA />
                </div>
            }
        </div>
    )
})