import './MediaLinks.scss';
export default ({ inline = false }) => {
    return (
        <div className={`MediaLinks ${inline && 'MediaLinks_inline'}`}>
            <div className='MediaLinks_elements'>
                {
                    [
                        {
                            img: '/tg.svg',
                            link: 'google.com'
                        },
                        {
                            img: '/whatsUp.svg',
                            link: 'google.com'
                        },
                        {
                            img: '/teams.svg',
                            link: 'google.com'
                        }
                    ].map((el, index) => {
                        return <a href={el.link} className='MediaLinks_element' key={`ml_el-${index}`}>
                            <img src={el.img} alt="" />
                        </a>
                    })
                }
            </div>
            <div className='MediaLinks_cta'>
                Свяжись с нами для покупки аккаунта
            </div>
        </div>
    )
}