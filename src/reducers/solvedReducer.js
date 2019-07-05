const solvedReducer = (state = 0, action) => {
    switch (action.type) {
        case 'INCREASE_SOLVED':
            return state + 1
        case 'RESET_SOLVED':
            return 0
        default:
            return state
    }
}

export default solvedReducer