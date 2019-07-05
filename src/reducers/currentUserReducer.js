const currentUserReducer = (state = { username: 'Default User', id: 0, bestScore: 0 }, action) => {
    switch (action.type) {
        case 'SET_CURR_USER':
            return action.payload
        default:
            return state
    }
}

export default currentUserReducer