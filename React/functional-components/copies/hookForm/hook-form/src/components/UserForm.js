import React, { useState } from  'react';

const UserForm = (props) => {
    const [firstname, setFirstname] = useState("");
    const [lastname, setLastname] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmpassword, setConfirmpassword] = useState("");
    const [hasBeenSubmitted, setHasBeenSubmitted] = useState(false);


    const createUser = (e) => {
        e.preventDefault();
        const newUser = { firstname, lastname, email, password, confirmpassword };
        console.log("Welcome", newUser);
        setHasBeenSubmitted( true );
    };


    return(
        <div>
        <form onSubmit={ createUser }>
            <div>
                <label>First Name: </label> 
                <input type="text" onChange={ (e) => setFirstname(e.target.value) } />
            </div>
            <div>
                <label>Last Name: </label> 
                <input type="text" onChange={ (e) => setLastname(e.target.value) } />
            </div>
            <div>
                <label>Email Address: </label> 
                <input type="text" onChange={ (e) => setEmail(e.target.value) } />
            </div>
            <div>
                <label>Password: </label>
                <input type="text" onChange={ (e) => setPassword(e.target.value) } />
            </div>
            <div>
                <label>confirm Password: </label>
                <input type="text" onChange={ (e) => setConfirmpassword(e.target.value) } />
            </div>
           
            
        </form>

        <h1>User Form Data</h1>
        <h4>First Name: {firstname}</h4>
        <h4>Last Name: {lastname}</h4>
        <h4>Email: {email}</h4>
        <h4>password: {password}</h4>
        <h4>confirm password: {confirmpassword}</h4>

        </div>
    );
};


export default UserForm;