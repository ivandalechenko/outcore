import './Services.scss';
import { useEffect, useState } from 'react';
import CTA from '../../CTA/CTA';
import { observer } from 'mobx-react-lite';
import { useTranslation } from 'react-i18next';
import { motion, AnimatePresence } from 'framer-motion';
import { useParams } from 'react-router-dom';

import { useRef } from 'react';
import gsap from 'gsap';

export default observer(() => {

    const { t } = useTranslation();

    const [openedIndex, setOpenedIndex] = useState(null);

    const params = useParams()


    useEffect(() => {
        document.querySelector(`#pageTop`).scrollIntoView({ behavior: 'smooth' });
        setTimeout(() => {
            if (params.serviceType) {
                document.querySelector(`#${params.serviceType}`).scrollIntoView({ behavior: 'smooth' });
            }
        }, 1000);
    }, [])

    const headerRef = useRef();
    const contentRef = useRef();


    useEffect(() => {
    const elems = [headerRef.current, contentRef.current];

    gsap.set(elems, {
        x: (i) => (i % 2 === 0 ? '-100vw' : '100vw'),
        opacity: 0
    });

    gsap.to(elems, {
        x: 0,
        opacity: 1,
        stagger: 0.15,
        duration: 0.8,
        ease: 'power3.out',
    });
    }, []);

    const services = [
        {
            link: 'proxy',
            type: 'proxy',
            title: t('Спендовые аккаунты Google Ads'),
            description: t('Готовые к запуску рекламные аккаунты от белого рекламного агентства уровня Premier Partner Google.')
        },
        {
            link: 'farm',
            type: 'farm',
            title: t('Фарм-сервис'),
            description: t('Мы предоставляем профессиональный ручной фарм Gmail-аккаунтов, полностью адаптированных для работы в рекламных системах. Все аккаунты создаются инхаус фарм-отделом, без использования автоматических скриптов и ботов.')
        },
        {
            link: 'progrev',
            type: 'progrev',
            title: t('Аккаунты с предварительным прогревом'),
            description: t('Фарм-аккаунты, полностью верифицированные, прогретые на белые вертикали и передаваемые вместе с доменом.')
        },
        {
            link: 'verification',
            type: 'verification',
            title: t('Все виды верификации'),
            description: t('Мы проводим профессиональную верификацию Google Ads-аккаунтов вручную, гарантируя высокий траст и стабильность работы.')
        },
        {
            link: 'payment',
            type: 'payment',
            title: t('Платежные решения'),
            // description: t('Мы проводим профессиональную верификацию Google Ads-аккаунтов вручную, гарантируя высокий траст и стабильность работы.')
        },
        {
            link: 'google',
            type: 'google',
            title: t('Инсайдерские услуги Google Ads'),
            // description: t('Мы проводим профессиональную верификацию Google Ads-аккаунтов вручную, гарантируя высокий траст и стабильность работы.')
        },
        {
            link: 'tech',
            type: 'tech',
            title: t('Техническое сопровождение'),
            // description: t('Мы проводим профессиональную верификацию Google Ads-аккаунтов вручную, гарантируя высокий траст и стабильность работы.')
        },
        {
            link: 'consalting',
            type: 'consalting',
            title: t('Консалтинг по Google Ads'),
            // description: t('Мы проводим профессиональную верификацию Google Ads-аккаунтов вручную, гарантируя высокий траст и стабильность работы.')
        },
    ]

    const toggleItem = (index) => {
        setOpenedIndex(prev => (prev === index ? null : index));
    };


    const renderContent = (el) => {
        switch (el.type) {
            case 'proxy':
                return (
                    <>
                        <div className='Services__line'></div>
                        <div className="Services__proxy">
                            <div className='Services__proxy_titles'>
                                <li>{t('История затрат на рекламу – аккаунты использовались для продвижения реального бизнеса в Tier 1 странах (США, Канада, Великобритания, ЕС).')}</li>
                                <li>{t('Высокий уровень траста – проходят модерацию легче, чем новые или автофарм-аккаунты.')}</li>
                                <li>{t('Оптимизированы для сложных ниш – используются для рекламы в категориях казино, крипто, финансы и других трудномодерируемых вертикалях.')}</li>
                                <li>{t('Обход блокировок и ручной модерации – благодаря белой истории и правильно настроенным платежным профилям.')}</li>
                            </div>
                            <div className='Services__proxy_text'>
                                <p className='Services__proxy_text_title'>{t('Передача аккаунта:')}</p>
                                <li className='Services__proxy_text_li'>{t('Через Gmail')}</li>
                                <li className='Services__proxy_text_li'>{t('На MCC')}</li>
                                <p className='Services__proxy_text_title'>{t('Полезные ссылки:')}</p>
                                <a><li className='Services__proxy_text_li'>{t('Цены и наличие')}</li></a>
                                <a><li className='Services__proxy_text_li'>{t('Как выбрать аккаунт?')}</li></a>
                                <a><li className='Services__proxy_text_li'>{t('Как запустить рекламу?')}</li></a>
                                <a><li className='Services__proxy_text_li'>{t('Какой сетап лучше выбрать?')}</li></a>
                                <a><li className='Services__proxy_text_li'>{t('Какие инструменты использовать?')}</li></a>
                            </div>
                            <div className='Services__proxy_btn'>
                                <CTA text={t('Хочу')} />
                            </div>
                        </div>
                    </>
                );
            case 'farm':
                return (
                    <>
                        <div className='Services__line'></div>
                        <div className='Services__proxy'>
                            <div className='Services__farm__title'>
                                <p className='Services__farm__title_title'>{t('Core Farm – премиальное решение')}</p>
                                <div className='Services__farm__title_list'>
                                    <li>{t('Фарм на выделенном VDS с приватным методом проксирования')}</li>
                                    <li>{t('Ручной фарм в течение 5+ дней')}</li>
                                    <li>{t('Надежное OVPN-проксирование')}</li>
                                    <li>{t('Круглосуточный доступ к VDS')}</li>
                                    <li>{t('Реальные SIM-карты с возможностью SMS-подтверждения')}</li>
                                    <li>{t('Использование приватных резидентных прокси')}</li>
                                    <li>{t('Передача – удаленный рабочий стол с приватным прокси-решением')}</li>
                                </div>
                                <p className='Services__farm__title_footer'>
                                    {t('Стоимость:')} <span className='Services__farm__title_footer_bold'> {t('$75 + $15 за продление каждый месяц')}</span>
                                </p>
                            </div>
                            <div className='Services__farm_description'>
                                <p className='Services__farm_description_title'>{t('Basic Farm – доступное решение')}</p>
                                <div className='Services__farm_description_list'>
                                    <li>{t('Ручной фарм в течение 3+ дней')}</li>
                                    <li>{t('Использование мобильных прокси')}</li>
                                    <li>{t('Реальные SIM-карты')}</li>
                                    <li>{t('Передача: Cookies / Codes / Login / Password')}</li>
                                </div>
                                <p className='Services__farm_description_footer'>
                                    {t('Стоимость:')} <span className='Services__farm__title_footer_bold'>$15</span>
                                </p>
                            </div>
                            <div className='Services__proxy_btn'>
                                <CTA text={t('Хочу')} />
                            </div>
                        </div>
                    </>
                );
            case 'progrev':
                return (
                    <>
                        <div className='Services__line'></div>
                        <div className='Services__proxy'>
                            <div className='Services__farm__title'>
                                <p className='Services__farm__title_title'>{t('Core Farm – премиальное решение')}</p>
                                <div className='Services__farm__title_list'>
                                    <li>{t('Ручной фарм без автоматизации и ботов')}</li>
                                    <li>{t('Чистые прокси')}</li>
                                    <li>{t('Реальные SIM-карты')}</li>
                                    <li>{t('Полная верификация')}</li>
                                    <li>{t('Передача вместе с доменом')}</li>
                                    <li>{t('Идут в комплекте с VDS')}</li>
                                    <li>{t('Возможность оплаты нашим VCC, использовавшимся на аккаунте')}</li>
                                </div>
                                <p className='Services__farm__title_footer'>
                                    {t('Стоимость:')} <span className='Services__farm__title_footer_bold'> {t('$75 + $15 за продление каждый месяц')}</span>
                                </p>
                            </div>
                            <div className='Services__farm_description'>
                                <p className='Services__farm_description_title'>{t('В комплекте:')}</p>
                                <div className='Services__farm_description_list'>
                                    <li>{t('Gmail')}</li>
                                    <li>{t('Рекламный аккаунт с прогревом на вайтпейдж')}</li>
                                    <li>{t('VPS + proxy')}</li>
                                    <li>{t('Пройденная верификация')}</li>
                                    <li>{t('Домен')}</li>
                                </div>
                                <p className='Services__farm_description_title'>{t('Стоимость:')}</p>
                                <div className='Services__farm_description_list'>
                                    <li>{t('$100+ спенд – $350')}</li>
                                    <li>{t('$200+ спенд – $500')}</li>
                                </div>
                            </div>
                            <div className='Services__proxy_btn'>
                                <CTA text={t('Хочу')} />
                            </div>
                        </div>
                    </>
                );
            case 'verification':
                return (
                    <>
                        <div className='Services__line'></div>
                        <div className='Services__proxy'>
                            <div className='Services__farm__title'>
                                <p className='Services__farm__title_title'>{t('Процедура:')}</p>
                                <div className='Services__farm__title_list'>
                                    <p>{t('1. Создание платежного профиля')}</p>
                                    <p>{t('2. Приглашение в MCC')}</p>
                                    <p>{t('3. Завершение процесса')}</p>
                                </div>
                            </div>
                            <div className='Services__farm_description'>
                                <p className='Services__farm_description_title'>{t('Виды верификаций:')}</p>
                                <div className='Services__farm_description_list'>
                                    <li>{t('Адвертайзер – $100 (1-3 дня)')}</li>
                                    <li>{t('Коммерческая деятельность – $300 (1-9 дней)')}</li>
                                </div>
                            </div>
                            <div className='Services__proxy_btn'>
                                <CTA text={t('Хочу')} />
                            </div>
                        </div>
                    </>
                );
            case 'payment':
                return (
                    <>
                        <div className='Services__line'></div>
                        <div className='Services__proxy'>
                            <div className='Services__farm__title'>
                                <div className='Services__farm__title_list'>
                                    <li>{t('Виртуальные карты (VCC) – проверенные BIN`ы (EU, USA)')}</li>
                                    <li>{t('Агентские кредитные линии – комиссия от 5%')}</li>
                                </div>
                            </div>
                            <div className='Services__proxy_btn'>
                                <CTA text={t('Хочу')} />
                            </div>
                        </div>
                    </>
                );
            case 'google':
                return (
                    <>
                        <div className='Services__line'></div>
                        <div className='Services__proxy'>
                            <div className='Services__farm__title'>
                                <div className='Services__farm__title_list'>
                                    <li>{t('Выгрузка настроек аккаунта конкурента – $500')}</li>
                                    <li>{t('Определение причины бана аккаунта – $150')}</li>
                                    <li>{t('Определение причины отклона объявлений – $150')}</li>
                                    <li>{t('Общие заметки по аккаунту – $150')}</li>
                                </div>
                            </div>
                            <div className='Services__farm_description'>
                                <p className='Services__farm_description_title'>{t('Сроки реализации:')}</p>
                                <div className='Services__farm_description_list'>
                                    <li>{t('от 1 до 48 часов')}</li>
                                </div>
                            </div>
                            <div className='Services__proxy_btn'>
                                <CTA text={t('Хочу')} />
                            </div>
                        </div>
                    </>
                );
            case 'tech':
                return (
                    <>
                        <div className='Services__line'></div>
                        <div className='Services__proxy'>
                            <div className='Services__farm__title'>
                                <div className='Services__farm__title_list'>
                                    <li>{t('Разработка вайпейджей – от $100')}</li>
                                    <li>{t('Разработка лендингов – от $200')}</li>
                                    <li>{t('Клоакинг – $50')}</li>
                                </div>
                            </div>
                            <div className='Services__proxy_btn'>
                                <CTA text={t('Хочу')} />
                            </div>
                        </div>
                    </>
                );
            case 'consalting':
                return (
                    <>
                        <div className='Services__line'></div>
                        <div className='Services__proxy'>
                            <div className='Services__farm__title'>
                                <div className='Services__farm__title_list'>
                                    <li>{t('Сопровождение Google Ads – $1500')}</li>
                                    <li>{t('Консультация Google Ads – от $300')}</li>
                                    <li>{t('Техническая консультация – от $100')}</li>
                                </div>
                            </div>
                            <div className='Services__proxy_btn'>
                                <CTA text={t('Хочу')} />
                            </div>
                        </div>
                    </>
                );
        }
    };

    return (
        <div className='Services container sizecontainer' id='pageTop'>
            <h2 className='Services__title' ref={headerRef}><span className='text__gradient'>{t('Услуги')}</span> {t('для успешного')} <br />{t('залива трафика')}</h2>
            <div className='Services__decor'>
                <div className='Services__decor_abstract free_img'>
                    <img src="/abstract1.webp" alt="" />
                </div>
                <div className='Services__decor_abstract2 free_img'>
                    <img src="/abstract1.webp" alt="" />
                </div>
                <div className='Services__decor_abstract3 free_img'>
                    <img src="/abstract1.webp" alt="" />
                </div>
            </div>
            <div className='Services__container' ref={contentRef}>
                {services.map((el, index) => {
                    const isOpen = openedIndex === index;
                    return (
                        <div id={el.link} className={`Services__item`}
                            style={{ bottom: `${index * 20}px` }}
                        >
                            <h2 className='Services__item_title'>{el.title}</h2>
                            <p className='Services__item_description'>{el.description}</p>
                            <div className='Services__item_continue' onClick={() => toggleItem(index)}>
                                {t('Подробнее')}
                                <img src="/arrowDownCorner.png" alt="" />
                            </div>
                            <AnimatePresence initial={false}>
                                {isOpen && (
                                    <motion.div
                                        key="content"
                                        initial={{ opacity: 0, height: '0px' }}
                                        animate={{ opacity: 1, height: 'auto' }}
                                        exit={{ opacity: 0, height: '0px' }}
                                        transition={{ duration: 0.2 }}
                                        className='Services__container_el'
                                    >
                                        {renderContent(el)}
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>
                    )
                })}
            </div>
        </div>
    )
})