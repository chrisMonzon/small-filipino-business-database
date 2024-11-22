import React, { useState, useEffect } from "react";
import SearchBarComponent from "./SearchBar_Component";
import Filter_Bar from "./Filter_Bar";
import SortComponent from "./SortComponent";
import CardComponent from "./Card_Component";
import { fetchBusinesses } from "./business";
import "./Main.css";

function Main() {
    const [filteredData, setFilteredData] = useState([]); // Dynamic data
    const [allBusinesses, setAllBusinesses] = useState([]); // All fetched data

    // Fetch businesses on mount
    useEffect(() => {
        fetchBusinesses()
            .then(data => {
                setAllBusinesses(data);
                setFilteredData(data); // Initially show all businesses
            })
            .catch(error => console.error("API error:", error));
    }, []);

    // Handle Search Query
    function printSearchQuery(query) {
        console.log("Query: ", query);
        let tempDatabase = allBusinesses.slice();
        tempDatabase.sort((a, b) => compareBuisnessesFromQuery(query, a, b));
        console.log("Sorted Database: ", tempDatabase);
        setFilteredData(tempDatabase);
    }

    return (
        <div>
            <SearchBarComponent onSendSearchQuery={printSearchQuery} />
            <div className="columnContainer">
                <div className="container">
                    <SortComponent />
                </div>
            </div>
            <div className="container">
                <Filter_Bar />
                <div className="cards">
                    {parseDatabase(filteredData)}
                </div>
            </div>
        </div>
    );
}

// Generate Cards from Fetched Data
function parseDatabase(database) {
    return database.map(business => (
        <CardComponent
            key={business.business_id}
            buisnessName={business.business_name}
            rating={business.rating || "N/A"} // Assuming rating exists or provide fallback
            description={business.description}
        />
    ));
}

// Compare Businesses for Sorting
function compareBuisnessesFromQuery(searchQuery, firstBuisness, secondBuisness) {
    let firstTitleFrequency = countFrequencyOfSubstring(searchQuery, firstBuisness.business_name);
    let secondTitleFrequency = countFrequencyOfSubstring(searchQuery, secondBuisness.business_name);

    if (firstTitleFrequency > secondTitleFrequency) {
        return -1;
    } else if (firstTitleFrequency < secondTitleFrequency) {
        return 1;
    }

    let firstDescFrequency = countFrequencyOfSubstring(searchQuery, firstBuisness.description);
    let secondDescFrequency = countFrequencyOfSubstring(searchQuery, secondBuisness.description);

    return secondDescFrequency - firstDescFrequency;
}

// Helper Function to Count Frequency
function countFrequencyOfSubstring(inputSubstring, toCount) {
    inputSubstring = inputSubstring.trim().toLowerCase();
    toCount = toCount.trim().toLowerCase();
    return toCount.split(inputSubstring).length - 1;
}

export default Main;