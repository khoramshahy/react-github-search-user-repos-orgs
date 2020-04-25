import React, { useState, Fragment } from 'react';
import { useHistory } from "react-router-dom";
import { getUser } from '../../api';
import { connect } from "react-redux";
import { setUser } from '../../store/action'

const Search = (props) => {
    const [user, setUser] = useState('');
    const [error, setErorr] = useState('');
    const history = useHistory();

    const handleChange = (e) => {
        const { value } = e.target;
        setErorr('');
        setUser(value);
    }

    const handleEnter = (e) => {
        if (e.key === 'Enter') {
            getInfo()
        }
    }

    const getInfo = async () => {
        const result = await getUser(user)
        if (result === 'error') {
            setErorr('User not found');
            return;
        }
        props.setUser(result);
        history.push(`/${user}/info`)
    }

    return (
        <Fragment>
            <h1>Type a username:</h1>
            <input value={user} onChange={handleChange} placeholder="search user" required />
            <button onClick={getInfo} onKeyPress={handleEnter}>get info</button>
            {error && <p className="error">{error}</p>}
        </Fragment>
    )
};

const mapDispatchToProps = { setUser }

export default connect(null, mapDispatchToProps)(Search);