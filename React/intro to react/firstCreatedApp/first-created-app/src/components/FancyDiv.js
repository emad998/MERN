import React from 'react';

function FancyDiv(props){
    return (
        <div style={{
            background: props.background,
            border: props.border,
            color: props.color

        }}>{props.children}</div>
    )
}

export default FancyDiv;