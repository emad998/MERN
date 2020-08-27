import React, {useState} from 'react';

import axios from 'axios';
import {navigate} from '@reach/router';

export default function NewCity(){
    const [name, setName] = useState('')
    const [population, setPopulation] = useState('')
    const [imageUrl, setImageUrl] = useState('')
    const [maskMandate, setMaskMandate] = useState(false)
    const [errors, setErrors] = useState(null)

    function handleSubmit(event) {
        event.preventDefault();
        axios.post('http://localhost:8000/api/cities', {
            name,
            population,
            imageUrl,
            maskMandate
        })
        .then(() => navigate('/cities'))
        .catch((err) => {
            // this catch happens because of the res.status(400) in the controller
            setErrors(err.response.data.errors);
            console.log(err.response);
          });
        
    }



    return (
        <div>
         <h1>New City</h1>
         <form onSubmit={handleSubmit}>
             <div>
                 <label>Name</label>
                 <input 
                     name="name"
                     value={name}
                     onChange={e => setName(e.target.value)}
                 />

                {errors && (
                    <span style={{ color: "red" }}>
                    {/* ?. is called optional chaining, NEW feature in JS */}
                    {errors?.name?.properties?.message}
                    </span>
                )}
             </div>
             <div>
                 <label>Population</label>
                 <input 
                     name='population'
                     value={population}
                     type='number'
                     onChange={e => setPopulation(e.target.value)}
                 />

                {errors && (
                    <span style={{ color: "red" }}>
                    {/* ?. is called optional chaining, NEW feature in JS */}
                    {errors?.population?.properties?.message}
                    </span>
                )}
             </div>
             <div>
                 <label>Image Url</label>
                 <input 
                     name='imageUrl'
                     value={imageUrl}
                     onChange={e => setImageUrl(e.target.value)}
                 />
                 {errors && (
                    <span style={{ color: "red" }}>
                    {/* ?. is called optional chaining, NEW feature in JS */}
                    {errors?.imageUrl?.properties?.message}
                    </span>
                )}
             </div>
             <div>
                 <label>Mask required?</label>
                 <input 
                     type='checkbox'
                     checked={maskMandate}
                     onChange={e => setMaskMandate(e.target.checked)}
                 />
                 {errors && (
                    <span style={{ color: "red" }}>
                    {/* ?. is called optional chaining, NEW feature in JS */}
                    {errors?.maskMandate?.properties?.message}
                    </span>
                )}
             </div>
             <button>Submit</button>
         </form>
        </div>
    )
}