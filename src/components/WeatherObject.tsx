interface WeatherObject {
    country: string,
    city: string,
    temp: number,
    pressure: number,
    sunset: Date,
    [key: string]: string|Date|number
} 

export default WeatherObject;