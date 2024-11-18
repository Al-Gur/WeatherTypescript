import WeatherObject from "./WeatherObject.tsx";

interface Props {
    weather: WeatherObject,
    message: string,
} 

const Weather = ({weather, message}: Props) => {
    if(message) {
        return (
            <div>{message}</div>
        )
    }else {
        return (
            <div>
                <p>Location: {weather.country}, {weather.city}</p>
                <p>Temp: {weather.temp}</p>
                <p>Pressure: {weather.pressure}</p>
		<p>Sunset: {weather.sunset.toLocaleTimeString()}</p>
            </div>
        )
    }
};

export default Weather;