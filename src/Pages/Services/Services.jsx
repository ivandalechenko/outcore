import ServiceBtn from './ServiceBtn/ServiceBtn';
import './Services.scss';
import { useState } from 'react';
export default () => {

    const [openedIndex, setOpenedIndex] = useState(null);
    
    const services = [
        {
            type: 'proxy',
            title: 'Прокси-сервисы',
            description: 'Готовые к работе аккаунты с высоким дневным лимитом, низкими рисками блокировок и историей трат на белые ниши.'
        },
        {
            type: 'farm',
            title: 'Фарм-сервис',
            description: 'Мы предоставляем профессиональный ручной фарм Gmail-аккаунтов, полностью адаптированных для работы в рекламных системах. Все аккаунты создаются инхаус фарм-отделом, без использования автоматических скриптов и ботов.'
        },
        {
            type: 'progrev',
            title: 'Аккаунты с прогревом',
            description: 'Фарм-аккаунты, полностью верифицированные, прогретые на белые вертикали и передаваемые вместе с доменом.'
        },
        {
            type: 'verification',
            title: 'Все виды верификации',
            description: 'Мы проводим профессиональную верификацию Google Ads-аккаунтов вручную, гарантируя высокий траст и стабильность работы.'
        },
        {
            type: 'payment',
            title: 'Платежные решения',
            description: 'Мы проводим профессиональную верификацию Google Ads-аккаунтов вручную, гарантируя высокий траст и стабильность работы.'
        },
        {
            type: 'google',
            title: 'Инсайдерские услуги Google Ads',
            description: 'Мы проводим профессиональную верификацию Google Ads-аккаунтов вручную, гарантируя высокий траст и стабильность работы.'
        },
        {
            type: 'tech',
            title: 'Техническое сопровождение',
            description: 'Мы проводим профессиональную верификацию Google Ads-аккаунтов вручную, гарантируя высокий траст и стабильность работы.'
        },
        {
            type: 'consalting',
            title: 'Консалтинг по Google Ads',
            description: 'Мы проводим профессиональную верификацию Google Ads-аккаунтов вручную, гарантируя высокий траст и стабильность работы.'
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
                    <li>История затрат на рекламу – аккаунты использовались для продвижения реального бизнеса в Tier 1 странах (США, Канада, Великобритания, ЕС).</li>
                    <li>Высокий уровень траста – проходят модерацию легче, чем новые или автофарм-аккаунты. </li>
                    <li>Оптимизированы для сложных ниш – используются для рекламы в категориях казино, крипто, финансы и других трудномодерируемых вертикалях.</li>
                    <li>Обход блокировок и ручной модерации – благодаря белой истории и правильно настроенным платежным профилям.</li>
                </div>
                <div className='Services__proxy_text'>
                    <p className='Services__proxy_text_title'>Передача аккаунта:</p>
                    <li className='Services__proxy_text_li'>Через Gmail</li>
                    <li className='Services__proxy_text_li'>На MCC</li>
                    <p className='Services__proxy_text_title'>Полезные ссылки:</p>
                    <a><li className='Services__proxy_text_li'>Цены и наличие</li></a>
                    <a><li className='Services__proxy_text_li'>Как выбрать аккаунт?</li></a>
                    <a><li className='Services__proxy_text_li'>Как запустить рекламу?</li></a>
                    <a><li className='Services__proxy_text_li'>Какой сетап лучше выбрать?</li></a>
                    <a><li className='Services__proxy_text_li'>Какие инструменты использовать?</li></a>
                </div>
                <div className='Services__proxy_btn'>
                    <ServiceBtn />
                </div>
              </div>
            </>
            );
            case 'farm':
                return(
                    <>
                        <div className='Services__line'></div>
                        <div className='Services__proxy'>
                            <div className='Services__farm__title'>
                                <p className='Services__farm__title_title'>Core Farm – премиальное решение</p>
                                <div className='Services__farm__title_list'>
                                    <li>Фарм на выделенном VDS с приватным методом проксирования</li>
                                    <li>Ручной фарм в течение 5+ дней</li>
                                    <li>Надежное OVPN-проксирование</li>
                                    <li>Круглосуточный доступ к VDS</li>
                                    <li>Реальные SIM-карты с возможностью SMS-подтверждения</li>
                                    <li>Использование приватных резидентных прокси</li>
                                    <li>Передача – удаленный рабочий стол с приватным прокси-решением</li>
                                </div>
                                <p className='Services__farm__title_footer'>
                                    Стоимость: <span className='Services__farm__title_footer_bold'> $75 + $15 за продление каждый месяц</span>
                                </p>
                            </div>
                            <div className='Services__farm_description'>
                                <p className='Services__farm_description_title'>Basic Farm – доступное решение</p>
                                <div className='Services__farm_description_list'>
                                    <li>Ручной фарм в течение 3+ дней</li>
                                    <li>Использование мобильных прокси</li>
                                    <li>Реальные SIM-карты</li>
                                    <li>Передача: Cookies / Codes / Login / Password</li>
                                </div>
                                <p className='Services__farm_description_footer'>
                                Стоимость: <span className='Services__farm__title_footer_bold'>$15</span>
                                </p>
                            </div>
                            <div className='Services__proxy_btn'>
                                <ServiceBtn />
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
                                <p className='Services__farm__title_title'>Core Farm – премиальное решение</p>
                                <div className='Services__farm__title_list'>
                                    <li>Ручной фарм без автоматизации и ботов</li>
                                    <li>Чистые прокси</li>
                                    <li>Реальные SIM-карты</li>
                                    <li>Полная верификация</li>
                                    <li>Передача вместе с доменом</li>
                                    <li>Идут в комплекте с VDS</li>
                                    <li>Возможность оплаты нашим VCC, использовавшимся на аккаунте</li>
                                </div>
                                <p className='Services__farm__title_footer'>
                                    Стоимость: <span className='Services__farm__title_footer_bold'> $75 + $15 за продление каждый месяц</span>
                                </p>
                            </div>
                            <div className='Services__farm_description'>
                                <p className='Services__farm_description_title'>В комплекте:</p>
                                <div className='Services__farm_description_list'>
                                    <li>Gmail</li>
                                    <li>Рекламный аккаунт с прогревом на вайтпейдж</li>
                                    <li>VPS + proxy</li>
                                    <li>Пройденная верификация</li>
                                    <li>Домен</li>
                                </div>
                                <p className='Services__farm_description_title'>Стоимость:</p>
                                <div className='Services__farm_description_list'>
                                    <li>50 спенд – $250 </li>
                                    <li>100 спенд – $350 </li>
                                    <li>200 спенд – $500</li>
                                </div>
                            </div>
                            <div className='Services__proxy_btn'>
                                <ServiceBtn />
                            </div>
                        </div>
                    </>
            );
            case 'verification':
                return(
                <>
                    <div className='Services__line'></div>
                    <div className='Services__proxy'>
                        <div className='Services__farm__title'>
                            <p className='Services__farm__title_title'>Процедура:</p>
                            <div className='Services__farm__title_list'>
                                <p>1. Создание платежного профиля</p>
                                <p>2. Приглашение в MCC</p>
                                <p>3. Завершение процесса</p>
                            </div>
                        </div>
                        <div className='Services__farm_description'>
                            <p className='Services__farm_description_title'>Виды верификаций:</p>
                            <div className='Services__farm_description_list'>
                                <li>Адвертайзер – $100 (1-3 дня)</li>
                                <li>Коммерческая деятельность – $300 (1-9 дней)</li>
                            </div>
                        </div>
                        <div className='Services__proxy_btn'>
                            <ServiceBtn />
                        </div>
                    </div>
                </>
            );
            case 'payment':
                return(
                    <>
                        <div className='Services__line'></div>
                        <div className='Services__proxy'>
                            <div className='Services__farm__title'>
                                <div className='Services__farm__title_list'>
                                    <li>Виртуальные карты (VCC) – проверенные BIN'ы (EU, USA) </li>
                                    <li>Агентские кредитные линии – комиссия от 5%</li>
                                </div>
                            </div>
                            <div className='Services__proxy_btn'>
                            <ServiceBtn />
                        </div>
                        </div>
                    </>
            );
            case 'google':
                return(
                    <>
                        <div className='Services__line'></div>
                        <div className='Services__proxy'>
                            <div className='Services__farm__title'>
                                    <div className='Services__farm__title_list'>
                                        <li>Выгрузка настроек аккаунта конкурента – $500</li>
                                        <li>Определение причины бана аккаунта – $150</li>
                                        <li>Определение причины отклона объявлений – $150</li>
                                        <li>Общие заметки по аккаунту – $150</li>
                                    </div>
                                <div className='Services__farm_description'>
                                    <p className='Services__farm_description_title'>Сроки реализации:</p>
                                    <div className='Services__farm_description_list'>
                                        <li>от 1 до 48 часов</li>
                                    </div>
                                </div>
                                <div className='Services__proxy_btn'>
                                    <ServiceBtn />
                                </div>
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
                                <li>Разработка вайпейджей – от $100</li>
                                <li>Разработка лендингов – от $200</li>
                                <li>Клоакинг – $50</li>
                            </div>
                            </div>
                            <div className='Services__proxy_btn'>
                            <ServiceBtn />
                            </div>
                        </div>
                    </>
            );
            case 'consalting':
                return(
                    <>
                        <div className='Services__line'></div>
                        <div className='Services__proxy'>
                        <div className='Services__farm__title'>
                            <div className='Services__farm__title_list'>
                                <li>Сопровождение Google Ads – $1500</li>
                                <li>Консультация Google Ads – от $300</li>
                                <li>Техническая консультация – от $100</li>
                            </div>
                            </div>
                            <div className='Services__proxy_btn'>
                            <ServiceBtn />
                            </div>
                        </div>
                    </>
            );
        }
      };

    return (
    <div className='Services container'>
        <h2 className='Services__title'><span className='text__gradient'>Услуги</span> для успешного <br />залива трафика</h2>
        <div className='Services__container'>
            {services.map((el, index) => {
                const isOpen = openedIndex === index;
                return (
                    <div className='Services__item'
                    style={{ bottom: `${index * 20}px`}}
                    >
                        <h2 className='Services__item_title'>{el.title}</h2>
                        <p className='Services__item_description'>{el.description}</p>
                        <div className='Services__item_continue' onClick={() => toggleItem(index)}>
                            Подробнее 
                            <img src="/arrowDownCorner.png" alt="" />
                        </div>
                        {isOpen && renderContent(el)}
                    </div>
            )})}
        </div>
    </div>
)}