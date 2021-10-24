import request from "./request";


const getWeather = () => {
    const WEATHER_API_URL = 'https://goweather.herokuapp.com/weather/kathmandu';
    return request(WEATHER_API_URL);
}

export default getWeather;