import React, {useContext} from 'react';
import BooksContext from "../context/BooksContext";
import {Link, useRouteMatch} from 'react-router-dom';

const Books = () => {
    const {url} = useRouteMatch();
    const {books} = useContext(BooksContext);
    return (
        (
            <div>
                <h2>Books</h2>
                <ul>
                    {
                        books && books.map(({ id, name, author }) => (
                            <li key={id}>
                                <Link exact={true} to={`${url}/${id}`}>{name}</Link>
                            </li>
                        ))
                    }
                </ul>
            </div>
        )

    );
};

export default Books;