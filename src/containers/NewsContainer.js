import { useEffect, useState } from "react"
import NewsItemSelect from "../components/NewsItemSearch"
import NewsList from "../components/NewsList"

const NewsContainer = () => {
    
    const [news, setNews] = useState([])
    const [newsIds, setNewsIds] = useState([])
    const [searchInput, setSearchInput] = useState('')
    const [filteredNews, setFilteredNews] = useState([])

    useEffect(() => {
        getNewsIds();
    }, []) 

    useEffect(() => {
        getNews()
    }, [newsIds])

    useEffect(() => {
        if (searchInput) {
            const filteredNews = news.filter((item) => item.title.toLowerCase().includes(searchInput.toLowerCase()) || item.by.toLowerCase().includes(searchInput.toLowerCase()) === true)
            setFilteredNews(filteredNews)
        }
        else {
            setFilteredNews([]);
        }
    }, [searchInput])

    const getNewsIds = () => {
        fetch(`https://hacker-news.firebaseio.com/v0/topstories.json`)
            .then(res => res.json())
            .then(data => {
                setNewsIds(data)
                
            })
    }

    const getNews = () => {
        const news = newsIds.map((newsId) => {
            return fetch(`https://hacker-news.firebaseio.com/v0/item/${newsId}.json`).then(res => res.json())
        })

        Promise.all(news).then((data) => {
            setNews(data)
        })
    }

    const handleSearchInput = (value) => {
        setSearchInput(value)

    }

    return(
        <div className="container">
            <NewsItemSelect handleSearchInput={handleSearchInput}/>
            {searchInput ? <NewsList news={filteredNews}/>:<NewsList news={news}/>} 
        </div>
    )
}

export default NewsContainer