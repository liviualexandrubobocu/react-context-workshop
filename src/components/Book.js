import React, {useContext} from 'react';
import BooksContext from "../context/BooksContext";
import {useParams, useHistory} from 'react-router-dom';

const Book = () => {
    const {id} = useParams();
    const history = useHistory();
    const {books} = useContext(BooksContext);
    const {name, author, description} = books.filter(book => book.id === Number(id))[0];
    const back = () => {
        history.goBack();
    }
    return (
        <div>
            <h3>{name}</h3>
            <p>{author}</p>
            <p>{description}</p>
            <button onClick={back}>Back >></button>
        </div>
    )
};

export default Book;