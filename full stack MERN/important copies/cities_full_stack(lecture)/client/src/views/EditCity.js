import React, {useEffect, useState} from 'react';
import axios from 'axios';
import {navigate} from '@reach/router';

export default function EditCity({ id }){
    const [isLoading, setIsLoading] = useState(true)
    const [name, setName] = useState('')
    const [population, setPopulation] = useState('')
    const [imageUrl, setImageUrl] = useState('')
    const [maskMandate, setMaskMandate] = useState(false)

    useEffect(() => {
        axios.get('http://localhost:8000/api/cities/' + id)
        .then(response => {
            setName(response.data.name)
            setPopulation(response.data.population)
            setImageUrl(response.data.imageUrl)
            setMaskMandate(response.data.maskMandate)

            setIsLoading(false)


        });
    }, [id])

    function handleSubmit(event) {
        event.preventDefault();
        axios.put('http://localhost:8000/api/cities/' + id, {
            name,
            population,
            imageUrl,
            maskMandate
        })
        .then(() => navigate('/cities/' + id))
        .catch(console.log)
    }



    if (isLoading) return 'Loading...';


    return (
        <div>
        <h1>Editing</h1>
        <form onSubmit={handleSubmit}>
             <div>
                 <label>Name</label>
                 <input 
                     name="name"
                     value={name}
                     onChange={e => setName(e.target.value)}
                 />
             </div>
             <div>
                 <label>Population</label>
                 <input 
                     name='population'
                     value={population}
                     type='number'
                     onChange={e => setPopulation(e.target.value)}
                 />
             </div>
             <div>
                 <label>Image Url</label>
                 <input 
                     name='imageUrl'
                     value={imageUrl}
                     onChange={e => setImageUrl(e.target.value)}
                 />
             </div>
             <div>
                 <label>Mask required?</label>
                 <input 
                     type='checkbox'
                     checked={maskMandate}
                     onChange={e => setMaskMandate(e.target.checked)}
                 />
             </div>
             <button>Submit</button>
         </form>
        
        </div>
    )





}