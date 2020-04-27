import React, { Fragment, useEffect } from 'react';
import { getOrgs } from "../../../store/action";
import { connect } from 'react-redux'

const Orgs = (props) => {
    const { user, orgs } = props
    console.log('orgsss')

    useEffect(() => {
        console.log('llll')
        props.getOrgs();
    }, [user])

    return (
        <Fragment>
            {orgs.length !== 0 &&
                <div className="container">
                    {orgs.map((org, i) =>
                        <div key={i}>
                            <h1>{org.login}</h1>
                            <p>{org.description}</p>
                        </div>)}
                </div>}
            {orgs.length === 0 && <div>There's no org</div>}
        </Fragment >
    )
};

const mapStateToProps = (({ user, orgs }) => ({ user, orgs }));

const mapDispatchToProps = { getOrgs }

export default connect(mapStateToProps, mapDispatchToProps)(Orgs);