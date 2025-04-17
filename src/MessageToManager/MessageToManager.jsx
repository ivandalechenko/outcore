import './MessageToManager.scss';
import { observer } from 'mobx-react-lite';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
export default observer(() => {

    const { t } = useTranslation();

    return (
        <Link to={'/request'}>
            <div className='MessageToManager'>
                    {t('Напиши нашему менеджеру')}
                <img src="/tgIco.svg" alt="" />
            </div>
        </Link>
    )
})