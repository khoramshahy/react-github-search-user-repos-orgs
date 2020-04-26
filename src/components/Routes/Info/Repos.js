import React, { Fragment, useEffect } from 'react';
import { getRepos } from "../../../store/action";
import { connect } from 'react-redux'

const Repos = (props) => {
    const { repos } = props;

    useEffect(() => {
        props.getRepos();
    }, [])

    return (
        <Fragment>
            {repos.length !== 0 &&
                <div className="container">
                    {repos.map((repo, i) => <div key={i}><h1>{repo.name}</h1>
                        <p>{repo.description}</p></div>)}
                </div>}
            {repos.length === 0 && <div>There's no repo</div>}
        </Fragment >
    )
};

const mapStateToProps = (({ repos }) => ({ repos }));

const mapDispatchToProps = { getRepos }

export default connect(mapStateToProps, mapDispatchToProps)(Repos);