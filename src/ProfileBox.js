import React, { useState } from 'react';
import data from "./data";

function ProfileBox() {
    // const [count, setCount] = useState(data);
    const [number, setNumber] = useState(0);
 
    function decrementCount() {
        if (number < 1) {
            alert('Nothing here! Press next.')
        } else {
            setNumber(number - 1);
        }
    }

    function incrementCount() {
        setNumber(number + 1);
    }

    // TO-DO - Create function that removes (stops displaying) the 'previous' button when data.js is at user 1
    // function removePrevious(e) {
    //     e.target.classList.toggle("no")
    // }

    return (
        <div>
            <h1 class="data">{JSON.stringify(data[number])}</h1>
            <button id="prevBtn" onClick={() => decrementCount()}>- Previous</button>
            <button id="nextBtn" onClick={() => incrementCount()}>Next -</button>
        </div>
    );
}

export default ProfileBox;