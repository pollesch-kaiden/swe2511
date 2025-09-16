/*
 * Class: SWE2511 - React Menu Filter
 * Name: Kaiden Pollesch
 * Class Section: 111
 * MenuItem component
 */

import React from "react";

const MenuItem = ({ item }) => {
    const capitalize = (str) => {
        return str.charAt(0).toUpperCase() + str.slice(1);
    }

    return (
        <div className="card">
            <div className="card-body">
                <h5 className="card-title">{item.name}</h5>
                <p className="card-text">Type: {item.type}</p>
                {/*If there are no allergens, do not display the "Allergens" section*/}
                {Object.keys(item).filter(key => key !== "name" && key !== "type" && item[key]).length > 0 && (
                    <>
                        <p className="card-text">Allergens:</p>
                        <ul>
                            {Object.keys(item).map((key) => (
                                key !== "name" && key !== "type" && item[key] && (
                                    <span key={key} className="badge bg-primary me-1">
                                        {capitalize(key)}
                                    </span>
                                )
                            ))}
                        </ul>
                    </>
                )}
            </div>
        </div>
    )
}

export default MenuItem;