import './LangChanger.scss';
import { useState } from 'react';


export default () => {
    const [activeLang, setactiveLang] = useState('RU');
    return (
        <div className='LangChanger'>
            {
                [
                    'UA',
                    'EN',
                    'RU'
                ].map((el, index) => {
                    return <div key={`lang-${index}`} className={`LangChanger_element ${activeLang === el && 'LangChanger_element_active'}`} onClick={() => {
                        setactiveLang(el)
                    }}>
                        {el}
                    </div>
                })
            }
        </div>
    )
}