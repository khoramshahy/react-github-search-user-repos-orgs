import React, { Fragment } from 'react';
import { useParams } from "react-router";

const Overview = () => {
    const { user } = useParams();

    return (
        <Fragment>
            Overview
            <div className="container">
                <div>{user}</div>
                <div>{user}</div>
                <div>{user}</div>
                <div>{user}</div>
            </div>
        </Fragment >
    )
};

export default Overview;