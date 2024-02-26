import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { useParams } from "react-router-dom";
    
const Update = (props) => {
    const { id } = useParams();
    const [AuthorName, setAuthorName] = useState('');
    
    useEffect(() => {
        axios.get('http://localhost:8000/api/author/' + id)
            .then(res => {
                setAuthorName(res.data.AuthorName);
                
            })
    }, []);
    
    const updateAuthor = e => {
        e.preventDefault();
        axios.patch('http://localhost:8000/api/author/' + id, {
            AuthorName,
        })
            .then(res => console.log(res))
            .catch(err => console.error(err));
    }
    
    return (
        <div>
            <h1>Update a Author</h1>
            <form onSubmit={updateAuthor}>
                <p>
                    <label>Author Name</label><br />
                    <input type="text" 
                    name="AuthorName" 
                    value={AuthorName} 
                    onChange={(e) => { setAuthorName(e.target.value) }} />
                </p>
                <input type="submit" />
            </form>
        </div>
    )
}
    
export default Update;

