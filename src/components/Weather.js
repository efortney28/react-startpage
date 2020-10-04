import React, { useState, useEffect } from 'react'
import Day from './Day'
import { GET_API_URL } from './weatherHelper'
import { Col, Row } from  'react-bootstrap'

const Weather = (props) => {
    const [ currentWeather, setCurrent ] = useState([])
    const [ loc, setLocation ] = useState(props)
    const lat = loc.position.coords.latitude
    const long = loc.position.coords.longitude
    let apiURL = GET_API_URL(lat, long)
    
    let { daily } = currentWeather
    
    useEffect(() => { 
        async function fetchData(url) {
            const res = await fetch(url)
            res.json().then(res => setCurrent(res))
        }
        fetchData(apiURL)
        
    }, [apiURL])
    return (
        <Row className="p-med">
            {daily != null &&
            daily.map((day, ind) => (
                <Col className="p-med"><Day key={ind} day={day} className="p-med" /></Col>
            ))
           }
        </Row>
    )
}

export default Weather