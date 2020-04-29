import { getRequest } from "./request";

export { getUser, getRepos, getOrgs };

function getUser(username: string) {
    return getRequest(`users/${username}`)
}

function getRepos(username: string) {
    return getRequest(`users/${username}/repos`)
}

function getOrgs(username: string) {
    return getRequest(`users/${username}/orgs`)
}
