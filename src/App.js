import React, {useEffect, useState} from 'react';
import Details from "./components/Details";
import Books from "./components/Books";
import LOCALHOST from "./constants/app";
import DetailsContext from "./context/DetailsContext";
import RolesContext from "./context/RolesContext";

function App() {
    const [details, setDetails] = useState({});
    const [roles, setRoles] = useState([]);
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
    return (
        <RolesContext.Provider value={{roles, setRoles}}>
            <DetailsContext.Provider value={{details, setDetails}}>
                <Details/>
                <Books/>
            </DetailsContext.Provider>
        </RolesContext.Provider>
    );
}

export default App;

