import './BlogItem.scss';
export default ({ src, date, time, hashtag, title, description }) => {
    const shortDescription = description.length > 100
        ? description.slice(0, 150) + '...'
        : description;

    return (
        <div className='BlogItem'>
            <div className='BlogItem__header'>
                <p className='BlogItem__header_item'>{date}</p>
                <p className='BlogItem__header_item'>{time}</p>
            </div>
            <div className='BlogItem_img'>
                <img src={src} alt="" />
            </div>
            <div className='BlogItem__tag'>
                {hashtag.map((tag, index) => (
                    <span key={index} className="BlogItem__tag_item">#{tag}</span>
                ))}
            </div>
            <div className='BlogItem__text'>
                <div className='BlogItem__text_title'>{title}</div>
                <div className='BlogItem__text_description'>{shortDescription}</div>
            </div>
        </div>
    );
};