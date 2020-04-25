import React, { Fragment } from 'react';
import { useParams } from "react-router";
import { Switch, Route, Redirect } from 'react-router-dom';
import { Overview, Repos, Orgs } from "./Info/";
import Header from '../Layout/Header';
import { connect } from "react-redux";

const Info = ({ match, user }) => {
    const { user: username } = useParams();

    // prevent user to change the username in url
    if (username !== user.login) {
        return <Redirect to="/" />
    }

    return (
        <Fragment>
            <Header />
            <main>
                <Switch>
                    <Route path={`${match.url}/overview`} component={Overview} />
                    <Route path={`${match.url}/repos`} component={Repos} />
                    <Route path={`${match.url}/orgs`} component={Orgs} />
                    <Redirect to={`${match.url}/overview`} />
                </Switch>
            </main>
        </Fragment >
    )
};

const mapStateToProps = (state) => {
    return {
        user: state.user
    }
}
export default connect(mapStateToProps, null)(Info);