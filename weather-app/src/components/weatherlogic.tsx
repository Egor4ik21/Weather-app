import React from "react";
import Weather from "./weather-info";
import Info from './info';
import getWeather from '/home/egor/Weather-app/weather-app/src/api/apiweather'

class Weatherblock extends React.Component {
    
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
        main: undefined,
        error: undefined,
    }
    

    getWeather = async (event) => {
        event.preventDefault();
        let city = (document.querySelector('.cityValue') as HTMLInputElement).value
        const dataWeather =  await (await getWeather()).json();
        console.log(dataWeather); 

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

        
        if(city) {
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
                main:dataWeather.weather[0].main,
                error:undefined
            });
        } else {
            this.setState({
                temp: undefined,
                humidity: undefined,
                sunset: undefined,
                sunrise: undefined,
                pressure: undefined,
                feels_like: undefined,
                wind: undefined,
                country: undefined,
                city: undefined,
                error:"Введите название города",
            })
        }  
    }

    render() {
        return (
            <div className="wrapper">
                <div className="main">
                    <div className="container">
                        <div className="row">
                            <div className="col-sm-5 info">
                                <Info />
                            </div>
                            <div className="col-sm-7 form">
                                <form>
                                    <input className="cityValue" type="text" name="city" placeholder="Город"/>
                                    <button onClick={this.getWeather}>Узнать погоду</button>
                                </form>
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
                                main={this.state.main}
                                error={this.state.error}            
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Weatherblock;
