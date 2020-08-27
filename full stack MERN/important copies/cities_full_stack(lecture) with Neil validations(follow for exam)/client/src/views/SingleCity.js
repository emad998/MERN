import React, {useEffect, useState} from 'react';
import axios from 'axios';

export default function SingleCity(props) {
    const [city, setCity] = useState(null);

    useEffect(() => {
        axios.get('http://localhost:8000/api/cities/' + props.id)
        .then(response => setCity(response.data));
    }, []);

    if (city == null) return 'Loading...'

    return (
        <div>
            <h1>{city.name}</h1>
            <p>Population: {city.population}</p>
            <p>mask? {city.maskMandate ? 'Yes' : 'No'}</p>
            <img src={city.imageUrl} alt={city.name} />

        </div>
    )
}