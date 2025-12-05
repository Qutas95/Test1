import { useState } from 'react'
const Button = ({ handleClick, text }) => (
  <button onClick={handleClick}>
    {text}
  </button>
)
const StatisticLine = ({ text, value }) => (
  <tr>
    <td>{text}</td>
    <td>{value}</td>
  </tr>
)
const Statistics = (props) => {
  const { good, neutral, bad } = props
  const total = good + neutral + bad
  const average = total === 0 ? 0 : ((good - bad) / total)
    const positive = total === 0 ? 0 : ((good / total) * 100)
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
          <table>


                <tbody>


                    <StatisticLine text="good" value={good} />
                    <StatisticLine text="neutral" value={neutral} />
                    <StatisticLine text="bad" value={bad} />
                    <StatisticLine text="total" value={total} />
                    <StatisticLine text="average" value={average} />
                    <StatisticLine text="positive" value={positive + " %"} />
                </tbody>
            </table>
        </>
    )
}
const App = () => {
  const [neutral, setNeutral] = useState(0)

  const [bad, setBad] = useState(0)

  const handlegoodClick = () => setGood(good + 1)


  const handleneutralClick = () => setNeutral(neutral + 1)


  const handlebadClick = () => setBad(bad + 1)



  return (

    <div>

      <h1>give feedback</h1>


      <Statistics good={good} neutral={neutral} bad={bad} />

    </div>

  )

}





export default App