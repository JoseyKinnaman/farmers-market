import React from 'react';

function Schedule(props){
  const marketSchedule = [  
    {  
       day: "Sunday",
       location: "Lents International",
       hours: "9:00am - 2:00pm",
       booth: "4A"
    },
    {  
       day: "Monday",
       location: "Pioneer Courthouse Square",
       hours: "10:00am - 2:00pm",
       booth: "7C"
    },
    {  
       day: "Tuesday",
       location: "Hillsboro",
       hours: "5:00pm - 8:30pm",
       booth: "1F"
    },
    {  
       day: "Wednesday",
       location: "Shemanski Park",
       hours: "10:00am - 2:00pm",
       booth: "3E"
    },
    {  
       day: "Thursday",
       location: "Northwest Portland",
       hours: "2:00pm - 6:00pm",
       booth: "6D"
    },
    {  
       day: "Saturday",
       location: "Beaverton",
       hours: "10:00am - 1:30pm",
       booth: "9G"
    }
  ]
  return (
    <React.Fragment>
      <p>Market Location: {marketSchedule[0].location}<br/>
      Hours: {marketSchedule[0].hours}<br/>
      Booth: {marketSchedule[0].booth}</p>
    </React.Fragment>
  );
}

export default Schedule;


// function Ticket(props){
//   return (
//     <React.Fragment>
//       <h3>{props.location} - {props.names}</h3>
//       <p><em>{props.issue}</em></p>
//       <hr />
//     </React.Fragment>
//   );
// }

// function MarketScheduleList() {

//   return (
//     <div style={scheduleStyle}>
//       {marketScheduleList.map((marketSchedule, index) =>
//         <MarketSchedule day={marketSchedule.day}
//           location={marketSchedule.location}
//           hours={marketSchedule.hours}
//           booth={marketSchedule.booth}
//           key={index} />
//       )}
//     </div>
//   );
// }

// //  <h3>{props.day}</h3>
// <h4>{props.location}</h4>
//   <p><em>{props.hours}</em></p>
//   <p><em>{props.booth}</em></p>