import CTA from '../../CTA/CTA';
import './HeroCta.scss';
import { observer } from 'mobx-react-lite';
import { useTranslation } from 'react-i18next';

export default observer(() => {

    const { t } = useTranslation();

    return (
        <div className='HeroCta container'>
            <div className='HeroCta_text'>
                <span>
                    Outcore
                </span>{t(' - стабильность')}
                <br />
                &nbsp;&nbsp;&nbsp;&nbsp;{t('блекхет рекламы в')}
                <br />
                {t('хаосе Google Ads')}
            </div>
            <div className='HeroCta_wrapper'>
                <CTA />
            </div>
        </div>
    )
})