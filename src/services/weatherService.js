import axios from 'axios';

const API_KEY = '63af36b4fe05c494256d45141a6ad685'; 
const API_URL = 'https://api.openweathermap.org/data/2.5/weather';

export const getWeatherByCity = async (city) => {
    try {
        if (!city || typeof city !== 'string') {
            throw new Error('Please enter a valid city name.');
        }

        const response = await axios.get(`${API_URL}?q=${city}&appid=${API_KEY}&units=metric`);

        if (response.status === 200) {
            return response.data; 
        } else {
            throw new Error('Unable to fetch weather data. Please try again.');
        }
    } catch (error) {
        console.error("Error fetching weather data:", error);
        
        if (error.response && error.response.status === 404) {
            throw new Error('City not found. Please try another city.'); 
        } else {
            throw new Error('An error occurred while fetching weather data.'); 
        }
    }
};
