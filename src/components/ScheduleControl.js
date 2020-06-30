import React from 'react';
import Schedule from './Schedule'

class ScheduleControl extends React.Component {
  constructor(props)
  {
    super(props);
    this.state = {
      day: 0
    }
  }


  handleChange = (event) =>{
    this.setState({ day: event.target.value});
  }

  render(){
    return(
      <React.Fragment>
        <div>
        <h2>Farmer's Market Schedule by Week Day</h2>
          <select value={this.state.day} onChange={this.handleChange}>
            <option selected value = "0">Sunday</option>
            <option value="1">Monday</option>
            <option value="2">Tuesday</option>
            <option value="3">Wednesday</option>
            <option value="4">Thursday</option>
            <option value="5">Saturday</option>
          </select>
        </div>
        <Schedule 
          day={parseInt(this.state.day)}/>
      </React.Fragment>
    )   
  }
}

export default ScheduleControl; 