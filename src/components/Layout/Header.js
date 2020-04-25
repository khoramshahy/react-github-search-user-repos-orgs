import React from 'react';
import { Link } from 'react-router-dom';
import { useParams } from "react-router";

const Header = () => {
    const { user } = useParams();

    return (
        <header>
            <ul>
                <li><Link to={`/${user}/info`}>Overview</Link></li>
                <li><Link to={`/${user}/info/repos`}>Repos</Link></li>
                <li><Link to={`/${user}/info/orgs`}>Orgs</Link></li>
            </ul>
        </header>
    )
}

export default Header;