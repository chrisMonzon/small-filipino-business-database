import "./SearchBar_Component.css";

function SearchBarComponent() {
    return(
        <div className="searchbar">
            <span class="search-icon material-symbols-outlined"></span>
            <input class="search-input" type="search" placeholder="Search Business"/>
        </div>
    );   
}

export default SearchBarComponent;

// I "borrowed" this guy's code: https://www.youtube.com/watch?v=f6ocDCkCmhM