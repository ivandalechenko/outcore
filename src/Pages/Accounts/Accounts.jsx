import './Accounts.scss';
import Filter from './Filter/Filter';
import Line from './Filter/Line/Line';
import { useEffect, useState } from 'react';
import MobFilterCurrrency from './MobFilterCurrrency/MobFilterCurrrency';
import Btn from './Filter/Btn/Btn';
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
        }
    ]

    const spends = items.map(item => item.spend);

    const minSpend = Math.min(...spends);
    const maxSpend = Math.max(...spends);

    const prices = items.map(item => item.price);
    const minPrice = Math.min(...prices);
    const maxPrice = Math.max(...prices);

    const [mmOpened, setmmOpened] = useState(false);



    return (
        <>
            <div className='Accounts__mm' style={{
                transform: `translate(${mmOpened ? 0 : -100}vw, 0px)`
            }}>
                <div className='Accounts__mm_wrapper'>
                    <div className='Accounts__mm_back' onClick={() => { setmmOpened(!mmOpened) }}>
                        <img src="/arrow.svg" alt="" />
                        Фильтры
                    </div>
                    <div className='Accounts__mm_close' onClick={() => { setmmOpened(!mmOpened) }}>
                        <img src="/exitmm.svg" alt="" />
                    </div>
                </div>
                {/* <Filter /> */}
                <div className='Accounts__mm_filter'>
                    <div className='Accounts__mm_filter_currency MobFilterEl'>
                        <div className='Accounts__mm_filter_currency__title'>Валюта</div>
                        {items.map((el, index) => (
                            <MobFilterCurrrency currency={el.currency}/>
                        ))}
                    </div>
                    <div className='Accounts__mm_filter_spend MobFilterLine'>
                        <Line title={'Спенд'} min={minSpend} max={maxSpend}/>
                    </div>
                    <div className='Accounts__mm_filter_age MobFilterEl'>
                        <div className='Accounts__mm_filter_currency__title'>Возраст</div>
                        {/* Ниже сортировка по возрастанию и отсеевание дублей, затем мап*/}
                        {[...new Set(items.map(el => el.age))]
                        .sort((a, b) => a - b)
                        .map((age, index) => (
                            <MobFilterCurrrency currency={age} />
                        ))}
                    </div>
                    <div className='Accounts__mm_filter_profile MobFilterEl'>
                        <div className='Accounts__mm_filter_currency__title'>Платежный профиль</div>
                        {[...new Set(items.map(el => el.profile))]
                        .sort()
                        .map((profile, index) => (
                            <MobFilterCurrrency currency={profile} />
                        ))}
                    </div>
                    <div className='Accounts__mm_filter_geo MobFilterEl'>
                        <div className='Accounts__mm_filter_currency__title'>Гео</div>
                        {[...new Set(items.map(el => el.country))].sort().map((geo, index) =>(
                            <MobFilterCurrrency currency={geo} type={'geo'}/>
                        ))}
                    </div>
                    <div className='Accounts__mm_filter_price MobFilterLine'>
                        <Line title={'Спенд'} min={minPrice} max={maxPrice}/>
                    </div>
                    <div className='Accounts__mm_filter_btns MobFilterEl'>
                        <Btn title={'Clear'} />
                        <Btn title={'Apply'} />
                    </div>
                </div>
            </div>
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
                        <div className='Accounts__form_links_wrapper'>
                            <div className='Accounts__form_links'>
                                {links.map((el, index) => (
                                    <a href='#' className='Accounts__form_links_item' key={index}>{el.name}</a>
                                ))}
                            </div>
                            <div className='Accounts__form_links_mob_wrapper'>
                                <div className='Accounts__form_links_mob' onClick={() => { setmmOpened(!mmOpened) }}>
                                    <img src="/triangleFilter.svg" alt="" />
                                    Фильтры
                                </div>
                            </div>
                        </div>
                        <div className='Accounts__form_filter'>
                            <Filter items={items} minPrice={minPrice} maxPrice={maxPrice} minSpend={minSpend} maxSpend={maxSpend}/>
                        </div>
                        <div className='Accounts__form_form'>
                            <div className='Accounts__form_form_wrapper'>
                                {names.map((el, index) => (
                                    <div className='Accounts__form_form_item'>{el.name}</div>
                                ))}
                            </div>
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
        </>
    )
}