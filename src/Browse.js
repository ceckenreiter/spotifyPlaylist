import React from "react";
import './css/Browse.css'

function Browse () {

    const Options = [
        {genre:'Pop'},
        {genre:'Funk'}, 
        {genre: 'early 80s'}, 
        {genre: 'Classic Rock'}, 
        {genre: 'Blues & Jazz'},
        {genre: 'Indie'},
        {genre: 'Early 90'},
        {genre: 'Classical'},
        
    ]; 

    return (
        <div>
            <div id='browse'>
                <h1>Browse</h1>
                <div className="options">
                    {Options.map((option, index) => (
                        <div key={index}>
                            <p><a>{option.genre}</a></p>
                        </div>
                    ))}  
                </div>
            </div>
        </div>
    ); 
}; 

export default Browse; 
