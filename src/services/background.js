import request from "./request";


const getBackground = () => {
    const BG_API_URL = 'https://bing.biturl.top/?resolution=1920&format=json&mkt=en-US';
    return request(BG_API_URL);
}

export default getBackground;