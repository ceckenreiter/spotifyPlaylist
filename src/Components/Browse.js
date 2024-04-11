import React, {useEffect, useState} from "react";
import '../css/Browse.css'
import ViewButton from '../buttons/ViewButton' 
import PlaylistView from './PlaylistView'

function Browse (props, display, setDisplay) {

    let token = (window.localStorage.getItem("token"))

    const [state, setState] = useState([])

    const handleClick = (e) => {
        e.target.preventDefault()
    }

    useEffect(() => {
        let token = window.localStorage.getItem('token')
        var authParam = {
            method: 'GET', 
            headers: {
                Authorization: `Bearer ${token}`,
                "Content-Type": "application/x-www-form-urelencoded"
            },
        }
    
        fetch("https://api.spotify.com/v1/browse/categories", authParam)
        .then(response => response.json())
        .then(result => { 
          setState(result.categories.items)
          console.log(state)
            
        })
        .catch(error => console.log(error))
        }, [])

    
    return (
        <div>
            <div id='browse'>
                <h1>Browse</h1>
                <div className="options">
                    {state.map((item, index) => (
                            <div key={index}>
                               <p>{item.name}</p>
                               <ViewButton 
                                    value={item.href} 
                                    name={item.name}
                                    number={2}
                                    display={props.display}
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


