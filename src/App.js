import React, {useEffect, useState} from 'react';
import LOCALHOST from "./constants/app";
import DetailsContext from "./context/DetailsContext";
import RolesContext from "./context/RolesContext";
import Menu from "./components/Menu";
import Navigation from "./components/Navigation";
import BooksContext from "./context/BooksContext";

function App() {
    const [details, setDetails] = useState({});
    const [roles, setRoles] = useState([]);
    const [books, setBooks] = useState([]);

    useEffect(() => {
        fetch(`${LOCALHOST}/details`)
            .then(res => res.json())
            .then(details => {
                setDetails(details);
            })
    }, []);

    useEffect(() => {
        fetch(`${LOCALHOST}/roles`)
            .then(res => res.json())
            .then(roles => {
                setRoles(roles);
            })
    }, []);

    useEffect(() => {
        fetch(`${LOCALHOST}/books`)
            .then(res => res.json())
            .then(books => {
                setBooks(books);
            })
    }, []);
    return (
        <>
            <Menu/>
            <RolesContext.Provider value={{roles, setRoles}}>
                <DetailsContext.Provider value={{details, setDetails}}>
                    <BooksContext.Provider value={{books, setBooks}}>
                        <Navigation />
                    </BooksContext.Provider>
                </DetailsContext.Provider>
            </RolesContext.Provider>
        </>
    );
}

export default App;

