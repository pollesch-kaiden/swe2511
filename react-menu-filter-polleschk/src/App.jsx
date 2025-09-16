/*
 * Class: SWE2511 - React Menu Filter
 * Name: Kaiden Pollesch
 * Class Section: 111
 * App component
 */

import { useState } from 'react';
import FilterBar from "./FilterBar.jsx";
import MenuGrid from "./MenuGrid.jsx";
import Header from "./Header.jsx";
import Footer from "./Footer.jsx";

// Import layout to use the holy grail layout
import './layout.css';

const App = (props) => {
    // Setup state and any other functions needed by the application
    const [searchText, setSearchText] = useState("");
    const [selectedTags, setSelectedTags] = useState('');
    const [allergenFilter, setAllergenFilter] = useState({});

    const handleSearch = (text) => setSearchText(text.toLowerCase());
    const handleTypeChange = (type) => setSelectedTags(type);
    const handleAllergenChange = (allergen, isChecked) => {
        setAllergenFilter((prev) => ({ ...prev, [allergen]: isChecked }));
    };

    const filteredItems = props.menuItems.filter((item) => {
        const matchesSearch = item.name.toLowerCase().includes(searchText);
        const matchesType = selectedTags ? item.type === selectedTags : true;
        const matchesAllergen = Object.keys(allergenFilter).every(
            (allergen) => !allergenFilter[allergen] || !item[allergen]
        );
        return matchesSearch && matchesType && matchesAllergen;
    })

    // Return the rendered App using the holy grail layout
    return (
        <div className="HolyGrail">
            <Header />
            <div className="HolyGrail-nav">
                <FilterBar
                    onSearch={handleSearch}
                    onTypeChange={handleTypeChange}
                    onAllergenChange={handleAllergenChange}
                />
            </div>
            <div className="HolyGrail-content">
                <MenuGrid menuItems={filteredItems} />
            </div>
            <Footer />
        </div>
    );
};

export default App;
