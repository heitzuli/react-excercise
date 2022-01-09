import React, {useState} from "react";
import {Person} from "./types";

    // How on earth does this work? Found on stakoverflow.
    const PersonForm = ({ addPerson }: {addPerson: (person: Person) => void}) => {

    const [firstName, setFirstName] = useState<string>('');
    const [lastName, setLastName] = useState<string>('');
    const [age, setAge] = useState<string>(''); // Using string, so we can clear the text field (instead of 0)

    const clearForm = () => {
        setFirstName('')
        setLastName('')
        setAge('')
    }

    const submit = (event: React.SyntheticEvent) => {
        event.preventDefault(); // Don't try to submit to any page
        const person: Person = {firstName, lastName, age: +age }; // probably need to use different name for age
        addPerson(person);
        clearForm();
    }

    return (
        <div className="PersonForm">
            <form onSubmit={submit}>
                <label>
                    First name <input type="text" value={firstName} onChange={event => setFirstName(event.target.value)}/>
                </label>
                <label>
                    Last name <input type="text" value={lastName} onChange={event => setLastName(event.target.value)}/>
                </label>
                <label>
                    Age <input type="text" value={age} onChange={event => setAge(event.target.value)}/>
                </label>
                <button type="submit">Add person</button>
            </form>
        </div>
    );
}

export default PersonForm;
