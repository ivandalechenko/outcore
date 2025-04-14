import CTA from '../../CTA/CTA';
import './HeroCta.scss';
export default () => {
    return (
        <div className='HeroCta container'>
            <div className='HeroCta_text'>
                <span>
                    Outcore
                </span> - стабильность
                <br />
                &nbsp;&nbsp;&nbsp;&nbsp;блекхет рекламы в
                <br />
                хаосе Google Ads
            </div>
            <CTA />
        </div>
    )
}