import './MediaLinks.scss';
import { observer } from 'mobx-react-lite';
import { useTranslation } from 'react-i18next';

export default observer(({ inline = false }) => {

    const { t } = useTranslation();

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
                {t('Свяжись с нами для покупки аккаунта')}
            </div>
        </div>
    )
})