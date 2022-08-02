import { GET_WEATHER_DATA, WEATHER_DATA } from './weather.actions';

const initialData = {
  weatherDataList: [],
};

const weatherReducer = (state = initialData, action) => {
  switch (action.type) {
    default:
      return state;
    case WEATHER_DATA: {
      return {
        ...state,
        weatherDataList: action.payload.weatherData,
      };
    }
    case GET_WEATHER_DATA: {
      return {
        ...state,
        weatherDataList: weatherDataList.concat([1, 2, 3]),
      };
    }
  }
};

export default weatherReducer;
