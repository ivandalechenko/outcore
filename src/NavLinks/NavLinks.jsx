import './NavLinks.scss';
export default () => {
    return (
        <>
            {
                [
                    { name: "Главная" },
                    { name: "Аккаунты" },
                    { name: "Услуги" },
                    { name: "Блог" },
                    { name: "Контакты" },
                ].map((el, index) => {
                    return <div className='NavLink' key={`NavLink${index}`}>
                        {el.name}
                    </div>
                })
            }
        </>
    )
}