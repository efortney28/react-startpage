import React, { useState, useEffect } from 'react'

import { DateTime } from "luxon"

const Today = () => {
    const [datetime, setDatetime] = useState(DateTime.local())
    
    useEffect(() => {
        var timer = setInterval(() => setDatetime(DateTime.local()), 1000)
        return function cleanup(){
            clearInterval(timer)
        }
    })
    return(
        <div className="mx-20">
            <p className="date-text">{datetime.toLocaleString(DateTime.DATE_HUGE).slice(0, 19)}</p>
            <p className="time-text">{datetime.toLocaleString(DateTime.TIME_SIMPLE)}</p>
        </div>
    )

}

export default Today