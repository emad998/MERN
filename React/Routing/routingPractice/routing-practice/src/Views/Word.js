import React from 'react';




function Word(props){

    if (isNaN(props.id) === true){
        return <p>The word is: {props.id}</p>
    } else


    return(
        <div>
            <p>The number is: {props.id}</p>
        </div>
    )

}

export default Word