// Komponent Header wyświetla nazwę kursu (teraz otrzymuje cały obiekt course)
const Header = ({ course }) => {
  return (
    <h1>{course.name}</h1>
  )
}

// Komponent Part wyświetla pojedynczą część kursu i liczbę ćwiczeń
const Part = ({ name, exercises }) => {
  return (
    <p>
      {name} {exercises}
    </p>
  )
}

// Komponent Content renderuje wszystkie części kursu z tablicy parts
const Content = ({ parts }) => {
  return (
    <div>
      {parts.map((p, index) => (
        <Part key={index} name={p.name} exercises={p.exercises} />
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
  const course = {
    name: 'Half Stack application development',
    parts: [
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
  }

  return (
    <div>
      <Header course={course} />
      <Content parts={course.parts} />
      <Total parts={course.parts} />
    </div>
  )
}

export default App