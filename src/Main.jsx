import CardComponent from "./Card_Component"
import Filter_Bar from "./Filter_Bar";
import SearchBarComponent from "./SearchBar_Component";
import "./Main.css";
import React, { useState } from "react";

let testDatabase = [
    { buisnessName: "Bob's Burgers", rating: 4.5, description: "A burger joint that sells burgers." },
    { buisnessName: "Freddy Fazbear's Pizza", rating: 3.2, description: "A pizza joint with animatronics." },
    { buisnessName: "Chick-fil-a", rating: 4.8, description: "A fast food chain specializing in chicken." },
    { buisnessName: "McDonald's", rating: 2.3, description: "A global fast food chain with burgers and fries." },
    { buisnessName: "Taco Bell", rating: 3.8, description: "Mexican-inspired fast food restaurant." },
    { buisnessName: "Wendy's", rating: 3.7, description: "Fast food chain with square burgers." },
    { buisnessName: "Subway", rating: 4.1, description: "Fast food chain specializing in custom sandwiches." },
    { buisnessName: "Pizza Hut", rating: 4.2, description: "Famous for pizza and pasta dishes." },
    { buisnessName: "KFC", rating: 4.0, description: "Fast food chain with fried chicken as their main product." },
    { buisnessName: "Starbucks", rating: 4.5, description: "Coffeehouse chain with beverages and pastries." },
    { buisnessName: "Burger King", rating: 3.9, description: "Fast food chain known for its flame-grilled burgers." },
    { buisnessName: "Dunkin' Donuts", rating: 4.3, description: "Coffee and baked goods chain." },
    { buisnessName: "Chipotle", rating: 4.4, description: "Fast casual restaurant serving burritos and tacos." },
    { buisnessName: "Domino's Pizza", rating: 4.0, description: "Pizza delivery chain with a wide menu." },
    { buisnessName: "Five Guys", rating: 4.6, description: "Fast food restaurant specializing in burgers and fries." },
    { buisnessName: "In-N-Out Burger", rating: 4.7, description: "West Coast burger chain famous for fresh ingredients." },
    { buisnessName: "Panera Bread", rating: 4.2, description: "Casual restaurant with sandwiches, soups, and salads." },
    { buisnessName: "Shake Shack", rating: 4.5, description: "Modern day 'roadside' burger stand." },
    { buisnessName: "Raising Cane's", rating: 4.6, description: "Fast food chain known for chicken tenders and fries." },
    { buisnessName: "Jack in the Box", rating: 3.5, description: "Fast food chain offering a variety of menu options." },
    { buisnessName: "Arby's", rating: 4.0, description: "Fast food restaurant specializing in roast beef sandwiches." },
    { buisnessName: "Popeyes", rating: 4.4, description: "Southern-style fast food chain known for fried chicken." },
    { buisnessName: "Sonic Drive-In", rating: 3.9, description: "Fast food chain serving burgers, hot dogs, and shakes." },
    { buisnessName: "Baskin-Robbins", rating: 4.3, description: "Ice cream parlor chain with over 31 flavors." },
    { buisnessName: "Cold Stone Creamery", rating: 4.2, description: "Ice cream chain known for custom mixing of ingredients." },
    { buisnessName: "The Cheesecake Factory", rating: 4.6, description: "Chain known for decadent cheesecakes and extensive menu." },
    { buisnessName: "Texas Roadhouse", rating: 4.5, description: "Casual dining chain famous for its steak and bread." },
    { buisnessName: "Outback Steakhouse", rating: 4.1, description: "Casual dining chain offering steak and Australian-themed dishes." },
    { buisnessName: "Olive Garden", rating: 3.9, description: "Italian-themed chain restaurant with pasta and breadsticks." },
    { buisnessName: "Red Lobster", rating: 4.2, description: "Seafood restaurant known for its lobsters and shrimp." },
    { buisnessName: "Cheddar's Scratch Kitchen", rating: 4.3, description: "American casual dining chain offering comfort foods." },
    { buisnessName: "Buffalo Wild Wings", rating: 4.0, description: "Sports bar chain known for wings and beer." },
    { buisnessName: "Hooters", rating: 3.8, description: "Casual dining chain known for wings and its servers." },
    { buisnessName: "Wingstop", rating: 4.4, description: "Restaurant specializing in chicken wings with various flavors." },
    { buisnessName: "The Habit Burger Grill", rating: 4.1, description: "Burger joint known for fresh grilled burgers." },
    { buisnessName: "Whataburger", rating: 4.7, description: "Texas-based fast food chain famous for its burgers." },
    { buisnessName: "Jimmy John's", rating: 3.6, description: "Sandwich chain known for fast delivery." },
    { buisnessName: "Einstein Bros. Bagels", rating: 4.2, description: "Bagel chain offering a variety of bagels and spreads." },
    { buisnessName: "Jersey Mike's", rating: 4.3, description: "Sub sandwich chain known for fresh sliced meats." },
    { buisnessName: "Noodles & Company", rating: 4.0, description: "Casual dining chain serving pasta and noodle dishes." },
    { buisnessName: "Smashburger", rating: 4.0, description: "Chain offering burgers, fries, and shakes." },
    { buisnessName: "Zaxby's", rating: 4.3, description: "Fast food chain specializing in chicken tenders and salads." },
    { buisnessName: "Culver's", rating: 4.2, description: "Midwestern chain serving burgers and frozen custard." },
    { buisnessName: "Blaze Pizza", rating: 4.3, description: "Build-your-own pizza chain with fast-casual service." },
    { buisnessName: "Little Caesars", rating: 3.7, description: "Fast pizza chain known for hot and ready pizzas." },
    { buisnessName: "Papa John's", rating: 4.0, description: "Pizza chain known for its garlic butter crust." },
    { buisnessName: "Marco's Pizza", rating: 4.2, description: "Pizza chain offering fresh, high-quality ingredients." },
    { buisnessName: "Papa Murphy's", rating: 3.9, description: "Take-and-bake pizza chain known for its fresh ingredients." },
    { buisnessName: "Round Table Pizza", rating: 4.1, description: "Pizza restaurant known for its premium pizzas and fresh ingredients." },
    { buisnessName: "Lenny's Grill & Sub", rating: 4.0, description: "Casual dining chain specializing in sub sandwiches." }
] 




