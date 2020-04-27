import { getRequest } from "./request";

export { getUser, getRepos, getOrgs };

function getUser(username) {
    return getRequest(`users/${username}`)
}

function getRepos(username) {
    return getRequest(`users/${username}/repos`)
}

function getOrgs(username) {
    return getRequest(`users/${username}/orgs`)
}
