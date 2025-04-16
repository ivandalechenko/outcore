import MobFilterCheckBox from '../MobFilterCheckBox/MobFilterCheckBox';
import './MobFilterCurrrency.scss';
export default ({ currency, type }) => {return (
    <div className='MobFilterCurrrency'>
        <div className='MobFilterCurrrency__container'>
            <MobFilterCheckBox title={currency} type={type}/>
        </div>
    </div>
)}