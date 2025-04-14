import './BlogPage.scss';
export default () => {
    return (
        <div className='BlogPage'>
            <div className='BlogPage_header'>
                Блог Outcore
            </div>
            <div className='BlogPage_decor free_img'></div>
            <div className='BlogPage_filters'>
                <div className='BlogPage_filters_header'>
                    Фильтры
                </div>
                <div className='BlogPage_filters_content'>
                    <div className='BlogPage_filters_element'>
                        Meow
                    </div>
                </div>
            </div>
        </div>
    )
}