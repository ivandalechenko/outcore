import './DropDown.scss';
import { useState } from 'react';

export default ({ state }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedItems, setSelectedItems] = useState([]);

  const options = {
    currency: ['EURO', 'USD', 'UAH', 'NOK', 'SWK'],
    age: ['1', '2', '3', '4'],
    profile: ['old pay', 'Reset'],
    geo: ['UA', 'KZ', 'NO', 'SE', 'AZ']
  };

  const titles = {
    currency: 'Валюта',
    age: 'Возраст',
    profile: 'Профиль',
    geo: 'Гео'
  };

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const toggleItem = (item) => {
    if (selectedItems.includes(item)) {
      setSelectedItems(selectedItems.filter((i) => i !== item));
    } else {
      setSelectedItems([...selectedItems, item]);
    }
  };

  const currentOptions = options[state] || [];
  const title = titles[state] || 'Выбор';

  return (
    <div className='DropDown'>
      <div className="DropDown__header" onClick={toggleDropdown}>
        {title}
        <span className={`DropDown__arrow ${isOpen ? 'open' : ''}`}>▼</span>
      </div>
      {isOpen && (
        <div className="DropDown__list">
          {currentOptions.map((item) => (
            <label key={item} className="DropDown__item">
              <input
                type="checkbox"
                checked={selectedItems.includes(item)}
                onChange={() => toggleItem(item)}
              />
              {item}
            </label>
          ))}
        </div>
      )}
    </div>
  );
}
