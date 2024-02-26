import React, { useEffect, useState } from 'react';
import AuthorList from '../components/AuthorList';
import axios from 'axios';

const Main = (props) => {
    const [authors, setAuthors] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const removeFromDom = authorId => {
        setAuthors(authors.filter(authors => authors._id != authorId));
    }

    useEffect(() => {
        axios.get('http://localhost:8000/api/allauthors/')
            .then(res => {
                setAuthors(res.data);
                setLoading(false);
            })
            .catch(err => {
                console.error(err);
                setError(err);
                setLoading(false);
            });
    }, []);

    return (
        <div>
            <hr />
            {loading ? (
                <p>Loading...</p>
            ) : error ? (
                <p>Error: {error.message}</p>
            ) : (
                <AuthorList authors={authors}  removeFromDom={removeFromDom}/>
            )}
        </div>
    );
};

export default Main;
