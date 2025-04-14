import BlogItem from './BlogItem/BlogItem';
import './BlogPage.scss';
import React, { useState } from 'react';
export default () => {

    const filters = [
        {name: 'All'},
        {name: 'Outcore Academy'},
        {name: 'Event Insights'},
        {name: 'Expert Talks'},
        {name: 'iGaming News'},
        {name: 'Point of View'},
    ]

    const gallery =[
        {
            src: '/blog/1.webp',
            date: '02.02.2025',
            time: 'Время чтения: 5 мин',
            hashtag: '#Event Insights',
            title: 'Typical SEO Mistakes: Why your website ranks low',
            description: 'SEO is a complex strategy, and no strategy comes without risks. When improving a website’s position, it’s...'
        },
        {
            src: '/blog/2.webp',
            date: '02.02.2025',
            time: 'Время чтения: 5 мин',
            hashtag: '#Event Insights',
            title: 'Typical SEO Mistakes: Why your website ranks low',
            description: 'SEO is a complex strategy, and no strategy comes without risks. When improving a website’s position, it’s...'
        },
        {
            src: '/blog/3.webp',
            date: '02.02.2025',
            time: 'Время чтения: 5 мин',
            hashtag: '#Event Insights',
            title: 'Typical SEO Mistakes: Why your website ranks low',
            description: 'SEO is a complex strategy, and no strategy comes without risks. When improving a website’s position, it’s...'
        },
        {
            src: '/blog/4.webp',
            date: '02.02.2025',
            time: 'Время чтения: 5 мин',
            hashtag: '#Event Insights',
            title: 'Typical SEO Mistakes: Why your website ranks low',
            description: 'SEO is a complex strategy, and no strategy comes without risks. When improving a website’s position, it’s...'
        },
        {
            src: '/blog/5.webp',
            date: '02.02.2025',
            time: 'Время чтения: 5 мин',
            hashtag: '#Event Insights',
            title: 'Typical SEO Mistakes: Why your website ranks low',
            description: 'SEO is a complex strategy, and no strategy comes without risks. When improving a website’s position, it’s...'
        },
        {
            src: '/blog/6.webp',
            date: '02.02.2025',
            time: 'Время чтения: 5 мин',
            hashtag: '#Event Insights',
            title: 'Typical SEO Mistakes: Why your website ranks low',
            description: 'SEO is a complex strategy, and no strategy comes without risks. When improving a website’s position, it’s...'
        },
    ]

    const [activeFilter, setActiveFilter] = useState('All');

    const handleFilterClick = (filterName) => {
        setActiveFilter(filterName);
    };

    return (
        <div className='BlogPage'>
            <h2 className='BlogPage__title text__gradient'>
                Блог Outcore
            </h2>
            <div className='BlogPage__nav'>
                <p className='BlogPage__nav_title'>Filters</p>
                <div className='BlogPage__nav_items'>
                    {filters.map((el, index) => (
                        <div className={`BlogPage__nav_items_item ${
                            activeFilter === el.name ? 'BlogPage__nav_items_item_active' : ''
                        }`}
                        onClick={() => handleFilterClick(el.name)}>{el.name}</div>
                    ))}
                </div>
            </div>
            <div className='BlogPage__gallery'>
                    {gallery.map((el, index) => (
                        <BlogItem src={el.src} date={el.date} time={el.time} hashtag={el.hashtag} title={el.title} description={el.description}/>
                    ))}
            </div>
        </div>
    )
}