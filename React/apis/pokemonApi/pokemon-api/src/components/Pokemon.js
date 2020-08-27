import React, {useEffect, useState} from 'react';
import axios from 'axios'

function Pokemon(){
    const [info, setInfo] = useState(null)

    
        
        function getNames(){

            axios.get('https://pokeapi.co/api/v2/pokemon?limit=800&offset=200')
                .then(response => setInfo(response.data.results))
                .catch(console.log)

        }
    
    
        
  

    if (info === null){
        return   <button onClick={getNames}>Get Pokemon names</button>;
    }

    return <div>
        {info.map(result => (
        <li>{result.name}</li> )}

            <button onClick={getNames}>Get Pokemon names</button>
        </div>
}

export default Pokemon;