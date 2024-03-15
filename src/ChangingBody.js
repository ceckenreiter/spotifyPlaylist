import React, { useState} from "react";
import "./ChangingBody.css"; 
import trackList from "./SpotifyAPI";
import Browse from "./Browse"; 


function ChangingBody () {
    const [display, setDisplay] = useState(<Browse />);
    const [searchInput, setSearchInput] = useState("");
    const [count, setCount] = useState(0); 
   
    const handleChange = (e) => {
        e.preventDefault();
        setSearchInput(e.target.value); 
    
    }; 
    const handleClick = (e) => {
        e.preventDefault()
        setCount((prevState) => prevState + 1);
       
        const result = trackList.filter((options) => options.artist === searchInput);

        setDisplay(
            <div>
                <p>Results for: {searchInput}</p>
                <div className='List'>
                    {result.map((option, index) => (
                            <div key={index}>
                                <span >{option.artist}</span>
                                <span>{option.song}</span>
                                <span>{option.album}</span>
                            </div>
                    ))}
                </div>
            </div>
        )
    }; 

 
    return (
        <div>
            <div>
                <form>
                    <input
                        id='SearchBar'
                        type="text"
                        value={searchInput}
                        onChange={handleChange}
                    />
                    <button onClick={handleClick}>{count}</button>
                </form>
            </div>
            <div>{display}</div>
        </div>
)
};  
 



export default ChangingBody; 