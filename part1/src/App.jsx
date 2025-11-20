// Komponent header ktory przyjmuje obiekt course jako props i wyswietla jego nazwe
const Header = (props) => {
  return <h1>{props.course.name}</h1>;
};

// Komponent part pojedynczej części kursu
const Part = (props) => {
  return (
    <p>
      {props.part.name} {props.part.exercises}
    </p>
  );
};

// Komponent content – renderuje wszystkie części z obiektu course.parts
const Content = (props) => {
  return (
    <div>
      <Part part={props.course.parts[0]} />
      <Part part={props.course.parts[1]} />
      <Part part={props.course.parts[2]} />
    </div>
  );
};

// Komponent total dodaje liczbę ćwiczeń
const Total = (props) => {
  return (
    <p>
      Number of exercises{" "}
      {props.course.parts[0].exercises +
        props.course.parts[1].exercises +
        props.course.parts[2].exercises}
    </p>
  );
};

// Główny komponent aplikacji zawierajacy mazwe kursu i tablice z czesciami
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
//renderuje Header, Content i Total przekazujac im obiekt course jako props
  return (
    <div>
      <Header course={course} />
      <Content course={course} />
      <Total course={course} />
    </div>
  )
}

export default App;
