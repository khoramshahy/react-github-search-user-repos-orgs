import React, { Fragment, useEffect } from 'react';
import { useParams } from "react-router";
import { Switch, Route, Redirect } from 'react-router-dom';
import { Overview, Repos, Orgs } from "./Info/";
import Header from '../Layout/Header';
import { useSelector, useDispatch } from "react-redux";
// import { connect } from "react-redux";
import { getUserInfo } from "../../store/action";

const Info = ({ match, history }) => {
    const { user: username } = useParams();
    const user = useSelector(state => state.user);
    const dispatch = useDispatch();

    // when user to change the username in url
    useEffect(() => {
        if (username !== user.login) {
            dispatch(getUserInfo({ username, history }))
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
        </Fragment >
    )
};

export default Info;
// const mapStateToProps = ({user}) => ({user})

// const mapDispatchToProps = {getUserInfo}

// export default connect(mapStateToProps, mapDispatchToProps)(Info);