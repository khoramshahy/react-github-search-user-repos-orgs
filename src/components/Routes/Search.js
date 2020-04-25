import React, { useState, Fragment } from 'react';
import { useHistory } from "react-router-dom";

const Search = () => {
    const [user, setUser] = useState('');
    const history = useHistory();

    const handleChange = (e) => {
        const { value } = e.target;
        setUser(value);
    }

    const getInfo = () => {
        if(user === 'shirin'){
            history.push(`/${user}/info`)
        }
    }

    return (
        <Fragment>
            <h1>Type a username:</h1>
            <input value={user} onChange={handleChange} placeholder="search user" required/>
            <button onClick={getInfo}>get info</button>
        </Fragment>
    )
};

export default Search;