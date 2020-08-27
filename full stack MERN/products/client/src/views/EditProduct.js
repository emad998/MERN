import React, {useEffect, useState} from 'react';
import axios from 'axios';
import {navigate} from '@reach/router';

export default function EditProduct({id}){
    const [title, setTitle] = useState('')
    const [price, setPrice] = useState('')
    const [description, setDescription] = useState('')

    useEffect(() => {
        axios.get('http://localhost:8000/api/products/' + id)
        .then(response => {
            setTitle(response.data.title)
            setPrice(response.data.price)
            setDescription(response.data.description)
            

           


        });
    }, [id])





    function handleSubmit(event){
        event.preventDefault();
        axios.put('http://localhost:8000/api/products/' + id, {
            title,
            price,
            description
        })
        .then(() => navigate('/'))
        .catch(console.log)



    }




    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Title:</label>
                    <input
                        name='title'
                        value={title}
                        onChange={e => setTitle(e.target.value)}
                     />   
                </div>
                <div>
                    <label>Price:</label>
                    <input
                        name='price'
                        value={price}
                        type='number'
                        onChange={e => setPrice(e.target.value)}
                     />   
                </div>
                <div>
                    <label>Description:</label>
                    <input
                        name='description'
                        value={description}
                        onChange={e => setDescription(e.target.value)}
                     />   
                </div>
                <button>Submit</button>
            </form>




        </div>
    )




}