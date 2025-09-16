/*
 * Class: SWE2511 - React Menu Filter
 * Name: Kaiden Pollesch
 * Class Section: 111
 * TypeSelect component
 */

import React from "react";

const TypeSelect = ({ onTypeChange}) => {
    return (
        <div className="filter-group">
            <label htmlFor="type-select">Filter by Type:</label>
            <select className="form-select" onChange={(e) => onTypeChange(e.target.value)}>
                <option value="">All</option>
                <option value="Burger">Burger</option>
                <option value="Chicken">Chicken</option>
                <option value="Side">Side</option>
                <option value="Dessert">Dessert</option>
                <option value="Seafood">Seafood</option>
                <option value="Salad">Salad</option>
                <option value="Dressing">Dressing</option>
            </select>
        </div>
    );
};

export default TypeSelect;