import React, {useState, useEffect, useContext} from 'react';
import LOCALHOST from '../constants/app';
import DetailsContext from "../context/DetailsContext";

const Books = () => {
    const [books, setBooks] = useState([]);
    const {details} = useContext(DetailsContext);
    const {trait} = details;
    useEffect(() => {
        fetch(`${LOCALHOST}/books`)
            .then(res => res.json())
            .then(books => {
                setBooks(books);
            })
    }, []);
    return (
        trait === 'smart' && (
            <div>
                <h2>Books</h2>
                <ul>
                    {
                        books && books.map(({ id, name, author }) => (
                            <li key={id}>
                                <span>Name: {name}</span>
                                <span>Author: {author}</span>
                            </li>
                        ))
                    }
                </ul>
            </div>
        )

    );
};

export default Books;