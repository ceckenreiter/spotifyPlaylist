import React from "react";
import SearchedResults from "./SearchedResults";




function SearchButton(props, display, setDisplay, searchInput) {

    const handleClick = (e) => {
        e.preventDefault();
        props.setDisplay(
            <SearchedResults 
                setDisplay={props.setDisplay}
                display = {props.display}
                searchInput={props.searchInput}
            /> 
            )
    }

    return (
        <button onClick={handleClick}>Search</button>
    )

}

export default SearchButton