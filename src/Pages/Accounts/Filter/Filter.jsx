import Btn from './Btn/Btn';
import DropDown from './DropDown/DropDown';
import Line from './Line/Line';
import './Filter.scss';
import { observer } from 'mobx-react-lite';
import { useTranslation } from 'react-i18next';
import { useEffect, useState } from 'react';

export default observer(({ items, minPrice, maxPrice, minSpend, maxSpend, onChange, btnClickClear, resetTrigger }) => {
  const { t } = useTranslation();

  const [Currency, setCurrency] = useState([]);
  const [Age, setAge] = useState([]);
  const [Profile, setProfile] = useState([]);
  const [Geo, setGeo] = useState([]);
  const [spendRange, setSpendRange] = useState({ min: minSpend, max: maxSpend });
  const [priceRange, setPriceRange] = useState({ min: minPrice, max: maxPrice });

  useEffect(() => {
    onChange?.({
      currency: Currency,
      age: Age,
      profile: Profile,
      geo: Geo,
      spend: spendRange,
      price: priceRange
    });
  }, [Currency, Age, Profile, Geo, spendRange, priceRange]);

  //сброс фильтров
  useEffect(() => {
    setCurrency([]);
    setAge([]);
    setProfile([]);
    setGeo([]);
    setSpendRange({ min: minSpend, max: maxSpend });
    setPriceRange({ min: minPrice, max: maxPrice });
  }, [resetTrigger]);

  return (
    <div className='Filter'>
      <DropDown state='currency' key='currency' items={items} onChange={setCurrency} resetTrigger={resetTrigger}/>
      <Line
        title={t('Спенд')}
        key='Спенд'
        minValue={minSpend}
        maxValue={maxSpend}
        valueMin={spendRange.min}
        valueMax={spendRange.max}
        onChange={setSpendRange}
      />
      <DropDown state='age' items={items} onChange={setAge} resetTrigger={resetTrigger}/>
      <DropDown state='profile' items={items} onChange={setProfile} resetTrigger={resetTrigger}/>
      <DropDown state='geo' items={items} onChange={setGeo} resetTrigger={resetTrigger}/>
      <Line
        title={t('Цена')}
        minValue={minPrice}
        maxValue={maxPrice}
        valueMin={priceRange.min}
        valueMax={priceRange.max}
        onChange={setPriceRange}
      />
      <Btn title={t('Очистить')} onClick={btnClickClear} />
      <Btn title={t('Применить')} />
    </div>
  );
});
