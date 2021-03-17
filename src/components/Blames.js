import React, {useContext} from 'react';
import DetailsContext from "../context/DetailsContext";
import RolesContext from "../context/RolesContext";
import {useHistory} from 'react-router-dom';

const Blames = () => {
    const history = useHistory();
    const {details, setDetails} = useContext(DetailsContext);
    const {roles} = useContext(RolesContext);
    const {blames} = details;
    const removeBlame = (id) => {
        setDetails({...details, blames: blames.filter(blame => blame.id !== id)});
        history.push('/', { message: "Ha, I've deleted of my blames"});
    }
    return (
        <div>
            <h3>Blames</h3>
            <ul>
                { blames && blames.map(({id, value}) => (
                    <li key={id}>
                        <span>Blame: {value}</span>
                        {
                            roles && roles.indexOf('HEADMASTER') >= 0 && <button onClick={removeBlame.bind(this, id)}>x</button>
                        }
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Blames;