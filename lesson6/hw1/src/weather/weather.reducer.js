import { WEATHER_DATA } from './weather.actions';

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
  }
};

export default weatherReducer;
