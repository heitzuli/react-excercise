import {useState} from 'react';
import {Person} from "./types";
import PersonForm from "./PersonForm";

function Persons() {
    const [persons, setPersons] = useState<Person[]>([
        {firstName: "Molly", lastName: "Golightly", age: 24},
        {firstName: "George", lastName: "Weasly", age: 27}
    ])

    const addPerson = (person: Person) => { setPersons([...persons, person]) }

    return (
        <div className="Persons">
            <h1>Here's the people</h1>
            <div>{
                persons.map(person => <li>{person.firstName} {person.lastName}, aged {person.age}</li>)}
            </div>
            <div>
                <PersonForm addPerson={addPerson}/>
            </div>
        </div>
    );
}

export default Persons;
