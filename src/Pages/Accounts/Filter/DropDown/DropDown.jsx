import './DropDown.scss';
import { useState, useMemo, useEffect } from 'react';
import { observer } from 'mobx-react-lite';
import { useTranslation } from 'react-i18next';


export default observer(({ state, items, onChange, resetTrigger }) => {
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

  const options = useMemo(() => {
    if (!items) return [];
    const field = fieldMap[state];
    if (!field) return [];
    return [...new Set(items.map(item => item[field]))];
  }, [items, state]);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const toggleItem = (item) => {
    let updated;
    if (selectedItems.includes(item)) {
      updated = selectedItems.filter((i) => i !== item);
    } else {
      updated = [...selectedItems, item];
    }
    setSelectedItems(updated);
    onChange?.(updated);
  };

  const title = titles[state] || 'Выбор';

  useEffect(() => {
    setSelectedItems([]);
  }, [resetTrigger]); //при изменении — сбрасываем

  useEffect(() => {
    onChange?.(selectedItems);
  }, [selectedItems]);

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
});
