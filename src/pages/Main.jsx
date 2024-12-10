import React, { useState, useEffect } from "react";
import SearchBarComponent from "../features/searching/SearchBar_Component.jsx";
import Filter_Bar from "../features/filtering/Filter_Bar.jsx";
import SortComponent from "../features/sorting/SortComponent";
import CardComponent from "../components/Card_Component";
import { fetchBusinesses } from "../lib/business";
import "../assets/Main.css";
import KMPSearch from "../util/KMPSearch"

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

function compareBuisnessesFromQuery(searchQuery, firstBuisness, secondBuisness) {
    let firstTitleFrequency = KMPSearch.kmpSearch(searchQuery, firstBuisness.buissness_name);
    let secondTitleFrequency = KMPSearch.kmpSearch(searchQuery, secondBuisness.buisness_name);

    if (firstTitleFrequency > secondTitleFrequency) {
        return -1;
    } else if (firstTitleFrequency < secondTitleFrequency) {
        return 1;
    }

    let firstDescFrequency = KMPSearch.kmpSearch(searchQuery, firstBuisness.description);
    let secondDescFrequency = KMPSearch.kmpSearch(searchQuery, secondBuisness.description);

    return secondDescFrequency - firstDescFrequency;
}

export default Main;