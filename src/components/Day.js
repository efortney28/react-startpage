import React from 'react'
import { GET_WEATHER_ICON, CONVERT_DATE } from './dayHelper.js'

const Day = (props) => {
    let day = props.day
    let icon = GET_WEATHER_ICON(day)
    let human_date = String(CONVERT_DATE(day.dt))
    return (
        <div className="p-med center day-container">
            <p className="p-med center weather-text">{human_date.slice(0, 3)}</p>
            <i className={icon + " p-med center weather-icon"}  />
            <p className="p-med center weather-text temp-text">{Math.round(day.temp.day)}</p>
        </div>
    )
}

export default Day