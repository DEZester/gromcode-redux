import React, { useEffect } from 'react';
import WeatherItem from './WeatherItem';
import { connect } from 'react-redux';
import { weatherSelectors } from './weather.selectors';
import * as weatherActions from './weather.actions';

const Weather = ({ weatherDataList, getWeatherList }) => {
  useEffect(() => {
    getWeatherList();
  }, []);

  return (
    <main className="weather">
      <h1 className="weather__title">Weather data</h1>
      <ul className="cities-list">
        {weatherDataList.map(weather => (
          <WeatherItem name={weather.name} temperature={weather.temperature} key={weather.id} />
        ))}
      </ul>
    </main>
  );
};

const mapState = state => {
  return {
    weatherDataList: weatherSelectors(state),
  };
};

const mapDispatch = {
  getWeatherList: weatherActions.getWeatherData,
};

export default connect(mapState, mapDispatch)(Weather);
//algo
//1. делаем запрос на сервер и получаем данные
//2. записываем данные в store(state)
//3. делаем перерендер с обновленными данными
