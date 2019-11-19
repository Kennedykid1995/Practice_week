import React from 'react';
import Day from './Day/day'; 
import '../../App.css'; 

class Week extends React.Component {

  render() {
    return (
      <div>
        <h1>Week</h1>
        <div className="weekContainer">
         <Day />
         </div>
      </div>
    );
  }
}
export default Week;