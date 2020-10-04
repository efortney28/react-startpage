
export const GET_WEATHER_ICON = (day) => {
    let icon_name = null
    switch (day.weather[0].main) {
        case "Clear":
            icon_name = "fas fa-sun"
            break
        case "Clouds":
            icon_name = "fas fa-cloud"
            break
        case "Rain":
            icon_name = "fas fa-cloud-rain"
            break
        case "Thunderstorm":
            icon_name = "fas fa-bolt"
            break
        default:
            icon_name = "error"
            break
    }

    if (icon_name != null) {
        return icon_name
    } else {
        return "Error: No icon received."
    }
}

export const CONVERT_DATE = (time) => {
    let unix = time
    let date = new Date(unix * 1000)
    return date
}