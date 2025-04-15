import './Accounts.scss';
import Filter from './Filter/Filter';
import Line from './Filter/Line/Line';
export default () => {

    const links = [
        { name: "Как выбрать аккаунт" },
        { name: "Как запустить аккаунт" },
        { name: "Как выбрать сетап" }
    ]

    const names = [
        { name: "Номер" },
        { name: "Валюта" },
        { name: "Спенд" },
        { name: "Возраст" },
        { name: "Платежный профиль" },
        { name: "Гео" },
        { name: "Цена $" },
    ]

    const items = [
        {
            id: 3731,
            currency: 'USD',
            spend: 507,
            age: 2024,
            profile: 'old pay',
            country: 'az',
            price: 220
        },
        {
            id: 3729,
            currency: 'SEK',
            spend: 39100,
            age: 2020,
            profile: 'old pay',
            country: 'se',
            price: 600
        },
        {
            id: 3728,
            currency: 'NOK',
            spend: 72700,
            age: 2018,
            profile: 'Reset',
            country: 'no',
            price: 900
        },
        {
            id: 1488,
            currency: 'UAH',
            spend: 777777,
            age: 2026,
            profile: 'cuck old pay',
            country: 'ua',
            price: 666
        },
        {
            id: 3731,
            currency: 'USD',
            spend: 507,
            age: 2024,
            profile: 'old pay',
            country: 'az',
            price: 220
        },
    ]



    return (
        <div className='Accounts container'>
            <Line title={'meow'} min={10} max={200} />
            
            <h2 className='Accounts__title'>
                <span className='text__gradient'>Выберите</span> идеальный <br /> Google аккаунт для залива
            </h2>
            <div className='Accounts__decor'>
                <div className='Accounts__decor_abstract free_img'>
                    <img src="/abstract1.webp" alt="" />
                </div>
            </div>
            <div className='Accounts__form_border'>
                <div className='Accounts__form'>
                    <div className='Accounts__form_links'>
                        {links.map((el, index) => (
                            <a href='#' className='Accounts__form_links_item' key={index}>{el.name}</a>
                        ))}
                    </div>
                    <div className='Accounts__form_filter'>
                        <Filter />
                    </div>
                    <div className='Accounts__form_form'>
                        {names.map((el, index) => (
                            <div className='Accounts__form_form_item'>{el.name}</div>
                        ))}
                        {items.map((el, index) => (
                            <div className='Accounts__form_form_el'>
                                <div className='Accounts__form_form_el_item'>{el.id}</div>
                                <div className='Accounts__form_form_el_item'>{el.currency}</div>
                                <div className='Accounts__form_form_el_item'>{el.spend}</div>
                                <div className='Accounts__form_form_el_item'>{el.age}</div>
                                <div className='Accounts__form_form_el_item'>{el.profile}</div>
                                <div className='Accounts__form_form_el_item Accounts__form_form_el_item_country'>
                                    <img src={`https://flagcdn.com/${el.country}.svg`} alt="" />
                                    {el.country}</div>
                                <div className='Accounts__form_form_el_item'>{el.price}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}