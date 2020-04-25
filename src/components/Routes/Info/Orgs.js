import React, { Fragment } from 'react';
import { useParams } from "react-router";

const Orgs = () => {
    const { user } = useParams();

    return (
        <Fragment>
            Orgs
            <div className="container">
                <div>{user}</div>
                <div>{user}</div>
                <div>{user}</div>
                <div>{user}</div>
            </div>
        </Fragment >
    )
};

export default Orgs;