import React, {useState} from 'react';


function ToDos(){
    const [list, setList] = useState([{
        title: 'finish Mern',
        complete: false
    }, {
        title: 'finish C sharp',
        complete: false
    }])
    
    const[newItem, setNewItem] = useState('')

    function handleForm(event){
        event.preventDefault();
        let object = {
            title: newItem,
            complete: false
        }
        setList([...list, object ])
        
    }


    function handleDelete(id){
        console.log(id)
        const newList = list.filter((item, i) => i !== id);
 
        setList(newList);
    }

    function handleCheck(i){
        let selectedItem = list[i]
        selectedItem.complete = !selectedItem.complete
        setList([...list])
        
    }


 

    return (
        <div>

            <form onSubmit={handleForm}>
                <label>Input Task</label>
                <input
                value = {newItem}
                onChange = {event =>  setNewItem(event.target.value)}


                />
                    <button>Add</button>

            </form>

            <ul>
            {
            list.map( (item, i) => 
                <li key={ i } style={{textDecoration: item.complete ? 'line-through' : 'none'}}>{ item.title }<input type="checkbox" onChange={() => handleCheck(i)}/><button onClick = {() => handleDelete(i)}>Delete</button> </li>
            )}
            </ul>


        </div>
    );

};

export default ToDos;