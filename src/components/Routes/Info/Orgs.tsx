import React, { Fragment, useEffect } from 'react';
import { getOrgs, setLoading } from "../../../store/action";
import { connect } from 'react-redux'
import { reducerState } from '../../../store/reducer';

const Orgs = (props: any) => {
    const { user, orgs, loading } = props

    useEffect(() => {
        if (user.login && orgs.length === 0) {
            if (!loading) {
                props.setLoading()
            }
            props.getOrgs();
        }
    }, [user])

    return (
        <Fragment>
            {orgs.length !== 0 &&
                <div className="container">
                    {orgs.map((org:any, i:number) =>
                        <div key={i}>
                            <h1>{org.login}</h1>
                            <p>{org.description}</p>
                        </div>)}
                </div>}
            {orgs.length === 0 && <div>There's no org</div>}
        </Fragment >
    )
};

const mapStateToProps = (({ user, orgs, loading }:reducerState) => ({ user, orgs, loading }));

const mapDispatchToProps = { getOrgs, setLoading }

export default connect(mapStateToProps, mapDispatchToProps)(Orgs);