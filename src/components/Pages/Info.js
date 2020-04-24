import React, { Fragment } from 'react';
import { useParams, useHistory } from "react-router";

const Info = () => {
    const { user } = useParams();
    const history = useHistory();

    const goBack = () => {
        history.goBack();
    }

    return (
        <Fragment>
            <button onClick={goBack}>go back</button>
            <div>{user}</div>
        </Fragment>
    )
};

export default Info;