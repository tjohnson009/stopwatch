import { useState, useEffect, useRef } from 'react'; 

function Stopwatch() {
// const [timeElapsed, setTimeElasped] = useState(0); 
const [timeIsRolling, setTimeIsRolling] = useState(false); 
// const [time, setTime] = useState({ hours: 0, minutes: 0, seconds: 0, milliseconds: 0 }); 
const [time, setTime] = useState([0, 0, 0, 0]); // milliseconds, seconds, minutes, hours
// const [time, setTime] = useState({milliseconds: 0, seconds:0, minutes:0, hours: 0}); // milliseconds, seconds, minutes, hours
const [laps, setLaps] = useState([]); 
const intervalRef = useRef(null); 
// const displayRef = useRef(null); 

useEffect(() => {
    let [milliseconds, seconds, minutes, hours] = time; 
    let newMilliseconds = 0; 
    let newSeconds = 0, newMinutes = 0, newHours = 0; 

    if (timeIsRolling) {
        let timeID = setInterval(() => {
            // console.log(milliseconds); 
            // setTime([milliseconds += 19, seconds, minutes, hours]); 
            newMilliseconds = milliseconds + 19;
            newSeconds = seconds;
            newMinutes = minutes;
            newHours = hours;
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
            // debugger;
            setTime([newMilliseconds, newSeconds, newMinutes, newHours]); 
            // setTime(prevTime => {}); 
            // displayRef.current.innerHTML = `${hours}:${minutes}:${seconds}:${milliseconds}`; 
            // displayRef.current.innerHTML = `${newHours}:${newMinutes}:${newSeconds}:${newMilliseconds}`; 
            // updateDisplay(); 
        }, 19); 
        intervalRef.current = timeID; 
        // console.log (timeID); 
    }

    return () => {
        clearInterval(intervalRef.current); 
    }
}); 

function stopOrStartStopWatch() {
    // isTimeRolling ? setIsTimeRolling(false) : setIsTimeRolling(true);  
    if (timeIsRolling) {
        setTimeIsRolling(false); 
        clearInterval(intervalRef.current); 
    } else if (!timeIsRolling) {
        setTimeIsRolling(true); 
    }
}

function lapTime() {
    const button = 0; 
}

function addLap() {
    
}

function resetStopwatch() {
    setTimeIsRolling(false); 
    resetTime(); 
}

function resetTime() {
 setTime([0,0,0,0]); 
 // reset display and interval?
}

function formatTime([ms, s, m, h]) {
    const pad = (num, size) => String(num).padStart(size, '0');
    return `${pad(h, 2)}:${pad(m, 2)}:${pad(s, 2)}:${pad(ms, 3)}`;
  }

// function updateDisplay() {
//     let display = document.querySelector('.display'); 
//     display.innerHTML = displayRef.current; 
// milliseconds < 100 ? milliseconds = '0' + milliseconds : milliseconds; 
// }

return (
<>
<div className='stopwatch'>
<div className='display'>{formatTime(time)}</div>
<div className='buttons flex gap-10'>
  <button className='min-w-min' id='startstop' onClick={stopOrStartStopWatch}>{ timeIsRolling ? 'Stop' : 'Start' }</button>
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