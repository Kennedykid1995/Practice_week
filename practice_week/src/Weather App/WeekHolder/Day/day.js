import React from 'react';
import '../../../App.css';
class Day extends React.Component {

  render() {
    return (
      <div className="weekHolder">
        <div className="dayContainer">
          <h1>Sunday</h1>
          <section className="weatherImg">
            <h1>Image</h1>
          </section>
          <section className="weatherReport">
            <h1>Weather</h1>
          </section>
        </div>
        <div className="dayContainer">
          <h1>Monday</h1>
        </div>
        <div className="dayContainer">
          <h1>Tuesday</h1>
        </div>
        <div className="dayContainer">
          <h1>Wednesday</h1>
        </div>
        <div className="dayContainer">
          <h1>Thursday</h1>
        </div>
        <div className="dayContainer">
          <h1>Friday</h1>
        </div>
        <div className="dayContainer">
          <h1>Saturday</h1>
        </div>
      </div>
    );
  }
}
export default Day;