import React, {useState} from 'react';
import styles from './Boxes.module.css'

function Boxes() {
    const [color, setColor] = useState('');
    const [boxes, setBoxes] = useState([]);

    function handleSubmit(event) {
        event.preventDefault();
        const box = {
            color,
        };

        setBoxes([...boxes, box])
    }


   



    return <div> 
    <form onSubmit = {handleSubmit}>
        <div>
            <label>Color</label>
            <input 
                value = {color}
                onChange = {event => setColor(event.target.value)}
            />

        </div>
        <button>Submit</button>


    </form>
    {boxes.map((box, idx) => (
        <div className={styles.box}  key={idx} style={{background: box.color}}></div>
    ))}




    </div>
}



export default Boxes; 