import fetchWeatherData from './weather.gateway';

export const WEATHER_DATA = 'WEATHER_DATA';
export const GET_WEATHER_DATA = 'GET_WEATHER_DATA';

export const weatherData = weatherData => {
  return {
    type: WEATHER_DATA,
    payload: {
      weatherData,
    },
  };
};

export const getWeatherData = () => {
  return function (dispatch) {
    fetchWeatherData().then(weather => {
      dispatch(weatherData(weather));
    });
  };
};
