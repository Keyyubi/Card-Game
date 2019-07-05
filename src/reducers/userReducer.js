const userReducer = (state = [{username:'Default User', id:0, bestScore:0}], action) => {
    switch (action.type) {
        case 'ADD_USER':
            return [...state, action.payload]
        case 'UPDATE_BEST_SCORE':
            console.log('from reducer',action.payload)
            return state.map((item) => {
                if(item.id === action.payload.id){
                    return {
                        ...item,
                        bestScore: action.payload.bestScore
                    }
                }
                else return item
            })
        default:
            return state
    }
}

export default userReducer