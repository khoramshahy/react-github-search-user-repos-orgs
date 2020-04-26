import { getRequest } from "./request";

export { getUser, getRepos, getOrgs };

function getUser(username) {
    return getRequest(`users/${username}`)
}

function getRepos(username) {
    return getRequest(`users/${username}/repos?per_page=250`)
}

function getOrgs(username) {
    return getRequest(`users/${username}/orgs`)
}

// function getUserData(username) {
//     return axios
//         .all([
//             axios.get(`${BASE_URL}/users/${username}`),
//             axios.get(`${BASE_URL}/users/${username}/orgs`)
//         ])
//         .then(([user, orgs]) => ({
//             user: user.data,
//             orgs: orgs.data
//         }));
// }