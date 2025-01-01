import { useState, useEffect } from 'react'; 

function Stopwatch() {
const [timeElapsed, setTimeElasped] = useState(0); 
const [isRolling, setIsRolling] = useState(false); 

useEffect(() => {
    let timeID = setInterval(console.log('interval rolling')); 
    console.log (timeID); 
})
    return (
<>
<div className='stopwatch'>
<div className='display'>00:00:00:000</div>
<div className='buttons'>
  <button id='startstop'>Start</button>
  <button id='reset'>Reset</button>
  <button id='lap'>Lap</button>
</div>
<div className='lap-times'>

</div>
</div>
</>
    )
}

export default Stopwatch; 