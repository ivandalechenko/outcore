import MobFilterCheckBox from '../MobFilterCheckBox/MobFilterCheckBox';
import './MobFilterCurrrency.scss';

export default ({ currency, type, setCurrency, isSelected }) => {
  return (
    <div className="MobFilterCurrrency">
      <div className="MobFilterCurrrency__container">
        <MobFilterCheckBox
          title={currency}
          type={type}
          isSelected={isSelected}
          onToggle={setCurrency}
        />
      </div>
    </div>
  );
};