function Main() {
    const [filteredData, setFilteredData] = useState(testDatabase);

    function printSearchQuery(query) {
        console.log("Query: ", query);

        let tempDatabase = testDatabase.slice();
        
        tempDatabase.sort((a, b) => compareBuisnessesFromQuery(query, a, b));
        console.log("Sorted Database: ", tempDatabase);
        setFilteredData(tempDatabase);
    }

    return (
        <div>
            <SearchBarComponent onSendSearchQuery={printSearchQuery}/>
            <div className="container">
                <Filter_Bar />
                <div className="cards">
                    {parseDatabase(filteredData)}
                </div>
            </div>
        </div>
    );
}

function parseDatabase(database) {
    let cards = [];
    for (let i = 0; i < database.length; i++) {
        cards.push(<CardComponent 
                buisnessName={database[i].buisnessName} 
                rating={database[i].rating} 
                description={database[i].description}
            />);
    }
    return cards;
}



function compareBuisnessesFromQuery(searchQuery, firstBuisness, secondBuisness) {
    let firstTitleFrequency = countFrequencyOfSubstring(searchQuery, firstBuisness.buisnessName);
    let secondTitleFrequency = countFrequencyOfSubstring(searchQuery, secondBuisness.buisnessName);

    if (firstTitleFrequency > secondTitleFrequency) {
        return -1;
    } else if (firstTitleFrequency < secondTitleFrequency) {
        return 1;
    }

    let firstDescFrequency = countFrequencyOfSubstring(searchQuery, firstBuisness.description);
    let secondDescFrequency = countFrequencyOfSubstring(searchQuery, secondBuisness.description);

    if (firstDescFrequency > secondDescFrequency) {
        return -1;
    } else if (firstDescFrequency < secondDescFrequency) {
        return 1;
    }

    let firstRating = firstBuisness.rating;
    let secondRating = secondBuisness.rating;

    if (firstRating > secondRating) {
        return -1;
    } else if (firstRating < secondRating) {
        return 1;
    }

    return 0;
}

function countFrequencyOfSubstring(inputSubstring, toCount) {
    inputSubstring = inputSubstring.trim().toLowerCase();
    toCount = toCount.trim().toLowerCase();
    let inputSubstringLen = inputSubstring.length;
    let toCountLen = toCount.length;
    let end = toCountLen - inputSubstringLen + 1;
    if (end < 0) return 0;
    let ret_val = 0

    for (let i = 0 ; i < end; i++) {
        let toCompare = toCount.substring(i, i + inputSubstringLen);
        if (toCompare === inputSubstring) ret_val++;
    }

    return ret_val;
}


export default Main;