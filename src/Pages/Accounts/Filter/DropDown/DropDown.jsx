import './DropDown.scss';
import { useState, useMemo } from 'react';
import { observer } from 'mobx-react-lite';
import { useTranslation } from 'react-i18next';
export default observer(({ state, items }) => {
  const { t } = useTranslation();
  
  const [isOpen, setIsOpen] = useState(false);
  const [selectedItems, setSelectedItems] = useState([]);

  const titles = {
    currency: t('Валюта'),
    age: t('Возраст'),
    profile: t('Профиль'),
    geo: t('Гео')
  };

  const fieldMap = {
    currency: 'currency',
    age: 'age',
    profile: 'profile',
    geo: 'country'
  };

  // Вычисляем уникальные значения по нужному полю из items
  const options = useMemo(() => {
    if (!items) return [];
    const field = fieldMap[state];
    if (!field) return [];
    return [...new Set(items.map(item => item[field]))];
  }, [items, state]);

  const title = titles[state] || 'Выбор';

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

  return (
    <div className='DropDown'>
      <div className="DropDown__header" onClick={toggleDropdown}>
        {title}
        <span className={`DropDown__arrow ${isOpen ? 'open' : ''}`}>▼</span>
      </div>
      {isOpen && (
        <div className="DropDown__list">
          {options.map((item) => (
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
})
