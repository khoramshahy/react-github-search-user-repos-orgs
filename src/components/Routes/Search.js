import React, { useState, Fragment } from 'react';
import { useHistory } from "react-router-dom";
import { connect } from "react-redux";
import { getUserInfo, emptyError } from '../../store/action'

const Search = (props) => {
    const [username, setUsername] = useState('');
    const history = useHistory();

    const { error } = props;

    const handleChange = (e) => {
        const { value } = e.target;
        if(error){
            props.emptyError();
        }
        setUsername(value);
    }

    const handleEnter = (e) => {
        if (e.key === 'Enter') {
            getInfo()
        }
    }

    const getInfo = () => {
        if (username) {
            props.getUserInfo({username, history});
        }
    }

    return (
        <Fragment>
            <h1>Type a username:</h1>
            <input value={username} onChange={handleChange}
                onKeyDown={handleEnter} placeholder="search user" required />
            <button onClick={getInfo}>get info</button>
            {error && <p className="error">{error}</p>}
        </Fragment>
    )
};

const mapStateToProps = ({ error }) => ({ error })

const mapDispatchToProps = { getUserInfo, emptyError }

export default connect(mapStateToProps, mapDispatchToProps)(Search);