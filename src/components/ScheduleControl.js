import React from 'react';
import Schedule from './Schedule';
import farm from "../img/farm.jpg";

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
        <h2 id="Header">Farmer's Market Schedule by Week Day</h2>
        <div class="SelectBox">
          <select value={this.state.day} onChange={this.handleChange}>
            <option selected value = "0">Sunday</option>
            <option value="1">Monday</option>
            <option value="2">Tuesday</option>
            <option value="3">Wednesday</option>
            <option value="4">Thursday</option>
            <option value="5">Saturday</option>
          </select>
        </div>
        <img class="farmPic" src={farm}/>
        <div class="Schedule">
          <Schedule 
            day={parseInt(this.state.day)}/>
        </div>
      </React.Fragment>
    )   
  }
}

export default ScheduleControl; 