import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { changePage, addUser, setCurrentUser } from '../../actions/index'

import './style.css'

export default function Landing() {
    let users = useSelector(state => state.user)
    const dispatch = useDispatch()
    let newUser
    const [user, setUser] = useState(0)

    const startGame = () => {
        let currUsr = users.find(e => { return e.id === Number(user) })
        dispatch(setCurrentUser(currUsr))
        dispatch(changePage(1))
    }

    return (
        <div className="container-fluid mt-4">
            <div className="row">
                <div className="form-group">
                    <label htmlFor="newUser">Yeni Kullanıcı Ekle</label>
                    <div className="d-flex">
                        <div className="col-8">
                            <input
                                ref={e => newUser = e}
                                id="newUser"
                                type="text"
                                className="form-control"
                                placeholder="Kullanıcı Adı"
                            />
                        </div>
                        <div className="col-4">
                            <button
                                className="btn btn-primary"
                                onClick={() => {
                                    dispatch(addUser(newUser.value))
                                    newUser.value = ''
                                }}
                            >Ekle</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="form-group col-12">
                    <label htmlFor="users">Kullanıcı Seç</label>
                    <select
                        id="users"
                        className="form-control"
                        value={user}
                        onChange={(e) => setUser(e.target.value)}
                    >
                        {
                            users.map(e => {
                                return (
                                    <option key={e.id} value={e.id}>{e.username}</option>
                                )
                            })
                        }
                    </select>
                </div>
            </div>
            <div className="row">
                <div className="col-12">
                    <button className="btn btn-block btn-success" onClick={startGame}>
                        Oyunu Başlat
                    </button>
                </div>
            </div>
        </div>
    )
}