import request from "./request";


const getQuotes = () => {
    const QUOTES_API_URL = 'https://api.quotable.io/random';
    return request(QUOTES_API_URL);
}

export default getQuotes;