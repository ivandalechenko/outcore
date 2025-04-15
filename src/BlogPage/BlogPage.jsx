import BlogItem from './BlogItem/BlogItem';
import './BlogPage.scss';
import React, { useState, useEffect, useRef } from 'react';

import BlogElements from "../BlogElements";

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

    const filters = [...new Set(BlogElements.flatMap(item => item.tags))];

    const [activeFilter, setActiveFilter] = useState('All');

    const handleFilterClick = (filterName) => {
        setActiveFilter(filterName);
    };

    const [currentPage, setCurrentPage] = useState(1);
    const isLandscape = useIsLandscape();
    const itemsPerPage = isLandscape ? 6 : 3;

    const totalPages = Math.ceil(BlogElements.length / itemsPerPage);

    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentGallery = BlogElements.slice(indexOfFirstItem, indexOfLastItem);

    // useEffect(() => {}, [])

    const blogStart = useRef(null)
    useEffect(() => {
        blogStart.current.scrollIntoView({ behavior: 'smooth' });
    }, [currentPage]);
    return (
        <div className='BlogPage sizecontainer'>
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
            <div className='BlogPage__nav' ref={blogStart}>
                <p className='BlogPage__nav_title'>Фильтры</p>
                <div className='BlogPage__nav_items'>
                    {filters.map((el, index) => (
                        <div className={`BlogPage__nav_items_item ${activeFilter === el.name ? 'BlogPage__nav_items_item_active' : ''
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
                        onClick={() => {
                            setCurrentPage(prev => Math.max(prev - 1, 1));
                        }}
                        disabled={currentPage === 1}
                        className="BlogPage__pagination_arrow"
                    >
                        <img src="/arrowGallery.svg" alt="" />
                    </button>
                    <div className='BlogPage__pagination_number'>
                        {[...Array(totalPages)].map((_, index) => (
                            <button
                                key={index}
                                onClick={() => {
                                    setCurrentPage(index + 1);
                                }}
                                className={`BlogPage__pagination_item ${currentPage === index + 1 ? 'active' : ''}`}
                            >
                                {index + 1}
                            </button>
                        ))}
                    </div>

                    <button
                        onClick={() => {
                            setCurrentPage(prev => Math.min(prev + 1, totalPages));
                        }}
                        disabled={currentPage === totalPages}
                        className="BlogPage__pagination_arrow"
                    >
                        <img src="/arrowGallery.svg" alt="" className='BlogPage__pagination_arrow_img2' />
                    </button>
                </div>
            </div>
        </div>
    )
}