import { useState } from 'react'


const Statistics = (props) => {
    const { good, neutral, bad } = props
    const total = good + neutral + bad
    const average = total === 0 ? 0 : (good - bad) / total
    const positive = total === 0 ? 0 : (good / total) * 100

  
    if (total === 0) {
      return (
          <>
              <h1>Statistics</h1>
              <p>No feedback given</p>
          </>
      )
  }

  return (
      <>
          <h1>Statistics</h1>
          <p>good {good}</p>
          <p>neutral {neutral}</p>
          <p>bad {bad}</p>
          <p>total {total}</p>
          <p>average {average}</p>
          <p>positive {positive} %</p>
      </>
  )
}


const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const handlegoodClick = () => {
    setGood(good + 1)
  }

  const handleneutralClick = () => {
    setNeutral(neutral + 1)
  }

  const handlebadClick = () => {
    setBad(bad+ 1)
  }

  return (
    <div>
      <h1>give feedback</h1>
      <button onClick={handlegoodClick}>good</button>
      <button onClick={handleneutralClick}>neutral</button>
      <button onClick={handlebadClick}>bad</button>
      
      <Statistics good={good} neutral={neutral} bad={bad} />
    </div>
  )
}

export default App





