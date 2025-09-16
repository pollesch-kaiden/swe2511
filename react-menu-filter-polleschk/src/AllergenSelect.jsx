/*
 * Class: SWE2511 - React Menu Filter
 * Name: Kaiden Pollesch
 * Class Section: 111
 * AllergenSelect component
 */

import React from "react";

const allergens = [
    'milk', 'egg', 'fish', 'shellfish', 'treeNut', 'peanut', 'gluten', 'soy', 'sesame'
];

const AllergenSelect = ({ onAllergenChange }) => {
    const capitalize = (str) => {
        return str.charAt(0).toUpperCase() + str.slice(1) + " Free";
    }

    return (
        <div className="filter-group">
            <label htmlFor="allergen-select">Filter by Allergen:</label>
            {allergens.map((allergen) => (
                <div className="form-check form-switch" key={allergen}>
                    <input
                        className="form-check-input"
                        type="checkbox"
                        role={"switch"}
                        id={allergen}
                        onChange={(e) => onAllergenChange(allergen, e.target.checked)}
                    />
                    <label htmlFor={allergen}>{capitalize(allergen)}</label>
                </div>
            ))}
        </div>
    );
};

export default AllergenSelect;