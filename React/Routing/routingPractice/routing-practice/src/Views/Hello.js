import React from 'react';

function Hello(props){

    return(
        <div style={{backgroundColor: (props.id4)}}>
            <h1 style={{color: (props.id3)}}>The Word is: {props.id2}</h1>
        </div>
    )


}

export default Hello;