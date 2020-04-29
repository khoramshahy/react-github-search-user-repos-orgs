export const getUserInfo = (payload: string) :Action=> ({ type: 'USER_FETCH', payload });
export const getRepos = ():Action => ({ type: 'REPOS_FETCH' });
export const getOrgs = ():Action => ({ type: 'ORGS_FETCH' });
export const emptyError = ():Action => ({ type: 'EMPTY_ERROR' });
export const resetUser = ():Action => ({type: 'RESET_USER'});
export const setLoading = ():Action => ({type: 'SET_LOADING', payload: true});


export interface Action {
    type: string;
    payload?: any;
  }
  