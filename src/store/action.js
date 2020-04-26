export const getUserInfo = (payload) => ({ type: 'USER_FETCH', payload });
export const getRepos = () => ({ type: 'REPOS_FETCH' });
export const getOrgs = () => ({ type: 'ORGS_FETCH' });
export const emptyError = () => ({ type: 'EMPTY_ERROR' });
