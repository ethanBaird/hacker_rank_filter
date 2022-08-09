import { useEffect, useState } from "react"
import NewsList from "../components/NewsList"

const NewsContainer = () => {
    
    const [news, setNews] = useState([])
    const [newsIds, setNewsIds] = useState([])

    useEffect(() => {
        getNewsIds();
    }, []) 

    useEffect(() => {
        getNews()
    }, [newsIds])

    const getNewsIds = () => {
        fetch(`https://hacker-news.firebaseio.com/v0/topstories.json`)
            .then(res => res.json())
            .then(data => setNewsIds(data))
    }

    const getNews = () => {
        // console.log(newsIds);
        const news = newsIds.map((newsId) => {
            fetch(`https://hacker-news.firebaseio.com/v0/item/${newsId}.json`).then(res => res.json())
        })

        Promise.all(news).then((data) => {
            setNews(data)
        })

        
    }

    return(
        <NewsList news={news}/>
    )
}

export default NewsContainer