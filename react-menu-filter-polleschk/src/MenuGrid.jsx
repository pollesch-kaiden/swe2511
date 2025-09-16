/*
 * Class: SWE2511 - React Menu Filter
 * Name: Kaiden Pollesch
 * Class Section: 111
 * MenuGrid component
 */

import React from "react";
import MenuItem from "./MenuItem";

const MenuGrid = ({ menuItems }) => {
    return (
        <div className="container">
            <div className="row d-flex flex-wrap">
                {menuItems.map((item) => (
                    <div key={item.name} className="col-md-4 mb-4 d-flex">
                        <MenuItem key={item.name} item={item} />
                    </div>
                ))}
            </div>
        </div>
    );
}

export default MenuGrid;