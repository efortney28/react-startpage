import React, { useState } from 'react'

const Search = () => {
    const [ query, setQuery ] = useState(null)
    const handleKeyUp = (e) => {
        if (e.key === 'Enter') {
            if (query != null) {
                let queryURL = 'https://www.google.com/search?q=' + query
                window.location = queryURL
            }
        }
    }
    return (
        <div className="center search-container">
            <i className="fas fa-search search-icon"></i>
            <input 
                value={query}
                onChange={e => setQuery(e.target.value)}
                onKeyUp = {handleKeyUp}
                placeholder="Google here..."
                className="search-box"
            />
        </div>
    )
}

export default Search