import React, {useContext} from 'react';
import RolesContext from "../context/RolesContext";
import {Redirect} from 'react-router-dom';

const Admin = () => {
    const {roles} = useContext(RolesContext);
    const isHeadMaster = roles?.indexOf('HEADMASTER') >= 0;
    return (
        <>
            {
                isHeadMaster ? (<div>Admin Page</div>) : (<Redirect to={'/'}/>)
            }
        </>
    )
}

export default Admin;