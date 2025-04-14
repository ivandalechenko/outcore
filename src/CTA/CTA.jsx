import { Link } from 'react-router-dom';
import './CTA.scss';
export default ({ skin = '', text = '' }) => {
    return (
        <Link to={'/request'} className={`CTA CTA_${skin}`}>
            <div className='CTA_text'>
                {
                    text ? text : 'Купить аккаунт'
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
}