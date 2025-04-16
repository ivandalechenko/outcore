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
                    { name: "Аккаунты", path: "/accounts" },
                    { name: "Услуги", path: "/services" },
                    { name: "Блог", path: "/blog" },
                    { name: "Контакты", path: "/contacts" },
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