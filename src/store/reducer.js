const initialState = {
    user: {},
    error: '',
    loading: false,
    repos: [],
    orgs: []
}

const reducer = (state = initialState, { type, payload }) => {
    const newState = { ...state };
    switch (type) {
        case 'USER_FETCH_SUCCEEDED':
            newState.user = { ...payload }
            newState.error = ''
            break;
        case 'USER_FETCH_FAILED':
            newState.user = {}
            newState.error = 'User not Found'
            break;
        case 'REPOS_FETCH_SUCCEEDED':
            newState.repos = [...payload]
            break;
        case 'ORGS_FETCH_SUCCEEDED':
            newState.orgs = [...payload]
            break;
        case 'EMPTY_ERROR':
            newState.error = ''
            break;
    }
    return newState;
}

export default reducer;