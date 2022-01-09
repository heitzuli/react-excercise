import {useState} from 'react';
import {Person} from "./types";
import PersonForm from "./PersonForm";

function Persons() {
    const [persons, setPersons] = useState<Person[]>([
        {firstName: "Molly", lastName: "Golightly", age: 24},
        {firstName: "George", lastName: "Weasly", age: 27}
    ])

    const addPerson = (person: Person) => { setPersons([...persons, person]) }

    const removePerson = (indexToRemove: number) => {
        setPersons(persons.filter((_, index) => index !== indexToRemove ))
    }

    return (
        <div className="Persons">
            <h1>Here's the people</h1>
            <div>{
                persons.map((person, index) =>
                    <li>{person.firstName} {person.lastName}, aged {person.age}
                        <button onClick={_ => removePerson(index)}>Remove</button>
                    </li>)
            }
            </div>
            <div>
                <PersonForm addPerson={addPerson}/>
            </div>
        </div>
    );
}

export default Persons;
