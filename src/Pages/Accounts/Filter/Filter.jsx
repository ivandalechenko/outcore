import Btn from './Btn/Btn';
import DropDown from './DropDown/DropDown';
import './Filter.scss';
import Line from './Line/Line';
export default ({ items, minPrice, maxPrice, minSpend, maxSpend }) => {



    return (
        <div className='Filter'>
            <DropDown state={'currency'} items={items} />
            <Line title={'Спенд'} minValue={minSpend} maxValue={maxSpend} />
            <DropDown state={'age'} items={items} />
            <DropDown state={'profile'} items={items} />
            <DropDown state={'geo'} items={items} />
            <Line title={'Цена'} minValue={minPrice} maxValue={maxPrice} />
            <Btn title={'Apply'} />
            <Btn title={'Clear'} />
        </div>
    )
}