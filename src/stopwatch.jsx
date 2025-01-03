import { useState, useEffect, useRef } from 'react'; 

function Stopwatch() {
// const [timeElapsed, setTimeElasped] = useState(0); 
const [isTimeRolling, setIsTimeRolling] = useState(false); 
// const [time, setTime] = useState({ hours: 0, minutes: 0, seconds: 0, milliseconds: 0 }); 
const [time, setTime] = useState([0, 0, 0, 0]); // milliseconds, seconds, minutes, hours
const [laps, setLaps] = useState([]); 
const intervalRef = useRef(null); 
const displayRef = useRef('00:00:00:000'); 

    let timeID = setInterval(() => {
        let [milliseconds, seconds, minutes, hours] = time; 
        // console.log(milliseconds); 
        let newMilliseconds, newSeconds, newMinutes, newHours; 
        // setTime([milliseconds += 19, seconds, minutes, hours]); 
        newMilliseconds = milliseconds + 19;
        if (newMilliseconds > 999) {
            // // setTime([milliseconds - 1000, seconds, minutes, hours]);
            // setTime(...time, milliseconds = milliseconds - 1000, seconds = seconds + 1);  
            newSeconds = seconds + 1;  
            newMilliseconds -= 1000; // 1000ms in one second, excess should carry over to the next s tate update
        } 
        if (newSeconds > 59) {
            // setTime(...time, seconds = 0, minutes = minutes + 1);   
            newMinutes = minutes + 1; 
            newSeconds = 0; 
        }
        if (newMinutes > 59) {
            newHours = hours + 1; 
            newMinutes = 0; 
        }

        if (newHours > 99) {
            newHours = 0; 
        }

        // displayRef.current.innerHTML = `${hours}:${minutes}:${seconds}:${milliseconds}`; 
        // displayRef.current.innerHTML = `${newHours}:${newMinutes}:${newSeconds}:${newMilliseconds}`; 
        // updateDisplay(); 
    }, 19); 
    // console.log (timeID); 

function stopOrStartStopWatch() {
    isTimeRolling ? setIsTimeRolling(false) : !isTimeRolling ? setIsTimeRolling(true) : console.log('Something broke in stopOrStartStopwatch'); 
}

function lapTime() {
    const button = 0; 
}

function resetStopwatch() {
    setIsTimeRolling(false); 

}

function resetTime() {
 setTime([0,0,0,0]); 
 // reset display and interval?
}

function updateDisplay() {
//     let display = document.querySelector('.display'); 
//     display.innerHTML = displayRef.current; 
// milliseconds < 100 ? milliseconds = '0' + milliseconds : milliseconds; 
}

return (
<>
<div className='stopwatch'>
<div className='display' ref={displayRef}>{displayRef.current}</div>
<div className='buttons flex gap-10'>
  <button className='min-w-min' id='startstop' onClick={stopOrStartStopWatch}>{isTimeRolling ? 'Stop' : 'Start'}</button>
  <button className='min-w-min' id='reset' onClick={resetStopwatch}>Reset</button>
  <button className='min-w-min' id='lap'>Lap</button>
</div>
<div className='lap-times'>

</div>
</div>
</>
    )
}

export default Stopwatch; 