import React from 'react';
import { useState, useEffect } from 'react';


function Time(){
    const [date, setDate] = useState(new Date());
  
function refreshClock() {
    setDate(new Date());
}

useEffect(() => {
    const timerId = setInterval(refreshClock, 1000);
    return function cleanup() {
    clearInterval(timerId);
    };
}, []);

 return (
    <div className='time'>{date.toLocaleTimeString()}</div>
 );}
 
 export default Time;