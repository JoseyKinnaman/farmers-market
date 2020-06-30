import React from 'react';
import Header from "./Header";
import ScheduleControl from "./ScheduleControl";
import ProduceControl from "./ProduceControl";


function App() {

  return (
    <React.Fragment>
      <Header/>
      <div class="ScheduleParent">
      <ScheduleControl />
      </div>
      <div class= "ProduceParent">
      <ProduceControl/>
      </div>
    </React.Fragment>
  );
}

export default App;

