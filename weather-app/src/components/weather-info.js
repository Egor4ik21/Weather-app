import React from "react";

class Weather extends React.Component {
    render() {
        return (
        <div> 
        { this.props.city &&
            <div>
              <p>Месторасположение:{this.props.city}, {this.props.country}</p>
              <p>Температура:{this.props.temp}°C</p>
              <p>Ощущается как:{this.props.feels_like}°C</p>
              <p>Восход солнца:{this.props.sunrise}</p>
              <p>Заход солнца:{this.props.sunset}</p>
              <p>Ветер:{this.props.wind}м/с</p>
              <p>Давление:{this.props.pressure} мм рт. ст.</p>  
              <p>Влажность:{this.props.humidity}%</p>
            </div> 
        }           
        </div>
       );
    }
}

export default Weather;