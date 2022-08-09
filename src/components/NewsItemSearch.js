const NewsItemSelect = ({handleSearchInput}) => {
    
    const handleChange = (event) => {
        handleSearchInput(event.target.value)
    }
    
    return (
        <input type='text' onChange={handleChange} placeholder='search' className="search"/>
    )
}

export default NewsItemSelect