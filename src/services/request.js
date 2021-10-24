const request = (url) => {
    return fetch(url).then(response => response.json());
}

export default request;