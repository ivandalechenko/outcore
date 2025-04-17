import './Btn.scss';
export default ({ title, onClick}) => {return (
    <div className='Btn' onClick={onClick}>
        {title}
    </div>
)}