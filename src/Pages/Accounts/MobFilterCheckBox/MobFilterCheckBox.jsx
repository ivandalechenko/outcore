import './MobFilterCheckBox.scss';
import { useState } from 'react';
export default ({ type, title }) => {
    
    const [selectedItemsBox, setSelectedItemsBox] = useState([]);

    const toggleItemBox = (title) => {
        if (selectedItemsBox.includes(title)) {
          setSelectedItemsBox(selectedItemsBox.filter((i) => i !== title));
        } else {
          setSelectedItemsBox([...selectedItemsBox, title]);
        }
      };
    
    return (
    <div className='MobFilterCheckBox'>
        <input
                type="checkbox"
                checked={selectedItemsBox.includes(title)}
                onChange={() => toggleItemBox(title)}
              />
        {type === 'geo' && (
            <img 
            src={`https://flagcdn.com/${title}.svg`}
            className="MobFilterCheckBox__flag" 
            />
        )}
        {title}
    </div>
)}