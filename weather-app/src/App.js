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

    getWeather = async (event) => {
        event.preventDefault();
        let city = event.target.elements.city.value;
        const api_url = await 
        fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API}&units=metric`);
        const dataWeather = await api_url.json();
        console.log(dataWeather);
        
        if(city) {

        function timeConverter(UNIX_timestamp){
            let a = new Date(UNIX_timestamp * 1000);
            let hour = a.getHours();
            let min = "0" + a.getMinutes();
            let sec = "0" + a.getSeconds();
            let time = hour + ':' + min.substr(-2) + ':' + sec.substr(-2) ;
            return time;
        }
            let sunset = dataWeather.sys.sunset;
            let sunrise = dataWeather.sys.sunrise;
            let sunset_date = timeConverter(sunset);
            let sunrise_date = timeConverter(sunrise);

            let pressure = dataWeather.main.pressure;
            let pressureInMmHg = Math.floor(pressure * 0.75006);

            let temp = dataWeather.main.temp;
            let newTemp = Math.floor(temp);

            let feels_like = dataWeather.main.feels_like;
            let newFeels_like = Math.floor(feels_like);

            this.setState({
                temp: newTemp,
                humidity: dataWeather.main.humidity,
                sunset: sunset_date,
                sunrise: sunrise_date,
                pressure: pressureInMmHg,
                feels_like: newFeels_like,
                wind: dataWeather.wind.speed,
                country: dataWeather.sys.country,
                city: dataWeather.name,
            });
        }
    }

    render() {
        return (
            <div>
                <Info />
                <Form  weatherForForm={this.getWeather} />
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