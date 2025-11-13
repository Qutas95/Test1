// Komponent Header wyświetla nazwę kursu przekazaną przez props
const Header = ({ course }) => {
  return (
    <h1>{course}</h1>
  )
}

// Komponent Part wyświetla pojedynczą część kursu i liczbę ćwiczeń
const Part = ({ part }) => {
  return (
    <p>
      {part.name} {part.exercises}
    </p>
  )
}

// Komponent Content renderuje wszystkie części kursu z tablicy parts
const Content = ({ parts }) => {
  return (
    <div>
      {parts.map((p, index) => (
        <Part key={index} part={p} />
      ))}
    </div>
  )
}

// Komponent Total oblicza i wyświetla sumę wszystkich ćwiczeń z tablicy parts
const Total = ({ parts }) => {
  const total = parts.reduce((sum, part) => sum + part.exercises, 0)
  return (
    <p>
      Number of exercises {total}
    </p>
  )
}

// Główny komponent aplikacji
const App = () => {
  const course = 'Half Stack application development'
  const parts = [
    {
      name: 'Fundamentals of React',
      exercises: 10
    },
    {
      name: 'Using props to pass data',
      exercises: 7
    },
    {
      name: 'State of a component',
      exercises: 14
    }
  ]

  return (
    <div>
      <Header course={course} />
      <Content parts={parts} />
      <Total parts={parts} />
    </div>
  )
}

export default App