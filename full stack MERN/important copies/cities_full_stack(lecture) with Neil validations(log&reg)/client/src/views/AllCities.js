import React,{ useEffect, useState }  from 'react';
import axios from 'axios';
import { navigate, Link } from '@reach/router';
import LogoutButton from '../components/LogoutButton';


export default function AllCities() {
    const [cities, setCities] = useState(null)
    const [hasError, setHasError] = useState(false)

    useEffect(() => {
        axios.get('http://localhost:8000/api/cities', {
            withCredentials: true
        })
        .then(response => setCities(response.data))
        .catch(() => navigate('/login'))
    }, [])

    function handleDelete(id){
        axios.delete('http://localhost:8000/api/cities/' + id)
        .then(() => setCities(cities.filter(city => city._id != id)))
    }

    if(hasError) return 'something went wrong!';

    if (cities == null) return "Loading...";

    return (
        <div>
            <LogoutButton />
            <h1>All Cities</h1>
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Population</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                {cities.map(city => ( 

                    <tr key={city._id}>
                        <td><Link to={'/cities/' + city._id }>{city.name}</Link></td>
                        <td>{city.population}</td>
                        <td>
                            <button onClick={() => handleDelete(city._id)}>Delete</button>{' '}
                            <button onClick={() => navigate('/cities/' + city._id + '/edit')}>Edit</button>
                        </td>
                    </tr>

                ))}
                </tbody>
            </table>
        </div>
    )
}