const NewsItem = ({story}) => {
    return (
        <>
            <a href={story.url}>{story.title}</a>
            <p>{story.by}</p>
        </>
    )
}

export default NewsItem
