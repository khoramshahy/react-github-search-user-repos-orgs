import React, { Fragment, useEffect } from 'react';
import { getOrgs } from "../../../store/action";
import { connect } from 'react-redux'

const Orgs = (props) => {
    const { orgs } = props

    useEffect(() => {
        props.getOrgs();
    }, [])

    return (
        <Fragment>
            {orgs.length !== 0 &&
                <div className="container">
                    {orgs.map((org, i) => <div key={i}>{org.name}</div>)}
                </div>}
            {orgs.length === 0 && <div>There's no org</div>}
        </Fragment >
    )
};

const mapStateToProps = (({ orgs }) => ({ orgs }));

const mapDispatchToProps = { getOrgs }

export default connect(mapStateToProps, mapDispatchToProps)(Orgs);