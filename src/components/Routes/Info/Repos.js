import React, { Fragment } from 'react';
import { useParams } from "react-router";

const Repos = () => {
    const { user } = useParams();

    return (
        <Fragment>
            Repos
            <div className="container">
                <div>{user}</div>
                <div>{user}</div>
                <div>{user}</div>
                <div>{user}</div>
            </div>
        </Fragment >
    )
};

export default Repos;