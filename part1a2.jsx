// Komponent Header wyświetla nazwę kursu przekazaną przez props
const Header = (props) => {
  return (
    <h1>{props.course}</h1> 
  )
}

// Komponent Part wyświetla pojedynczą część kursu i liczbę ćwiczeń
const Part = (props) => {
  return (
    <p>
      {props.part} {props.exercises} 
    </p>
  )
}

// Komponent Content renderuje trzy komponenty Part, każdy z innymi danymi
const Content = (props) => {
  return (
    <div>
      <Part part={props.part1} exercises={props.exercises1} />
      <Part part={props.part2} exercises={props.exercises2} />
      <Part part={props.part3} exercises={props.exercises3} />
    </div>
  )
}

// Komponent Total oblicza i wyświetla sumę wszystkich ćwiczeń
const Total = (props) => {
  return (
    <p>
      Number of exercises {props.exercises1 + props.exercises2 + props.exercises3}
      
    </p>
  )
}

// Główny komponent aplikacji
const App = () => {
  const course = 'Half Stack application development'
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14

//przekazanie nazwy kursu, danych o częściach kursu i liczby ćwiczeń do odpowiadajacych im komponentów
  return (
    <div>
      <Header course={course} />

      <Content
        part1={part1} exercises1={exercises1}
        part2={part2} exercises2={exercises2}
        part3={part3} exercises3={exercises3}
      />

      <Total
        exercises1={exercises1}
        exercises2={exercises2}
        exercises3={exercises3}
      />
    </div>
  )
}

export default App
