import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { changePage } from '../../actions/index'

import './style.css'

export default function Result() {
    const users = useSelector(state => state.user)
    const currUser = useSelector(state => state.currentUser)
    const user = users.find(e => e.id === currUser.id)
    const dispatch = useDispatch()
    const homePage = () => {
        dispatch(changePage(0))
    }
    return (
        <div className="container-fluid mt-4">
            <div className="row d-flex justify-content-center mb-2">
                <h4>
                    {user.username}
                </h4>
            </div>
            <div className="row d-flex justify-content-center mb-3">
                <h4>
                    {user.bestScore}
                </h4>
            </div>
            <div className="row mt-2">
                <div className="col-12">
                    <button className="btn btn-block btn-success" onClick={homePage}>
                        Ana Sayfa
                    </button>
                </div>
            </div>
        </div>
    )
}