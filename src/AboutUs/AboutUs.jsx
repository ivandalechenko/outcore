import { useRef } from 'react';
import CTA from '../CTA/CTA';
import './AboutUs.scss';
import { observer } from 'mobx-react-lite';
import { useTranslation } from 'react-i18next';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';

export default observer(() => {
    const { t } = useTranslation();


    const scope = useRef(null)

    useGSAP(() => {
        for (let i = 0; i < 8; i++) {
            gsap.fromTo(`.AboutUs_element_num_${i}`, {
                x: `-200px`,
                opacity: 0,
            }, {
                x: `0px`,
                opacity: 1,
                scrollTrigger: {
                    trigger: `.AboutUs_element_num_${i}`,
                    scrub: 1,
                    // markers: true,
                    start: 'top 65%',
                    end: 'bottom 65%',
                }
            })
        }
    }, { scope: scope })



    return (
        <div className='AboutUs sizecontainer ' ref={scope}>
            <div className='AboutUs_header'>
                &nbsp;&nbsp;{t('Про')}
                <br />
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{t('Наши')}
                <br />
                {t('Аккаунты')}
            </div>
            <div className='AboutUs_content'>
                {
                    [
                        {
                            header: t('Топовые Tier 1 аккаунты'),
                            content: t('Все аккаунты получены напрямую от ведущих маркетинговых агентств Европы и США.')
                        },
                        {
                            header: t('Максимальный траст и надежность'),
                            content: t('Мы работаем только с премиальными агентствами — Premier Partners Google, что гарантирует высокий уровень доверия к аккаунтам.')
                        },
                        {
                            header: t('Минимальная вероятность банов'),
                        },
                        {
                            header: t('Высокие дневные лимиты'),
                        },
                        {
                            header: t('Чистая рекламная история'),
                        },
                        {
                            header: t('Идеально подходят для тестов и масштабирования'),
                        },
                        {
                            header: t('Дополнительные инструменты'),
                            content: t('Помимо аккаунтов мы предоставляем необходимые сервисы и рекомендации для стабильной работы.')
                        }
                    ].map((el, index) => {
                        return <div className={`AboutUs_element AboutUs_element_num_${index} AboutUs_element_${index % 6}`}>
                            <div className='AboutUs_element_header'>
                                <div className='AboutUs_element_header_text'>
                                    {el.header}
                                </div>
                                <div className='AboutUs_element_header_num'>0{index + 1}</div>
                            </div>
                            {
                                el.content && <div className='AboutUs_element_content'>
                                    {el.content}
                                </div>
                            }
                        </div>
                    })
                }
            </div>
            <div className='AboutUs_cta'>
                <CTA />
            </div>
            <div className='AboutUs_decor'>
                <div className='AboutUs_abstract free_img'>
                    <img src="/abstract2.webp" alt="" />
                </div>
            </div>
        </div>
    )
})