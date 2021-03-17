import React from 'react';
import {useLocation} from 'react-router-dom';

const Home = () => {
    const {state} = useLocation();
    console.log(state);
    return (
        <div>
            <h1>Home</h1>
            { state?.message ? (<p>{state.message}</p>) : <p>No message to display</p> }
        </div>
    )
}

export default Home;