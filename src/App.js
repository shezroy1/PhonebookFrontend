import React, { useState, useEffect } from "react";
import axios from "axios";
import Search from "./search";
import AllPeople from "./allpeople";

const baseURL = "/api/persons";

const App = () => {
    const [persons, setPersons] = useState([]);
    const [newName, setNewName] = useState("");
    const [newNumber, setNewNumber] = useState("");

    useEffect(() => {
        axios.get(baseURL).then(res => {
            setPersons(res.data);
        });
    }, []);

    const handleSubmit = e => {
        e.preventDefault();
        var flag = false;

        persons.forEach(e => {
            if (e.name === newName) {
                flag = true;
            }
        });

        axios
            .get(baseURL)
            .then(res => res.data)
            .then(res => {
                const newId = res.length + 1;
                var newPerson = {
                    name: newName,
                    number: newNumber,
                    id: newId
                };

                flag
                    ? window.alert(`${newName} already exists.`)
                    : setPersons(persons.concat(newPerson));

                axios.post(baseURL, newPerson);
            });
    };

    return (
        <div>
            <h1> Phonebook </h1> <Search persons={persons} />
            <form>
                <div>
                    name:
                    <input
                        value={newName}
                        onChange={({ target }) => setNewName(target.value)}
                    />
                </div>
                <div>
                    number:
                    <input
                        value={newNumber}
                        onChange={({ target }) => setNewNumber(target.value)}
                    />
                </div>
                <div>
                    <button type="submit" onClick={handleSubmit}>
                        add
                    </button>
                </div>
            </form>
            <AllPeople persons={persons} setPersons={setPersons} />
        </div>
    );
};
export default App;
