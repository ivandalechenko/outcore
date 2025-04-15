import './Advantages.scss';
export default () => {
    return (
        <div className='Advantages container'>
            <div className='Advantages_list'>
                {
                    [
                        {
                            title: '5 лет',
                            text: 'Команда профессионалов Outcore помогает арбитражникам экономить время и деньги.',
                        },
                        {
                            title: '17',
                            text: 'Сотрудников ежедневно работают над тем, чтобы вы могли сосредоточиться на заливах, а не на подготовке.',
                        },
                        {
                            title: '7000+',
                            text: 'Аккаунтов с высоким трастом купили наши клиенты для запуска таких вертикалей, как крипто, казино, беттинг, нутра.',
                        },
                        {
                            title: '5 млн.',
                            text: 'Средний месячный спенд наших клиентов на черные и серые вертикали.',
                        },
                        {
                            title: '1300+',
                            text: 'Партнеров по всему миру использовали наши аккаунты и решения для успешного запуска блекхет рекламы.',
                        }
                    ].map((el, index) => {
                        return <>
                            {(index > 0 && index % 2 === 0) && <div className='Advantages_element_del'></div>}
                            {index === 4 && <div className='Advantages_element'></div>}
                            <div className={`Advantages_element ${index % 2 === 0 && 'Advantages_element_odd'}`} key={`advantage-${index}`}>
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
                    В цифрах
                </div>
            </div>
        </div>
    )
}