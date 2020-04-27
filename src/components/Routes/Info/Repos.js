import React, { Fragment, useEffect } from 'react';
import { getRepos, setLoading } from "../../../store/action";
import { connect } from 'react-redux'

const Repos = (props) => {
    const { user, repos, loading } = props;

    useEffect(() => {
        if (user.login && repos.length === 0) {
            if (!loading) {
                props.setLoading();
            }
            props.getRepos();
        }
    }, [user])

    return (
        <Fragment>
            {repos.length !== 0 &&
                <div className="container">
                    {repos.map((repo, i) =>
                        <div key={i}>
                            <h1>{repo.name}</h1>
                            <p>{repo.description}</p>
                        </div>)}
                </div>}
            {repos.length === 0 && <div>There's no repo</div>}
        </Fragment >
    )
};

const mapStateToProps = (({ user, repos, loading }) => ({ user, repos, loading }));

const mapDispatchToProps = { getRepos, setLoading }

export default connect(mapStateToProps, mapDispatchToProps)(Repos);