/*
 * Class: SWE2511 - React Filter
 * Names: Kaiden Pollesch, Matthew Schulz
 * Section: 111
 * App component
 */

import { useState } from 'react';
import SearchBar from "./SearchBar";
import TextDisplay from "./TextDisplay";
import CapitalFilter from "./CapitalFilter";

const App = (props) => {

    const [searchString, setSearchString] = useState("");
    const [capitalFilter, setCapitalFilter] = useState(false);

    // Search event handler - called when text for the
    //    search field is changed
    const onSearchChanged = (newSearchString) => {
        // Set the state for the new string filter
        //   this will cause a re-render of the App
        setSearchString(newSearchString);
    }

    // Capital filter event handler - called when the
    //    capital filter checkbox is changed
    const onFilterChanged = (isChecked) => {
        setCapitalFilter(isChecked);
    }

    // Filter the words based on the current search text
    const words = props.text.split(" ");
    const filteredWords = words.filter((word) => {
        const matchesSearch = word.toLowerCase().includes(searchString.toLowerCase());
        const matchesCapital = !capitalFilter || /^[A-Z]/.test(word);
        return matchesSearch && matchesCapital;
    });
    const filteredString = filteredWords.join(" ");

    // Return the rendered App
    return (
        <div className="m-3">
            <CapitalFilter onFilterChange={onFilterChanged} />
            <SearchBar onSearchChange={onSearchChanged} />
            <TextDisplay text={filteredString} />
        </div>
    );
};

export default App;
