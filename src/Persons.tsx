import {useState} from 'react';
import {Person} from "./types";

function Persons() {
    const [persons] = useState<Person[]>([
        {firstName: "Molly", lastName: "Golightly", age: 24},
        {firstName: "George", lastName: "Weasly", age: 27}
    ])

    return (
        <div className="Persons">
            <h1>Here's the people</h1>
            <div>{
                persons.map(person => <li>{person.firstName} {person.lastName}, aged {person.age}</li>)}
            </div>
        </div>
    );
}

export default Persons;
