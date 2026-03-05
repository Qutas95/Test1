import { useState } from 'react'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas' }
  ]) 
  const [newName, setNewName] = useState('')

  //Funkcja obsługująca zmianę w polu input
  const handleNameChange = (event) => {
    setNewName(event.target.value)
  }

const addPerson = (event) => {
  event.preventDefault()

  //Sprawdzamy, czy imię już istnieje w tablicy persons
  // Metoda .some() zwraca true, jeśli przynajmniej jeden element spełnia warunek
  const nameExists = persons.some(person => person.name === newName)

  if (nameExists) {
    //Jeśli imię istnieje, wyświetlamy alert z użyciem template string
    alert(`${newName} is already added to phonebook`)
    return // Przerywamy funkcję, żeby nie dodać duplikatu
  }

  //Jeśli imię jest nowe, dodajemy je tak jak wcześniej
  const personObject = {
    name: newName
  }

  setPersons(persons.concat(personObject))
  setNewName('')
}

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={addPerson}>
        <div>
          name: <input value={newName} onChange={handleNameChange} />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      
      <h2>Numbers</h2>
      <ul>
        {persons.map(person => 
          <li key={person.name}>{person.name}</li>
        )}
      </ul>
    </div>
  )
}

export default App