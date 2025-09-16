/*
 * Class: SWE2511 - React Menu Filter
 * Name: Kaiden Pollesch
 * Class Section: 111
 * SearchBar component
 */

import React from 'react';

const SearchBar = ({ onSearch }) => {
    return (
        <div className="input-group mb-3" >
            <div className="input-group-prepend">
                <span className="input-group-text" id="basic-addon1"><i className="bi bi-search"></i></span>
            </div>
            <input
                type="text"
                className="form-control"
                placeholder="Search by Menu Item"
                onChange={(e) => onSearch(e.target.value)}
            />
        </div>
    );
};

export default SearchBar;