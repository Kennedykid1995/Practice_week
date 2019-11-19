import React from 'react';
import logo from './logo.svg';
import './App.css';
import Week from './Weather App/WeekHolder/week'; 
class App extends React.Component {

  render() {
    return (
      <div className="App">
        <h1>Weather App</h1>
        <div className="weatherAppContainer">
        <Week />
        </div>
      </div>
    );
  }
}
export default App;
