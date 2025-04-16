import './PolicyAndRights.scss';
import { observer } from 'mobx-react-lite';
import { useTranslation } from 'react-i18next';

export default observer(() => {

    const { t } = useTranslation();

    return (
        <div className='PolicyAndRights'>
            <a className='PolicyAndRights_policy'>
                {t('Политика конфиденциальности')}
            </a>
            <div className='PolicyAndRights_rights'>
                {t('Все права защищены 2025')}
            </div>
        </div>
    )
})