import './LangChanger.scss';
import { useEffect, useState } from 'react';

import languageStore from '../languageStore';
import { observer } from 'mobx-react-lite';


export default observer(() => {
    const [activeLang, setactiveLang] = useState('RU');

    useEffect(() => {
        languageStore.setLanguage(activeLang.toLowerCase());
    }, [activeLang])

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
})