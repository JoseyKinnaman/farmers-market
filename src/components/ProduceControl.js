import React from 'react';
import Produce from './Produce'

class ProduceControl extends React.Component 
{
  constructor(props){
    super(props);
    this.state = {
      month: 0
    }
  }

  handleChange = (event) => {
    this.setState({month: event.target.value});
  }

  render(){
    return(
      <React.Fragment>
        <div>
        <h2>Avery's Produce by Month</h2>
          <select value={this.state.month} onChange={this.handleChange}>
            <option selected value = "0">January</option>
            <option value="1">February</option>
            <option value="2">March</option>
            <option value="3">April</option>
            <option value="4">May</option>
            <option value="5">June</option>
            <option value="6">July</option>
            <option value="7">August</option>
            <option value="8">September</option>
            <option value="9">October</option>
            <option value="10">November</option>
            <option value="11">December</option>
          </select>
        </div>
        <Produce 
          month={parseInt(this.state.month)}/>
      </React.Fragment>
    );
  }
}

export default ProduceControl;