import React, { useState } from 'react';
import { connect } from 'react-redux';
import { increment, decrement, reset } from './counter.actions';

const Counter = ({ counter, incr, decr, res }) => {
  return (
    <div className="counter">
      <button className="counter__button" onClick={decr}>
        -
      </button>
      <span className="counter__value">{counter}</span>
      <button className="counter__button" onClick={incr}>
        +
      </button>
    </div>
  );
};

const mapState = state => {
  return {
    counter: state,
  };
};

const mapDispatch = dispatch => {
  return {
    incr: () => dispatch(increment()),
    decr: () => dispatch(decrement()),
    res: () => dispatch(reset()),
  };
};

const connector = connect(mapState, mapDispatch); //HOC

export default connector(Counter);
