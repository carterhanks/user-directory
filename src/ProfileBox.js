import React, { useState } from 'react';
import data from "./data";

function ProfileBox() {
    const [count, setCount] = useState(data);
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
        <div className="container">
            <div className="data">
                <div className="id">
                <h2>{count[number].id}/{count.length}</h2>
                </div>
                <div className="name">
                <h1>{count[number].name.first} {count[number].name.last}</h1>
                </div>
                <div className="location">
                <h3>From: &nbsp;</h3> {count[number].city}, {count[number].country}
                </div>
                <div className="title">
                <h3>Job Title: &nbsp;</h3> {count[number].title}
                </div>
                <div className="employer">
                <h3>Employer: &nbsp;</h3> {count[number].employer}
                </div>
                <div className="favoriteMovies">
                <h3>Favorite Movies:</h3> 
                    <ol id="movieList">
                        {count[number].favoriteMovies.map((item, index) => (
                            <li key={index}>
                                {item}
                            </li>
                        ))}
                    </ol>
                </div>
            </div>
            <div className="btns">
            <button id="prevBtn" onClick={() => decrementCount()}>&lt; Previous</button>
            <button id="nextBtn" onClick={() => incrementCount()}>Next &gt;</button>
            </div>
        </div>
    );
}

export default ProfileBox;