export const GET_API_URL = (lat, long) => {
    const { REACT_APP_API_ID } = process.env
    let apiURL = "https://api.openweathermap.org/data/2.5/onecall?lat=" + lat + "&lon=" + long + "&units=imperial&appid=" + REACT_APP_API_ID
    return(apiURL)
}