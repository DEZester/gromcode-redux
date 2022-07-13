import React, { Component } from 'react';
import Header from './Header';
import { Context } from './context';

class App extends Component {
  state = {
    userData: { name: 'Nikola Tesla', avatar_url: 'https://avatars3.githubusercontent.com/u10001' },
  };

  render() {
    return (
      <div className="page">
        <Context.Provider value={this.state.userData}>
          <Header></Header>
        </Context.Provider>
      </div>
    );
  }
}

export default App;
