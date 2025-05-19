import { useRef, useState } from 'react';
import CTA from '../CTA/CTA';
import './AboutUs.scss';
import { observer } from 'mobx-react-lite';
import { useTranslation } from 'react-i18next';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';

export default observer(() => {
    const { t } = useTranslation();

    const [selected, setselected] = useState(-1);

    const scope = useRef(null)

    useGSAP(() => {
        // for (let i = 0; i < 8; i++) {
        //     gsap.fromTo(`.AboutUs_element_num_${i}`, {
        //         y: `100px`,
        //         // opacity: 0,
        //     }, {
        //         y: `0px`,
        //         // opacity: 1,
        //         scrollTrigger: {
        //             trigger: `.AboutUs_element_num_${i}`,
        //             scrub: 1,
        //             // markers: true,
        //             start: 'top 95%',
        //             end: 'top 95%',
        //         }
        //     })
        // }

        gsap.to(`.AboutUs_content`, {
            y: `0px`,
            scrollTrigger: {
                trigger: `.AboutUs_content`,
                scrub: 1,
                start: '-20% 60%',
                end: '130% 60%',
                // markers: true,
                onUpdate: self => {
                    // console.log(self.progress);
                    setselected(Math.round(self.progress * 8) - 1)
                }
            }
        })

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
                            content: t('Благодаря белой тематике и истории открученного бюджета аккаунты легко проходят модерацию и стартуют без блокировок.')
                        },
                        {
                            header: t('Высокие дневные лимиты'),
                            content: t('Вы сможете работать с серьезными бюджетами, не тратя время на ограничения и постепенный разгон.'),
                        },
                        {
                            header: t('Чистая рекламная история'),
                            content: t('Нет следов предыдущих нарушений, связанных с серыми и черными тематиками.'),
                        },
                        {
                            header: t('Идеально подходят для тестов и масштабирования'),
                            content: t('Благодаря высокой живучести аккаунтов можно спокойно тестировать новые связки и запускать масштабные рекламные кампании.'),
                        },
                        {
                            header: t('Дополнительные инструменты'),
                            content: t('Кроме аккаунтов предоставляем необходимые сервисы и рекомендации для стабильной работы.')
                        }
                    ].map((el, index) => {
                        return <div className={`AboutUs_element ${index === selected && 'AboutUs_element_selected'} AboutUs_element_num_${index} AboutUs_element_${index % 6}`}>
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
            <div className='AboutUs_decor_wrapper'>
                <div className='AboutUs_decor'>
                    <div className='AboutUs_abstract free_img'>
                        <img src="/abstract2.webp" alt="" />
                    </div>
                    <div className='AboutUs_decor_lines AboutUs_decor_lines_1 free_img'></div>
                </div>
            </div>
        </div>
    )
})