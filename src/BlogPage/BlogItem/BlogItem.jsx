import './BlogItem.scss';
export default ({ src, date, time, hashtag, title, description}) => {return (
    <div className='BlogItem'>
        <div className='BlogItem__header'>
            <p className='BlogItem__header_item'>{date}</p>
            <p className='BlogItem__header_item'>{time}</p>
        </div>
        <div className='BlogItem_img'>
            <img src={src} alt="" />
        </div>
        <div className='BlogItem__tag'>
            {hashtag}
        </div>
        <div className='BlogItem__text'>
            <div className='BlogItem__text_title'>{title}</div>
            <div className='BlogItem__text_description'>{description}</div>
        </div>
    </div>
)}