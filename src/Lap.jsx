import React from 'react';
import formatTime from './formatTime';

const Lap = ({ lapTime, lapNumber }) => {
    // console.log(lapTime); 
  return (
    <div className="lap">
      <span>Lap {lapNumber}: </span>
      {/* <span>{formatTime(lapTime)}</span> */}
      {formatTime(...lapTime)}
    </div>
  );
};

export default Lap;