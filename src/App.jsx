import { useState } from 'react'
import './App.css'
import Timer from './components/Timer'
import Questions from './components/Questions'
import Result from './components/Result';

function App() {
  const [isOver, setISOver] = useState(false);

  const [score, setScore] = useState(0)

  return (
    <>


      {isOver ? (
        <Result score={score} />
      ) : (<>
        <Timer setISOver={setISOver} />
        <Questions setISOver={setISOver} setScore={setScore} />
      </>)}


    </>
  )
}

export default App
