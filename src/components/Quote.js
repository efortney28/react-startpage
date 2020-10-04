import React, { useState, useEffect } from 'react'
import { Col } from 'react-bootstrap'

const Quote = () => {
    const [ randQuote, setRand ] = useState(null)
    const apiURL = 'https://programming-quotes-api.herokuapp.com/quotes/random'
    let quote
    let author
    
    useEffect(() => {
        async function fetchData(url) {
            const res = await fetch(url)
            res.json().then(res => setRand(res))
        }
        fetchData(apiURL)
    }, [apiURL])
    if (randQuote != null){
        quote = randQuote.en
        author = randQuote.author
    }
    return (
        <div className="center quote-container">
            <Col><p className = "poppins-font quote-text">{quote}</p></Col>
            <Col><p className = "poppins-font center author-text">- {author}</p></Col>
        </div>
    )
}
export default Quote