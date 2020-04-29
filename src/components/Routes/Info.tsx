import React, { Fragment, useEffect } from 'react';
import { useParams } from "react-router";
import { Switch, Route, Redirect } from 'react-router-dom';
import { Overview, Repos, Orgs } from "./Info/";
import Header from '../Layout/Header';
import { connect } from "react-redux";
import { getUserInfo } from "../../store/action";
import { reducerState } from '../../store/reducer';

const Info = ({ match, history, user, loading, getUserInfo }: any) => {
    const { user: username } = useParams();
    
    // when user to change the username in url
    useEffect(() => {
        if (username !== user.login && !loading) {
            getUserInfo({ username, history })
        }
    }, [user])


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
            {loading && <span className="spinner"></span>}
        </Fragment >
    )
};

const mapStateToProps = ({ user, loading }: reducerState) => ({ user, loading })

const mapDispatchToProps = { getUserInfo }

export default connect(mapStateToProps, mapDispatchToProps)(Info);