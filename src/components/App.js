import React from 'react';
import Header from "./Header";
import ScheduleControl from "./ScheduleControl";
import ProduceControl from "./ProduceControl";


function App() {

  return (
    <React.Fragment>
      <Header/>
      <ScheduleControl />
      <ProduceControl/>
    </React.Fragment>
  );
}

export default App;

