
import React, { useState } from 'react';

const PersonCard = props => {
    const {firstName, lastName, Age, hairColor} = props;
    const [currentAge, setCurrentAge] = useState(Age);
    const IncrementAge = () => {
        setCurrentAge(currentAge + 1);
    }
    console.log(currentAge)
    return (
        <>
        <h1>{lastName},{firstName}</h1>
        <p>Age:{currentAge}</p>
        <p>Hair Color: {hairColor}</p>
        <button type="button" className="btn btn-primary" onClick={IncrementAge}>Click Me</button>
        </>
    );
}
export default PersonCard