import './HomePage.scss';

import Hero from '../Hero/Hero';
import Note from '../Note/Note';
import Advantages from '../Advantages/Advantages';
import AboutUs from '../AboutUs/AboutUs';
import OurServices from '../OurServices/OurServices';
import MiniBlog from '../MiniBlog/MiniBlog';

export default ({ type = 2 }) => {
    return (
        <div className='HomePage'>
            <Hero type={type} />
            <Note />
            <Advantages />
            <AboutUs />
            <OurServices />
            <MiniBlog />
        </div>
    )
}