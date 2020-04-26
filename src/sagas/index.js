import { call, put, takeLatest, select } from 'redux-saga/effects';
import { getUser, getRepos, getOrgs } from '../api';

function* fetchUser({ payload: { username, history } }) {
    try {
        const result = yield call(getUser, username);
        const isInfo = history.location.pathname.indexOf('info') > -1;

        if (result.error === 'error') {

            yield put({ type: "USER_FETCH_FAILED" });
            if (isInfo) {
                history.push(`/`);
            }
        } else {
            yield put({ type: "USER_FETCH_SUCCEEDED", payload: result });
            if (!isInfo) {
                history.push(`/${username}/info/overview`);
            }
        }

    } catch (e) {
        yield put({ type: "USER_FETCH_FAILED" });
    }
}

function* fetchRepos() {
    try {
        let username = ''
        while (!username) {
            username = yield select(state => state.user.login);
        }
        const result = yield call(getRepos, username);

        if (result.error !== 'error') {
            yield put({ type: "REPOS_FETCH_SUCCEEDED", payload: result });

        }

    } catch{

    }
}

function* fetchOrgs() {
    try {
        let username = ''
        while (!username) {
            username = yield select(state => state.user.login);
        }
        const result = yield call(getOrgs, username);
        if (result.error !== 'error') {
            yield put({ type: "ORGS_FETCH_SUCCEEDED", payload: result });
        }

    } catch{

    }
}
function* rootSaga() {
    yield takeLatest("USER_FETCH", fetchUser);
    yield takeLatest("REPOS_FETCH", fetchRepos);
    yield takeLatest("ORGS_FETCH", fetchOrgs);
}

export default rootSaga;