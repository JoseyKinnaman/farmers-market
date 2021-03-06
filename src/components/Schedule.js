import React from 'react';
import PropTypes from "prop-types";



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
function Schedule(props) {
  return (
    <React.Fragment>
        <p><b>Market Location:</b> {marketSchedule[props.day].location}<br/>
           <b>Hours:</b> {marketSchedule[props.day].hours}<br/>
           <b>Booth:</b> {marketSchedule[props.day].booth}</p>


    </React.Fragment>
  );
}

Schedule.propTypes = {
   day: PropTypes.number
};


export default Schedule;