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

// Komponent Content renderuje wszystkie części kursu przekazane jako tablica
const Content = ({ parts }) => {
  return (
    <div>
      {parts.map((p, index) => (
        <Part key={index} part={p} />
      ))}
    </div>
  )
}

// Komponent Total oblicza i wyświetla sumę wszystkich ćwiczeń
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
  // course jako obiekt zawierający nazwę kursu i tablicę części
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

  // Przekazanie nazwy kursu i tablicy części do podkomponentów
  return (
    <div>
      <Header course={course.name} />

      <Content parts={course.parts} />

      <Total parts={course.parts} />
    </div>
  )
}

export default App