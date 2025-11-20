//komponent header przyjmuje wartosc course
const Header = (props) => {
  return <h1>{props.course}</h1>;
};
//komponent part przyjmuje wartosci part i exercises
const Part = (props) => {
  return (
    <p>
      {props.part} {props.exercises}
    </p>
  );
};
//komponent content przyjmuje tablice parts i przekazuje odpowiednie wartosci do komponentu part
const Content = (props) => {
  return (
    <div>
      <Part part={props.parts[0].name} exercises={props.parts[0].exercises} />
      <Part part={props.parts[1].name} exercises={props.parts[1].exercises} />
      <Part part={props.parts[2].name} exercises={props.parts[2].exercises} />
    </div>
  );
};
//komponent total przyjmuje tablice parts i sumuje wartosci exercises
const Total = (props) => {
  return (
    <p>
      Number of exercises{" "}
      {props.parts[0].exercises +
        props.parts[1].exercises +
        props.parts[2].exercises}
    </p>
  );
};
//glowny komponent app zawierajacy nazwe kursu i tablice parts
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
//renderuje komponenty Header, Content i Total przekazujac im odpowiednie propsy
  return (
    <div>
      <Header course={course} />
      <Content parts={parts} />
      <Total parts={parts} />
    </div>
  )
}

export default App;