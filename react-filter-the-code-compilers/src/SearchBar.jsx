/*
 * Class: SWE2511 - React Filter
 * Names: Kaiden Pollesch, Matthew Schulz
 * Section: 111
 * App component
 */

import React from "react";

// SearchBar component
const SearchBar = ({ onSearchChange }) => {
    const handleChanged = (event) => {
        onSearchChange(event.target.value);
    }

    return  (
        <input
            type="text"
            className="form-control"
            placeholder="Search..."
            onChange={handleChanged}
        />
    );
}

export default SearchBar;