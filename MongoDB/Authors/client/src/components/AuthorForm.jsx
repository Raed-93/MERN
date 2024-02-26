import React, { useState } from 'react'
import axios from 'axios';
import { Link  } from 'react-router-dom';


export default () => {
    const [AuthorName, setAuthorName] = useState(""); 

    const onSubmitHandler = e => {
        console.log("hiii")
        e.preventDefault();
        axios.post('http://localhost:8000/api/author', {
            AuthorName,
        })
            .then(res=>console.log(res))
            .catch(err=>console.log(err))
    }
    return (
        <>
        {/* <Link to={'/home'}>Home.</Link> */}
        <h3>Add a New Author: </h3>
        <form onSubmit={onSubmitHandler}>
            <label>Name: </label>
            <br/>
            <input type="text" onChange={(e)=>setAuthorName(e.target.value)} value={AuthorName}/>
            <br/>
            <input type="submit" value="Add Author"/>
        </form>
        </>
    )
}
