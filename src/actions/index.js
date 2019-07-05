export const changePage = (pageId) => {
    return {
        type: 'CHANGE_PAGE',
        payload: pageId
    }
}

let newUserId = 1
export const addUser = (newUserName) => ({
    type: 'ADD_USER',
    payload: {
        id: newUserId++,
        username: newUserName,
        bestScore: 0
    }
})

export const updateBestScore = (newUser) => ({
    type: 'UPDATE_BEST_SCORE',
    payload: {
        id: newUser.id,
        bestScore: newUser.score
    }
})

export const setCurrentUser = (user) => ({
    type: 'SET_CURR_USER',
    payload: user
})

export const increaseSolved = () => ({
    type: 'INCREASE_SOLVED',
})