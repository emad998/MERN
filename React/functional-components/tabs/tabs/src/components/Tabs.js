import React, {useState} from 'react';
import styles from './Tabs.module.css';

function Tabs() {
    const [text, setText] = useState('');
    const [tab, setTab]= useState([]);

  

    return (
        <div>
            <div>
                <button onClick={event => setText('Tab 1 content is showing')}>Tab 1</button>
            </div>
            <div>
                <button onClick={event => setText('Tab 2 content is showing')}>Tab 2</button>
            </div>
            <div>
                <button onClick={event => setText('Tab 3 content is showing')}>Tab 3</button>
            </div>

            <div className={styles.box}>
                    {text}
            </div>
        </div>
    )
}

export default Tabs;