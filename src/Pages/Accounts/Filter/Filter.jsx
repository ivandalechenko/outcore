import Btn from './Btn/Btn';
import DropDown from './DropDown/DropDown';
import './Filter.scss';
import Line from './Line/Line';
import { observer } from 'mobx-react-lite';
import { useTranslation } from 'react-i18next';
export default observer(({ items, minPrice, maxPrice, minSpend, maxSpend }) => {

    const { t } = useTranslation();



    return (
        <div className='Filter'>
            <DropDown state={'currency'} items={items} />
            <Line title={t('Спенд')} minValue={minSpend} maxValue={maxSpend} />
            <DropDown state={'age'} items={items} />
            <DropDown state={'profile'} items={items} />
            <DropDown state={'geo'} items={items} />
            <Line title={t('Цена')} minValue={minPrice} maxValue={maxPrice} />
            <Btn title={t('Очистить')} />
            <Btn title={t('Применить')} />
        </div>
    )
})