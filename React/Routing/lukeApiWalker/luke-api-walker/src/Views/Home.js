import React, { useState } from 'react';
import axios from 'axios';
import { Router, Redirect, redirectTo, navigate } from '@reach/router'

function Home(props){
    const [searchFor, setSearchFor] = useState('people')
    const [number, setNumber] = useState(null)


    function createUrl(e){
        e.preventDefault()
        navigate(`/${searchFor}/${number}`)
    }


    return (
        <div>
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

export default Home;