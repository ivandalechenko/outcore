import { Link } from 'react-router-dom';
import './NavLinks.scss';

export default () => {
    return (
        <>
            {
                [
                    { name: "Главная", path: "/" },
                    { name: "Аккаунты", path: "/accounts" },
                    { name: "Услуги", path: "/services" },
                    { name: "Блог", path: "/blog" },
                    { name: "Контакты", path: "/contacts" }, // добавь такой роут если нужно
                ].map((el, index) => {
                    return (
                        <div className='NavLink' key={`NavLink${index}`}>
                            <Link to={el.path}>{el.name}</Link>
                        </div>
                    )
                })
            }
        </>
    )
}
