import React from 'react';

const App = () => {
  return (
    <div class="page">
      <div class="user">
        <img
          alt="User Avatar"
          src="https://avatars0.githubusercontent.com/u/10639145?v=4"
          class="user__avatar"
        />
        <div class="user__info">
          <span class="user__name">Apple</span>
          <span class="user__location">Cupertino, CA</span>
        </div>
      </div>

      <span class="spinner"></span>

      <div class="name-form">
        <input type="text" class="name-form__input" />
        <button class="name-form__btn btn">Show</button>
      </div>
    </div>
  );
};

export default App;
