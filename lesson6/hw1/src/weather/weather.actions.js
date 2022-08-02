export const WEATHER_DATA = 'WEATHER_DATA';
export const GET_WEATHER_DATA = 'GET_WEATHER_DATA';

export const weatherData = weatherData => {
  return {
    action: WEATHER_DATA,
    payload: weatherData,
  };
};

export const getWeatherData = () => {
  return {
    action: GET_WEATHER_DATA,
  };
};
