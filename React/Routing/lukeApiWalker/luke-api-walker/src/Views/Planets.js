import React, {useState, useEffect} from "react";
import axios from 'axios';
import { Router, Redirect, redirectTo, navigate } from '@reach/router'

function Planets(props){
    const [info, setInfo] = useState([])
    const [searchFor, setSearchFor] = useState('people')
    const [number, setNumber] = useState(null)

    
    useEffect(()=>{
        axios.get(`https://swapi.dev/api/planets/${props.id}`)
            .then(response => {setInfo(response.data)})
            .catch(console.log)
            
    }, []); 

    function createUrl(e){
        e.preventDefault()
        navigate(`/${searchFor}/${number}`)
    }


    return (
        <div>
        <p>{info.name}</p>
        <p>Climate: {info.climate}</p>
        <p>Terrain: {info.terrain}</p>
        <p>Surface water: {info.surface_water}</p>
        <p>Population: {info.population}</p>

        <form onSubmit={ createUrl }>
            <div>
                <label>Search For: </label> 
                    <select name="searchFor" onChange={ (e) => setSearchFor(e.target.value)}>
                    <option value="people">People</option>
                    <option value="planets">Planets</option>
                    <option value="starships">Starships</option>
                    
                    </select>
            </div>
            <div>
                <label>ID </label> 
                <input type="text" name="number" onChange={ (e) => setNumber(e.target.value) } />
            </div>
            
            <input type="submit" value="Create Url" />
        </form>
        </div>
    )


}


export default Planets