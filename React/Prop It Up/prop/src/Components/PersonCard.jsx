import React from "react";
const PersonCard = props => {
    const {firstName, lastName, Age, hairColor} = props;

    return (
        <>
        <h1>{lastName},{firstName}</h1>
        <p>{Age}</p>
        <p>{hairColor}</p>
        </>
        
    )
 
} 

export default PersonCard
