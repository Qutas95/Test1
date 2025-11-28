import { useState } from 'react'

const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const total2 = good+bad+neutral
  const [total, setTotal] = useState(0)
  const positive = total2 === 0 ? 0 : (good / total2) * 100
  const average = total2 === 0 ? 0 : (good - bad) / total2
  const handlegoodClick = () => {
    setGood(good + 1)
    setTotal(good+neutral-bad)
      }

  const handleneutralClick = () => {
    setNeutral(neutral + 1)
    setTotal(good+neutral-bad)
      }
  const handlebadClick = () => {
    setBad(bad + 1)
    setTotal(good+neutral-bad)  
      }
  return (
    <div>
      <h1>give feedback</h1>
      <button onClick={handlegoodClick}>good</button>
      <button onClick={handleneutralClick}>neutral</button>
      <button onClick={handlebadClick}>bad</button>
      <h1>statistics</h1>
      <p>good {good}</p>
      <p>neutral {neutral}</p>
      <p>bad {bad}</p>
 
      <p>total {total}</p>
      <p>avarage {average}</p>
      <p>positive {positive} %</p>
         </div>
  )
}

export default App