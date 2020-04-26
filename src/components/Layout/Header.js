import React, { Fragment } from 'react';
import { NavLink } from 'react-router-dom';
import { useParams } from "react-router";
import { useSelector } from 'react-redux';
import { useHistory } from "react-router-dom";

const Header = () => {
    const { user } = useParams();

    const username = useSelector(state => state.user.login);
    const history = useHistory();

    return (
        <Fragment>
            <strong>{username}</strong>
            <button onClick={() => history.push('/')} >another user</button>
            <header>
                <NavLink to={`/${user}/info/overview`} activeClassName="active" >Overview</NavLink>
                <NavLink to={`/${user}/info/repos`} activeClassName="active">Repos</NavLink>
                <NavLink to={`/${user}/info/orgs`} activeClassName="active">Orgs</NavLink>
            </header>
        </Fragment>
    )
}

export default Header;