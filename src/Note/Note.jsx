import './Note.scss';
export default () => {
    return (
        <div className='Note container'>
            <div className='Note_header'>
                Outcore
            </div>
            <div className='Note_content'>
                <div className='Note_left free_img'>
                    <img src="/aboutUsDuga.svg" alt="" />
                </div>
                <div className='Note_text'>
                    Мы специализируемся на предоставлении уникальных и эффективных решений, <span>
                        разработанных с учетом специфических потребностей арбитражных команд и соло-медиабаеров, работающих с Google Ads.
                    </span>
                </div>
                <div className='Note_right free_img'>
                    <img src="/aboutUsDuga.svg" alt="" />
                </div>
            </div>
        </div>
    )
}