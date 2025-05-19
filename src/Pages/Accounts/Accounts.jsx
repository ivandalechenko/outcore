import './Accounts.scss';
import Filter from './Filter/Filter';
import Line from './Filter/Line/Line';
import { useEffect, useState } from 'react';
import MobFilterCurrrency from './MobFilterCurrrency/MobFilterCurrrency';
import Btn from './Filter/Btn/Btn';
import { observer } from 'mobx-react-lite';
import { useTranslation } from 'react-i18next';

import { useRef } from 'react';
import gsap from 'gsap';

export default observer(() => {
  const { t } = useTranslation();

  const links = [
    { name: t('Как выбрать аккаунт') },
    { name: t('Как запустить аккаунт') },
    { name: t('Как выбрать сетап') }
  ];

  const names = [
    { name: t('Номер') },
    { name: t('Валюта') },
    { name: t('Спенд') },
    { name: t('Возраст') },
    { name: t('Платежный профиль') },
    { name: t('Гео') },
    { name: t('Цена $') }
  ];

  const items = [
    { id: 3731, currency: 'USD', spend: 507, age: 2024, profile: 'old pay', country: 'az', price: 220 },
    { id: 3729, currency: 'SEK', spend: 39100, age: 2020, profile: 'old pay', country: 'se', price: 600 },
    { id: 3728, currency: 'NOK', spend: 72700, age: 2018, profile: 'Reset', country: 'no', price: 900 },
    { id: 1488, currency: 'UAH', spend: 777777, age: 2026, profile: 'old pay', country: 'ua', price: 666 },
    { id: 3731, currency: 'USDD', spend: 507, age: 2024, profile: 'old pay', country: 'az', price: 220 }
  ];

  const spends = items.map(item => item.spend);
  const minSpend = Math.min(...spends);
  const maxSpend = Math.max(...spends);

  const prices = items.map(item => item.price);
  const minPrice = Math.min(...prices);
  const maxPrice = Math.max(...prices);

  const [mmOpened, setmmOpened] = useState(false);

  const [resetTrigger, setResetTrigger] = useState(false);

  const [filters, setFilters] = useState({
    currency: [],
    age: [],
    profile: [],
    geo: [],
    spend: { min: minSpend, max: maxSpend },
    price: { min: minPrice, max: maxPrice }
  });

  const toggleFilterValue = (key, value) => {
    setFilters(prev => ({
      ...prev,
      [key]: prev[key].includes(value)
        ? prev[key].filter(item => item !== value)
        : [...prev[key], value]
    }));
  };

  const updateRange = (key, range) => {
    setFilters(prev => ({ ...prev, [key]: range }));
  };

  const filteredItems = items.filter(item => {
    if (filters.currency.length && !filters.currency.includes(item.currency)) return false;
    if (filters.age.length && !filters.age.includes(item.age)) return false;
    if (filters.profile.length && !filters.profile.includes(item.profile)) return false;
    if (filters.geo.length && !filters.geo.includes(item.country)) return false;
    if (item.spend < filters.spend.min || item.spend > filters.spend.max) return false;
    if (item.price < filters.price.min || item.price > filters.price.max) return false;
    return true;
  });

  const resetFilters = () => {
    setFilters({
      currency: [],
      age: [],
      profile: [],
      geo: [],
      spend: { min: minSpend, max: maxSpend },
      price: { min: minPrice, max: maxPrice }
    });
    setResetTrigger(prev => !prev); // <-- триггерим сброс
  };

  const headerRef = useRef();
  const contentRef = useRef();


    useEffect(() => {
    const elems = [headerRef.current, contentRef.current];

    gsap.set(elems, {
        x: (i) => (i % 2 === 0 ? '-100vw' : '100vw'),
        opacity: 0
    });

    gsap.to(elems, {
        x: 0,
        opacity: 1,
        stagger: 0.15,
        duration: 0.8,
        ease: 'power3.out',
    });
    }, []);

  return (
    <>
      <div className='Accounts__mm' style={{ transform: `translate(${mmOpened ? 0 : -100}vw, 0px)` }}>
        <div className='Accounts__mm_wrapper'>
          <div className='Accounts__mm_back' onClick={() => setmmOpened(!mmOpened)}>
            <img src='/arrow.svg' alt='' />
            {t('Фильтры')}
          </div>
          <div className='Accounts__mm_close' onClick={() => setmmOpened(!mmOpened)}>
            <img src='/exitmm.svg' alt='' />
          </div>
        </div>
        <div className='Accounts__mm_filter'>
          <div className='Accounts__mm_filter_currency MobFilterEl'>
            <div className='Accounts__mm_filter_currency__title'>{t('Валюта')}</div>
            {[...new Set(items.map(el => el.currency))].map((el, index) => (
              <MobFilterCurrrency
                key={el}
                currency={el}
                setCurrency={val => toggleFilterValue('currency', val)}
                isSelected={filters.currency.includes(el)}
              />
            ))}
          </div>
          <div className='Accounts__mm_filter_spend MobFilterLine'>
            <Line
              title={t('Спенд')}
              key={'Спенд'}
              minValue={minSpend}
              maxValue={maxSpend}
              currentMin={filters.spend.min}
              currentMax={filters.spend.max}
              onChange={({ min, max }) => {
                updateRange('spend', { min, max })
              }}
            />
          </div>
          <div className='Accounts__mm_filter_age MobFilterEl'>
            <div className='Accounts__mm_filter_currency__title'>{t('Возраст')}</div>
            {[...new Set(items.map(el => el.age))].sort((a, b) => a - b).map((age, index) => (
              <MobFilterCurrrency
                key={index}
                currency={age}
                setCurrency={val => toggleFilterValue('age', val)}
                isSelected={filters.age.includes(age)}
              />
            ))}
          </div>
          <div className='Accounts__mm_filter_profile MobFilterEl'>
            <div className='Accounts__mm_filter_currency__title'>{t('Платежный профиль')}</div>
            {[...new Set(items.map(el => el.profile))].sort().map((profile, index) => (
              <MobFilterCurrrency
                key={index}
                currency={profile}
                setCurrency={val => toggleFilterValue('profile', val)}
                isSelected={filters.profile.includes(profile)}
              />
            ))}
          </div>
          <div className='Accounts__mm_filter_geo MobFilterEl'>
            <div className='Accounts__mm_filter_currency__title'>{t('Гео')}</div>
            {[...new Set(items.map(el => el.country))].sort().map((geo, index) => (
              <MobFilterCurrrency
                key={index}
                currency={geo}
                setCurrency={val => toggleFilterValue('geo', val)}
                isSelected={filters.geo.includes(geo)}
              />
            ))}
          </div>
          <div className='Accounts__mm_filter_price MobFilterLine'>
            <Line
              title={t('Цена $')}
              key={'Цена'}
              minValue={minPrice}
              maxValue={maxPrice}
              currentMin={filters.price.min}
              currentMax={filters.price.max}
              onChange={({ min, max }) => updateRange('price', { min, max })}
            />
          </div>
          <div className='Accounts__mm_filter_btns MobFilterEl'>
            <Btn title={t('Очистить')} onClick={resetFilters} />
            <Btn title={t('Применить')} onClick={() => setmmOpened(false)} />
          </div>
        </div>
      </div>

      <div className='Accounts container'>
        <h2 className='Accounts__title' ref={headerRef}>
          <span className='text__gradient'>{t('Выберите')}</span> {t('идеальный')} <br />
          {t('Google аккаунт для залива')}
        </h2>
        <div className='Accounts__decor'>
          <div className='Accounts__decor_abstract free_img'>
            <img src='/abstract1.webp' alt='' />
          </div>
        </div>
        <div className='Accounts__form_border'>
          <div className='Accounts__form' ref={contentRef}>
            <div className='Accounts__form_links_wrapper'>
              <div className='Accounts__form_links'>
                {links.map((el, index) => (
                  <a href='#' className='Accounts__form_links_item' key={index}>{el.name}</a>
                ))}
              </div>
              <div className='Accounts__form_links_mob_wrapper'>
                <div className='Accounts__form_links_mob' onClick={() => setmmOpened(!mmOpened)}>
                  <img src='/triangleFilter.svg' alt='' />
                  {t('Фильтры')}
                </div>
              </div>
            </div>
            <div className='Accounts__form_filter'>
              <Filter
                items={items}
                minPrice={minPrice}
                maxPrice={maxPrice}
                minSpend={minSpend}
                maxSpend={maxSpend}
                onChange={setFilters}
                btnClickClear={resetFilters}
                resetTrigger={resetTrigger}
              />
            </div>
            <div className='Accounts__form_form'>
              <div className='Accounts__form_form_wrapper'>
                {names.map((el, index) => (
                  <div className='Accounts__form_form_item' key={index}>{el.name}</div>
                ))}
              </div>
              {filteredItems.map((el, index) => (
                <div className='Accounts__form_form_el' key={index}>
                  <div className='Accounts__form_form_el_item'>{el.id}</div>
                  <div className='Accounts__form_form_el_item'>{el.currency}</div>
                  <div className='Accounts__form_form_el_item'>{el.spend}</div>
                  <div className='Accounts__form_form_el_item'>{el.age}</div>
                  <div className='Accounts__form_form_el_item'>{el.profile}</div>
                  <div className='Accounts__form_form_el_item Accounts__form_form_el_item_country'>
                    <img src={`https://flagcdn.com/${el.country}.svg`} alt='' />
                    {el.country}
                  </div>
                  <div className='Accounts__form_form_el_item'>{el.price}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
});
