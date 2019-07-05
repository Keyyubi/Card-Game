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