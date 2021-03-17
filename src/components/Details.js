import React, {useContext} from 'react';
import DetailsContext from "../context/DetailsContext";
import RolesContext from "../context/RolesContext";

const Details = () => {
    const {details} = useContext(DetailsContext);
    const {roles, setRoles} = useContext(RolesContext);
    const {name, userName, trait} = details;
    const impersonate = () => {
        if(roles.indexOf('HEADMASTER') < 0) {
            setRoles([...roles, 'HEADMASTER']);
        }
    }
    return (
        <div>
            <h1>Details</h1>
            <p>Name: {name}</p>
            <p>User Name: {userName}</p>
            <p>Trait: {trait}</p>
            {
                roles && roles.indexOf('IMPERSONATOR') >= 0 &&
                    <button onClick={impersonate}>Impersonate</button>
            }
        </div>
    )
};

export default Details;