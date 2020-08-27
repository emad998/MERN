import React, {useState} from 'react';


export default function MainPage(){
    const [isClicked1, setIsClicked1] = useState(false)
    const [isClicked2, setIsClicked2] = useState(false)
    const [isClicked3, setIsClicked3] = useState(false)

    function colorChanger1(){
        if (isClicked1 == false){
            setIsClicked1(true)
            setIsClicked2(false)
            setIsClicked3(false)
        } else {
            setIsClicked1(false)
            setIsClicked2(false)
            setIsClicked3(false)

        }
        

    }


    function colorChanger2(){
        if (isClicked2 == false){
            setIsClicked1(false)
            setIsClicked2(true)
            setIsClicked3(false)
        } else {
            setIsClicked1(false)
            setIsClicked2(false)
            setIsClicked3(false)

        }
        

    }


    function colorChanger3(){
        if (isClicked3 == false){
            setIsClicked1(false)
            setIsClicked2(false)
            setIsClicked3(true)
        } else {
            setIsClicked1(false)
            setIsClicked2(false)
            setIsClicked3(false)

        }
        

    }


    return (

        <div>
            <button
             style={{backgroundColor: isClicked1 ? 'green' : 'white'}}
             onClick={colorChanger1}
              >playing</button>
            <button
             style={{backgroundColor: isClicked2 ? 'yellow' : 'white'}}
             onClick={colorChanger2}
            >Not playing</button>
            <button
            style={{backgroundColor: isClicked3 ? 'blue' : 'white'}}
             onClick={colorChanger3}
            
            >Not decided</button>



        </div>
    )



}