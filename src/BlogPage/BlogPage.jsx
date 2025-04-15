import BlogItem from './BlogItem/BlogItem';
import './BlogPage.scss';
import React, { useState, useEffect } from 'react';
export default () => {

    const useIsLandscape = () => {
        const getIsLandscape = () => window.innerWidth > window.innerHeight;
        const [isLandscape, setIsLandscape] = useState(getIsLandscape());
      
        useEffect(() => {
          const handleResize = () => {
            setIsLandscape(getIsLandscape());
          };
      
          window.addEventListener('resize', handleResize);
          window.addEventListener('orientationchange', handleResize);
      
          return () => {
            window.removeEventListener('resize', handleResize);
            window.removeEventListener('orientationchange', handleResize);
          };
        }, []);
      
        return isLandscape;
      };

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
        {
            src: '/blog/6.webp',
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

    const [currentPage, setCurrentPage] = useState(1);
    const isLandscape = useIsLandscape();
    const itemsPerPage = isLandscape ? 6 : 3;

    const totalPages = Math.ceil(gallery.length / itemsPerPage);

    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentGallery = gallery.slice(indexOfFirstItem, indexOfLastItem);

    return (
        <div className='BlogPage'>
            <h2 className='BlogPage__title text__gradient'>
                Блог Outcore
            </h2>
            <div className='BlogPage__decor'>
                <div className='BlogPage__decor_abstract free_img'>
                    <img src="/abstract1.webp" alt="" />
                </div>
                <div className='BlogPage__decor_abstract2 free_img'>
                    <img src="/abstract1.webp" alt="" />
                </div>
            </div>
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
                {currentGallery.map((el, index) => (
                    <BlogItem
                    key={index}
                    src={el.src}
                    date={el.date}
                    time={el.time}
                    hashtag={el.hashtag}
                    title={el.title}
                    description={el.description}
                    />
                ))}
            </div>
            <div className="BlogPage__pagination">
                <div className='BlogPage__pagination_wrapper'>
                    <button 
                        onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
                        disabled={currentPage === 1}
                        className="BlogPage__pagination_arrow"
                    >
                        <img src="/arrowGallery.svg" alt="" />
                    </button>
                    <div className='BlogPage__pagination_number'>
                        {[...Array(totalPages)].map((_, index) => (
                            <button
                            key={index}
                            onClick={() => setCurrentPage(index + 1)}
                            className={`BlogPage__pagination_item ${currentPage === index + 1 ? 'active' : ''}`}
                            >
                            {index + 1}
                            </button>
                        ))}
                    </div>

                    <button 
                        onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
                        disabled={currentPage === totalPages}
                        className="BlogPage__pagination_arrow"
                    >
                        <img src="/arrowGallery.svg" alt="" className='BlogPage__pagination_arrow_img2'/>
                    </button>
                    </div>
                </div>
        </div>
    )
}