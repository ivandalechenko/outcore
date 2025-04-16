import './MessageToManager.scss';
import { observer } from 'mobx-react-lite';
import { useTranslation } from 'react-i18next';
export default observer(() => {

    const { t } = useTranslation();

    return (
        <div className='MessageToManager'>
                {t('Напиши нашему менеджеру')}
            <img src="/tgIco.svg" alt="" />
        </div>
    )
})