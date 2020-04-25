import React from 'react';
import { NavLink } from 'react-router-dom';
import { useParams } from "react-router";

const Header = () => {
    const { user } = useParams();

    return (
        <header>
            <NavLink to={`/${user}/info/overview`} activeClassName="active" >Overview</NavLink>
            <NavLink to={`/${user}/info/repos`} activeClassName="active">Repos</NavLink>
            <NavLink to={`/${user}/info/orgs`} activeClassName="active">Orgs</NavLink>
        </header>
    )
}

export default Header;