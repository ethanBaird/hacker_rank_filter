import NewsItem from "./NewsItem"

const NewsList = ({news}) => {
    const newsItems = news.map((item, index) => {
        return (
            <li key={index} className='news-list'>
                <NewsItem story={item}/>
                <hr/>
            </li>
            
        )
    })

    return (
        <ul>
            <hr/>
            {newsItems}
        </ul>
    )
}

export default NewsList