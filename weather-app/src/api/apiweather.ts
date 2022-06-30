const API = 'e72b77c5176fe83a0d977a2e1be1a5a7';

const getWeather = async () => {
    let city = (document.querySelector('.cityValue') as HTMLInputElement).value
    return fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API}&units=metric`);
}

export default getWeather;