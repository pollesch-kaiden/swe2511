/*
 * Class: SWE2511 - React Filter
 * Names: Kaiden Pollesch, Matthew Schulz
 * Section: 111
 * App component
 */

import React from "react";

// CapitalFilter component
const CapitalFilter = ({ onFilterChange }) => {
    const handleChanged = (event) => {
        onFilterChange(event.target.checked);
    }

    return  (
        <div>
            <input
                type="checkbox"
                className="form-check-input"
                id="capitalFilter"
                onChange={handleChanged}
            />
            <label className="form-check-label" htmlFor="capitalFilter">
                Capitalized Words Only
            </label>
        </div>
    );
}

export default CapitalFilter;