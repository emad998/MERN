import React, {useState, useEffect} from "react";
import axios from 'axios';
import { Router, Redirect, redirectTo, navigate } from '@reach/router'


function People(props){
    const [info, setInfo] = useState([])
    const [searchFor, setSearchFor] = useState('people')
    const [number, setNumber] = useState(null)
    
    useEffect(()=>{
        axios.get(`https://swapi.dev/api/people/${props.id}`)
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
        <p>Height: {info.height} cm</p>
        <p>Mass: {info.mass} kg</p>
        <p>Hair Color: {info.hair_color}</p>
        <p>Skin color: {info.skin_color}</p>


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


export default People