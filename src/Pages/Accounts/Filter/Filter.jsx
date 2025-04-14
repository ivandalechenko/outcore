import DropDown from './DropDown/DropDown';
import './Filter.scss';
import Line from './Line/Line';
export default () => {return (
    <div className='Filter'>
        <DropDown state={'currency'} />
        <Line title={'Спенд'} min={1} max={1000000}/>
        <DropDown state={'age'} />
        <DropDown state={'profile'} />
        <DropDown state={'geo'} />
        <Line title={'Цена'} min={1} max={10000}/>
        <div className='Filter__btn'>Apply</div>
        <div className='Filter__btn'>Clear</div>
    </div>
)}