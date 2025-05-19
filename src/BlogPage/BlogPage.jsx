import BlogItem from './BlogItem/BlogItem';
import './BlogPage.scss';
import React, { useState, useEffect, useRef } from 'react';
import { observer } from 'mobx-react-lite';
import { useTranslation } from 'react-i18next';

import BlogElements from "../BlogElements";

import gsap from 'gsap';

export default observer(() => {

    const { t, i18n } = useTranslation();

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

    const filters = ['All', ...new Set(BlogElements.flatMap(item => item.tags))];

    const [activeFilter, setActiveFilter] = useState('All');

    const handleFilterClick = (filterName) => {
        setActiveFilter(filterName);
    };

    const [currentPage, setCurrentPage] = useState(1);
    const isLandscape = useIsLandscape();
    const itemsPerPage = isLandscape ? 6 : 3;

    const filteredElements = activeFilter === 'All'
        ? BlogElements
        : BlogElements.filter(item => item.tags.includes(activeFilter));

    const totalPages = Math.ceil(filteredElements.length / itemsPerPage);
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentGallery = filteredElements.slice(indexOfFirstItem, indexOfLastItem);

    useEffect(() => {
        setCurrentPage(1);
    }, [activeFilter]);

    const blogStart = useRef(null);
    useEffect(() => {
        blogStart.current.scrollIntoView({ behavior: 'smooth' });
    }, [currentPage]);

    const headerRef = useRef();
    const contentRef = useRef();


    useEffect(() => {
    const elems = [headerRef.current, contentRef.current, blogStart.current];

    gsap.set(elems, {
        x: (i) => (i % 2 === 0 ? '-100vw' : '100vw'),
        opacity: 0
    });

    gsap.to(elems, {
        x: 0,
        opacity: 1,
        stagger: 0.15,
        duration: 0.8,
        ease: 'power3.out',
    });
    }, []);

    return (
        <div className='BlogPage sizecontainer'>
            <h2 className='BlogPage__title text__gradient' ref={headerRef}>
                {t('Блог Outcore')}
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
                <p className='BlogPage__nav_title'>{t('Фильтры')}</p>
                <div className='BlogPage__nav_items'>
                    {filters.map((el, index) => (
                        <div className={`BlogPage__nav_items_item ${activeFilter === el ? 'BlogPage__nav_items_item_active' : ''}`}
                            onClick={() => handleFilterClick(el)}>{el}</div>
                    ))}
                </div>
            </div>
            <div className='BlogPage__gallery' ref={contentRef}>
                {currentGallery.map((el, index) => (
                    <BlogItem
                        key={index}
                        src={el.img}
                        date={el.date}
                        time={el.minutesToRead[i18n.language]}
                        hashtag={el.tags}
                        title={el.name[i18n.language]}
                        description={el.text[i18n.language]}
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
    );
});