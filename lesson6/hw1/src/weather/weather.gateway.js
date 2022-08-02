const baseUrl = 'https://5e5cf5eb97d2ea0014796f01.mockapi.io/api/v1/cities';

const fetchWeatherData = () => {
  fetch(baseUrl)
    .then(response => response.json())
    .then(res => console.log(res));
};

export default fetchWeatherData;
