import './MobFilterCheckBox.scss';

export default ({ type, title, isSelected, onToggle }) => {
  return (
    <div className="MobFilterCheckBox">
      <input
        type="checkbox"
        checked={isSelected}
        onChange={() => onToggle(title)}
      />
      {type === 'geo' && (
        <img
          src={`https://flagcdn.com/${title}.svg`}
          className="MobFilterCheckBox__flag"
        />
      )}
      {title}
    </div>
  );
};