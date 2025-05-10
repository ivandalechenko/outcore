import { Link } from 'react-router-dom';
import './NavLinks.scss';
import { observer } from 'mobx-react-lite';
import { useTranslation } from 'react-i18next';

export default observer(() => {

    const { t } = useTranslation();

    return (
        <>
            {
                [
                    { name: t('Главная'), path: "/" },
                    // { name: t('Главная 2'), path: "/2" },
                    { name: t('Аккаунты'), path: "/accounts" },
                    { name: t('Услуги'), path: "/services" },
                    { name: t('Блог'), path: "/blog" },
                    { name: t('Контакты'), path: "/contacts" },
                ].map((el, index) => {
                    return (
                        <div className='NavLink' key={`NavLink${index}`}>
                            {
                                el.path === '/contacts' ? <a href="#contacts">{el.name}</a> : <Link to={el.path}>{el.name}</Link>
                            }
                        </div>
                    )
                })
            }
        </>
    )
}
)