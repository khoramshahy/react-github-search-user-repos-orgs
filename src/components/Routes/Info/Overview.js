import React, { Fragment } from 'react';
import Repos from './Repos';
import Orgs from './Orgs';

const Overview = () => {

    return (
        <Fragment>
            <section>
                <h3>Repo</h3>
                <Repos />
            </section>
            <section>
                <h3>Orgs</h3>
                <Orgs />
            </section >
        </Fragment >
    )
};

export default Overview;