import React, { useState, Fragment } from 'react';
import { useHistory } from "react-router-dom";
import { connect } from "react-redux";
import { getUserInfo, emptyError } from '../../store/action'

const Search = (props) => {
    const [username, setUsername] = useState('');
    const history = useHistory();

    const { error, loading } = props;

    const handleChange = (e) => {
        const { value } = e.target;
        if (error) {
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
        if (username && !loading) {
            props.getUserInfo({ username, history });
        }
    }

    return (
        <Fragment>
            <div className="form">
                <h1>Type a username</h1>
                <input value={username} placeholder="search user"
                    onChange={handleChange} onKeyDown={handleEnter} />
                {error && <p className="error">{error}</p>}
                <button onClick={getInfo} disabled={loading}>get info</button>
            </div>
            {loading && <span className="spinner"></span>}
        </Fragment>
    )
};

const mapStateToProps = ({ error, loading }) => ({ error, loading })

const mapDispatchToProps = { getUserInfo, emptyError }

export default connect(mapStateToProps, mapDispatchToProps)(Search);