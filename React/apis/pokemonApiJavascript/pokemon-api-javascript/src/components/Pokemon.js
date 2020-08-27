import React, {useState} from 'react';

function Pokemon(){
    const [info, setInfo] = useState(null)

    
    function getData(){
        fetch('https://pokeapi.co/api/v2/pokemon?limit=100&offset=200')
            .then(response => response.json())
            .then(response => setInfo(response.results))
            .catch(error => {console.log(error)})
    }
        
    
    
    if (info === null){
        return <button onClick={getData}>Get Pokemon Names</button>
    }

    return (
        <div>
        {info.map(result => 
        <li>{result.name}</li> )}

            <button onClick={getData}>Get Pokemon names</button>
        </div>
    )





}

export default Pokemon;