import React, {useEffect, useState} from "react";
import '../css/Browse.css'
import ViewButton from '../buttons/ViewButton' 

function Browse (props, setThisHREF, state, setDisplay) {

    
    return (
        <div>
            <div id='browse'>
                <h1>Browse</h1>
                <div className="options">
                    {props.state.map((item, index) => (
                            <div key={index}>
                               <p>{item.name}</p>
                               <ViewButton 
                                    setThisHREF={props.setThisHREF}
                                    href={item.href}
                                    number={2}
                                    setDisplay={props.setDisplay}
                                />
                            </div>
                        ))}  
                </div>
            </div>
        </div>
    ); 
}; 

export default Browse; 


