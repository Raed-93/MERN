
import React, { useState } from 'react';
const PersonCard = props => {
    const {firstName, lastName, Age, hairColor} = props;
    const ageNumber = parseInt(Age);
    const [currentAge, setCurrentAge] = useState(ageNumber);
    const IncrementAge = () => {
        setCurrentAge(currentAge + 1);
    }
    return (
        <>
        <h1>{lastName},{firstName}</h1>
        <p>Age:{Age}</p>
        <p>Hair Color: {hairColor}</p>
        <button type="button" className="btn btn-primary" onClick={IncrementAge}>Click Me</button>
        </>
    );
}
export default PersonCard