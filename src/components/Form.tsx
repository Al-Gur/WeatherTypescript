interface Props {
    getWeather: (city: string) => void,
} 

const Form = ({getWeather}: Props) => {
    const getCity = e: any => {
        e.preventDefault();
        const city: string = e.target.city.value.trim();
        getWeather(city);
    }
    return (
        <form onSubmit={getCity}>
            <input type="text" name='city'/>
            <button type="submit">Get Weather</button>
        </form>
    );
};

export default Form;