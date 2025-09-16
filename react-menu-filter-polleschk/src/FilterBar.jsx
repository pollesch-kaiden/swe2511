/*
 * Class: SWE2511 - React Menu Filter
 * Name: Kaiden Pollesch
 * Class Section: 111
 * FilterBar component
 */

import React from 'react';
import SearchBar from './SearchBar';
import TypeSelect from './TypeSelect.jsx';
import AllergenSelect from './AllergenSelect.jsx'

const FilterBar = ({ onSearch, onTypeChange, onAllergenChange}) => {
    return (
        <div className="filter-bar">
            <SearchBar onSearch={onSearch}/>
            <TypeSelect onTypeChange={onTypeChange} className="form-select"/>
            <AllergenSelect onAllergenChange={onAllergenChange}/>
        </div>
    );
};

export default FilterBar;