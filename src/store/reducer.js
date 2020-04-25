const initialState = {
    user: {},
    repos: [],
    orgs: []
}

const reducer = (state = initialState, { type, payload }) => {
    const newState = { ...state };
    switch (type) {
        case 'SET_USER':
            newState.user = { ...payload }
    }
    return newState;
}

export default reducer;