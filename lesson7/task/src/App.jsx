import React from 'react';

const App = () => {
  return (
    <div id="root">
      <h1 class="title">Todo List</h1>
      <main class="todo-list">
        <div class="create-task">
          <input class="create-task__input" type="text" value="" />
          <button class="btn create-task__btn">Create</button>
        </div>

        <ul class="list">
          <li class="list-item">
            <input type="checkbox" class="list-item__checkbox" />
            Learn React
            <button class="list-item__delete-btn"></button>
          </li>

          <li class="list-item list-item_done">
            <input type="checkbox" class="list-item__checkbox" />

            <button class="list-item__delete-btn"></button>
          </li>

          <li class="list-item list-item_done">
            <input type="checkbox" class="list-item__checkbox" />
            Learn JavaScript
            <button class="list-item__delete-btn"></button>
          </li>

          <li class="list-item list-item_done">
            <input type="checkbox" class="list-item__checkbox" />
            Learn Dev Tools
            <button class="list-item__delete-btn"></button>
          </li>
        </ul>
      </main>
    </div>
  );
};

export default App;
