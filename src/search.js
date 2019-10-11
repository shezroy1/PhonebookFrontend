import React, { useState } from "react";

const Search = ({ persons }) => {
    const [search, setSearch] = useState("");

    return (
        <div>
            <div>
                filter shown with:
                <input
                    value={search}
                    onChange={({ target }) => setSearch(target.value)}
                />
            </div>

            {search === ""
                ? null
                : persons
                      .filter(e =>
                          e.name.toUpperCase().includes(search.toUpperCase())
                      )
                      .map(e => {
                          return <ul key={e.name}>{e.name}</ul>;
                      })}
        </div>
    );
};

export default Search;
