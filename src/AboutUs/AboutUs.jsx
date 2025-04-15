import CTA from '../CTA/CTA';
import './AboutUs.scss';
export default () => {
    return (
        <div className='AboutUs sizecontainer '>
            <div className='AboutUs_header'>
                &nbsp;&nbsp;Про
                <br />
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Наши
                <br />
                Аккаунты
            </div>
            <div className='AboutUs_content'>
                {
                    [
                        {
                            header: 'Топовые Tier 1 аккаунты',
                            content: 'Все аккаунты получены напрямую от ведущих маркетинговых агентств Европы и США.'
                        },
                        {
                            header: 'Максимальный траст и надежность',
                            content: 'Мы работаем только с премиальными агентствами — Premier Partners Google, что гарантирует высокий уровень доверия к аккаунтам.'
                        },
                        {
                            header: 'Минимальная вероятность банов',
                        },
                        {
                            header: 'Высокие дневные лимиты',
                        },
                        {
                            header: 'Чистая рекламная история',
                        },
                        {
                            header: 'Идеально подходят для тестов и масштабирования',
                        },
                        {
                            header: 'Дополнительные инструменты',
                            content: 'Помимо аккаунтов мы предоставляем необходимые сервисы и рекомендации для стабильной работы.'
                        }
                    ].map((el, index) => {
                        return <div className={`AboutUs_element AboutUs_element_${index % 6}`}>
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
}