import React from "react";
import axios from "axios";

const baseURL = "/api/persons";

const AllPeople = ({ persons, setPersons }) => {
    const deletePerson = (name, id) => {
        if (window.confirm(`Delete ${name}`)) {
            axios
                .delete(`${baseURL}/${id}`)
                .then(
                    setPersons(persons.filter(person => person.name !== name))
                );
        }
    };

    return (
        <div>
            <h2> Numbers </h2>{" "}
            {persons.map(e => {
                return (
                    <React.Fragment key={e.name}>
                        <ul key={e.name}>
                            {" "}
                            {e.name} {e.number}{" "}
                            <button onClick={() => deletePerson(e.name, e.id)}>
                                delete{" "}
                            </button>{" "}
                        </ul>{" "}
                    </React.Fragment>
                );
            })}{" "}
        </div>
    );
};

export default AllPeople;
