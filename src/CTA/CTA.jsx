import { Link } from 'react-router-dom';
import './CTA.scss';
import { observer } from 'mobx-react-lite';
import { useTranslation } from 'react-i18next';

export default observer(({ skin = '', text = '' }) => {

    const { t } = useTranslation();

    return (
        <Link to={'/request'} className={`CTA CTA_${skin}`}>
            <div className='CTA_text'>
                {
                    text ? text : t('Связаться с нами')
                    
                }
            </div>
            <div className='CTA_arrow_wrapper free_img'>
                <div className='CTA_arrow'>
                    <div className='CTA_arrow_inner'>
                        <img src="/arrow.svg" alt="" />
                    </div>
                </div>
            </div>
        </Link>
    )
})