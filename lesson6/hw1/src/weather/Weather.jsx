import React from 'react';
import WeatherItem from './WeatherItem';
// import fetchWeatherData from './weather.gateway';
import { connect } from 'react-redux';
// import { weatherSelectors } from './weather.selectors';
import * as weatherActions from './weather.actions';

const Weather = ({ weatherDataList, getWeather }) => {
  // fetchWeatherData();
  // fetchWeatherData().then(res => console.log(res));
  return (
    <main className="weather">
      <h1 className="weather__title">Weather data</h1>
      <ul className="cities-list">
        <WeatherItem />
        <WeatherItem />
        <WeatherItem />
        <button onClick={getWeather}>Weather</button>
      </ul>
    </main>
  );
};

const mapState = state => {
  return {
    weatherDataList: state.weather.weatherDataList,
  };
};

const mapDispatch = {
  getWeather: weatherActions.getWeatherData,
};

export default connect(mapState, mapDispatch)(Weather);
//algo
//1. делаем запрос на сервер и получаем данные
//2. записываем данные в store(state)
//3. делаем перерендер с обновленными данными
