import React from "react";
import Info from "./components/info";
import Form from "./components/form";
import Weather from "./components/weather-info";

const API = 'e72b77c5176fe83a0d977a2e1be1a5a7';

class App extends React.Component {

    state = {
        city: undefined,
        temp: undefined,
        humidity: undefined,
        sunset: undefined,
        sunrise: undefined,
        pressure: undefined,
        feels_like: undefined,
        wind: undefined,
        country: undefined,
    }

    getWeather = async (e) => {
        e.preventDefault();
        const citys = e.target.elements.city.value;
        const api_url = await 
        fetch(`https://api.openweathermap.org/data/2.5/weather?q=${citys}&appid=${API}&units=metric`);
        const dataWeather = await api_url.json();
        console.log(dataWeather);
        
            this.setState({
                temp: dataWeather.main.temp,
                humidity: dataWeather.main.humidity,
                sunset: dataWeather.sys.sunset,
                sunrise: dataWeather.sys.sunrise,
                pressure: dataWeather.main.pressure,
                feels_like: dataWeather.main.feels_like,
                wind: dataWeather.wind.speed,
                country: dataWeather.sys.country,
                city: dataWeather.name,
            });
    }

    render() {
        return (
            <div>
                <Info />
                <Form  weatherForForm={this.getWeather}/>
                <Weather
                temp={this.state.temp}
                humidity={this.state.humidity}
                sunset={this.state.sunset}
                sunrise={this.state.sunrise}
                pressure={this.state.pressure}
                feels_like={this.state.feels_like}
                wind={this.state.wind}
                country={this.state.country}
                city={this.state.city}            
                />
            </div>
        );
    }
}

export default App;