import { useGSAP } from '@gsap/react';
import './Advantages.scss';
import { observer } from 'mobx-react-lite';
import { useRef } from 'react';
import { useTranslation } from 'react-i18next';
import gsap from 'gsap';


export default observer(() => {

    const { t } = useTranslation();
    const scope = useRef(null)

    useGSAP(() => {
        for (let i = 0; i < 5; i++) {
            gsap.fromTo(`.Advantages_element_${i}`, {
                x: `-200px`,
                opacity: 0,
            }, {
                x: `0px`,
                opacity: 1,
                scrollTrigger: {
                    trigger: `.Advantages_element_${i}`,
                    scrub: 1,
                    start: 'top 85%',
                    end: 'bottom 85%',
                }
            })
        }
    }, { scope: scope })


    return (
        <div className='Advantages container' ref={scope}>
            <div className='Advantages_list'>
                {
                    [
                        {
                            title: t('5 лет'),
                            text: t('Команда профессионалов Outcore помогает арбитражникам экономить время и деньги.'),
                        },
                        {
                            title: '17',
                            text: t('Сотрудников ежедневно работают над тем, чтобы вы могли сосредоточиться на заливах, а не на подготовке.'),
                        },
                        {
                            title: '7000+',
                            text: t('Аккаунтов с высоким трастом купили наши клиенты для запуска таких вертикалей, как крипто, казино, беттинг, нутра.'),
                        },
                        {
                            title: t('5 млн.'),
                            text: t('Средний месячный спенд наших клиентов на черные и серые вертикали.'),
                        },
                        {
                            title: '1300+',
                            text: t('Партнеров по всему миру использовали наши аккаунты и решения для успешного запуска блекхет рекламы.'),
                        }
                    ].map((el, index) => {
                        return <>
                            {(index > 0 && index % 2 === 0) && <div className='Advantages_element_del'></div>}
                            {index === 4 && <div className='Advantages_element'></div>}
                            <div className={`Advantages_element Advantages_element_${index} ${index % 2 === 0 && 'Advantages_element_odd'}`} key={`advantage-${index}`}>
                                <div className='Advantages_element_title'>
                                    {el.title}
                                </div>
                                <div className='Advantages_element_text'>
                                    {el.text}
                                </div>
                            </div>
                        </>
                    })
                }
            </div>
            <div className='Advantages_decor'>
                <div className='Advantages_decor_abstract free_img'>
                    <img src="/abstract1.webp" alt="" />
                </div>
                <div className='Advantages_decor_text_large Advantages_decor_text free_img'>
                    <div className='Advantages_decor_text_large_inner'>
                        Outcore
                    </div>
                </div>
                <div className='Advantages_decor_text_small Advantages_decor_text free_img'>
                    {t('В цифрах')}
                </div>
            </div>
        </div>
    )
})