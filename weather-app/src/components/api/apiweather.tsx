import { city } from "../weatherlogic";
const API = 'e72b77c5176fe83a0d977a2e1be1a5a7';

const api_url = async () => {
    await 
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API}&units=metric`);
}
export default api_url;
