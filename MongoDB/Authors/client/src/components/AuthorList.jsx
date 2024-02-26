import React from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
    
const AuthorList = (props) => {
    const { removeFromDom } = props;
    
    const deleteAuthor = (authorId) => {
        axios.delete('http://localhost:8000/api/authors/' + authorId)
            .then(res => {
                removeFromDom(authorId)
            })
            .catch(err => console.error(err));
    }
    
    return (
        <div>
            {props.authors.map((author, idx) => {
                return <p key={idx}>
                    <Link to={"/" + author._id}>
                        {author.AuthorName}
                    </Link>
                    <h2>Favoret Author</h2>
                    <Link to={"/author/" + author._id + "/edit"}>
                            Edit
                    </Link>
                    |
                    <button onClick={(e)=>{deleteAuthor(author._id)}}>
                        Delete
                    </button>
                </p>
            })}
        </div>
    )
}
    
export default AuthorList;

