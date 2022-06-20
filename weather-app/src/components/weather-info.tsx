import React from "react";


const Weather = (props) => {
    return (
    <div className="weatherinfo"> 
    { props.city &&
        <div>
            <p>Месторасположение:{props.city}, {props.country}</p>
            <p>Температура:{props.temp}°C</p>
            <p>Ощущается как:{props.feels_like}°C</p>
            <p>Восход солнца:{props.sunrise}</p>
            <p>Заход солнца:{props.sunset}</p>
            <p>Ветер:{props.wind}м/с</p>
            <p>Давление:{props.pressure} мм рт. ст.</p>  
            <p>Влажность:{props.humidity}%</p>
        </div> 
    } 
    <p className="error">{props.error}</p>          
    </div>
    );
}

export default Weather;