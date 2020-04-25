import React, { Fragment } from 'react';
import { useParams } from "react-router";
import { Switch, Route, Redirect } from 'react-router-dom';
import { Overview, Repos, Orgs } from "./Info/";
import Header from '../Layout/Header';

const Info = ({ match }) => {
    const { user } = useParams();

    //prevent user to change the username in url
    if (user !== 'shirin') {
        return <Redirect to="/" />
    }

    return (
        <Fragment>
            <Header />
            <Switch>
                <Route path={`${match.url}/overview`} component={Overview} />
                <Route path={`${match.url}/repos`} component={Repos} />
                <Route path={`${match.url}/orgs`} component={Orgs} />
                <Redirect to={`${match.url}/overview`} />
            </Switch>
        </Fragment >
    )
};

export default Info;