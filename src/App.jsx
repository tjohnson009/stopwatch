import { useState, useEffect } from 'react'
import './App.css'; 
import Stopwatch from './stopwatch';

function App() {

  const [time, setTime] = useState(0); 

  return (
    <>
  <Stopwatch></Stopwatch>
    </>
  )
}

export default App
