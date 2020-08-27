import React, { useState } from  'react';

const UserForm = (props) => {
    const [firstname, setFirstname] = useState("");
    const [firstnameError, setFirstnameError] = useState("");
    const [lastname, setLastname] = useState("");
    const [lastnameError, setLastnameError] = useState("");
    const [email, setEmail] = useState("");
    const [emailError, setEmailError] = useState("");
    const [password, setPassword] = useState("");
    const [passwordError, setPasswordError] = useState("");
    const [confirmpassword, setConfirmpassword] = useState("");
    const [confirmpasswordError, setConfirmpasswordError] = useState("");
    // const [hasBeenSubmitted, setHasBeenSubmitted] = useState(false);


    // const createUser = (e) => {
    //     e.preventDefault();
    //     const newUser = { firstname, lastname, email, password, confirmpassword };
    //     console.log("Welcome", newUser);
    //     setHasBeenSubmitted( true );
    // };



    const handleError = (e) => {
        setFirstname(e.target.value);
        
        if(e.target.value.length < 2) {
            setFirstnameError("The Field must be 2 characters");
        } else {
            setFirstnameError("")
        }
        

    }


    const handleErrorLast = (e) => {
        setLastname(e.target.value);
        if(e.target.value.length < 2) {
            setLastnameError("The Field must be 2 characters");
        } else {
            setLastnameError("")
        }
    }

    const handleErrorEmail = (e) => {
        setEmail(e.target.value);
        if(e.target.value.length < 5) {
            setEmailError("The Field must be 5 characters");
        } else {
            setEmailError("")
        }
    }

    const handleErrorPassword = (e) => {
        setPassword(e.target.value);
        if(e.target.value.length < 8) {
            setPasswordError("The Field must be 8 characters");
        } else {
            setPasswordError("")
        }
    }

    const handleErrorConfirmPassword = (e) => {
        setConfirmpassword(e.target.value);
        if(e.target.value != password) { //check if conformPassword field matches password field
            setConfirmpasswordError("This field must match password");
        } else {
            setConfirmpasswordError("")
        }
    }

    return(
        <div>
        <form onsubmit={ (e) => e.preventDefault() }>
            <div>
                <label>First Name: </label> 
                <input type="text" onChange={ handleError } />
                {
                    firstnameError &&
                    <p style={{color:'red'}}>{ firstnameError }</p>
                }
            </div>
            <div>
                <label>Last Name: </label> 
                <input type="text" onChange={ handleErrorLast } />
                {
                    lastnameError ?
                    <p style={{color:'red'}}>{ lastnameError }</p> : ''
                }
            </div>
            <div>
                <label>Email Address: </label> 
                <input type="text" onChange={ handleErrorEmail } />
                {
                    emailError ?
                    <p style={{color:'red'}}>{ emailError }</p> : ''
                }
            </div>
            <div>
                <label>Password: </label>
                <input type="text" onChange={ handleErrorPassword } />
                {
                    passwordError ?
                    <p style={{color:'red'}}>{ passwordError }</p> : ''
                }
            </div>
            <div>
                <label>confirm Password: </label>
                <input type="text" onChange={ handleErrorConfirmPassword } />
                {
                    confirmpasswordError ?
                    <p style={{color:'red'}}>{ confirmpasswordError }</p> : ''
                }
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