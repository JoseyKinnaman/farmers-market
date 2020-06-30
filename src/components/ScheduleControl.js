import React from 'react';
import Schedule from './Schedule'

class ScheduleControl extends React.Component {
  constructor()
  {
    super();
    this.state = {
      day: 0
    }
  }


  //onselectboxfunction (event listener)
  // {
  //   this.setState = { day: selection}
  // };

  render(){
    return(
      <React.Fragment>
        <div>
          <select>
            <option selected value = "0">Sunday</option>
            <option value="1">Monday</option>
            <option value="2">Tuesday</option>
            <option value="3">Wednesday</option>
            <option value="4">Thursday</option>
            <option value="5">Friday</option>
            <option value="6">Saturday</option>
          </select>
        </div>
        <Schedule />
      </React.Fragment>
    )
    
  }
}

export default ScheduleControl; 