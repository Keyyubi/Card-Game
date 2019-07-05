import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import createDeck from '../../deck'
import Card from '../card'
import './style.css'
import { changePage, updateBestScore, increaseSolved } from '../../actions/index'

export default function Board() {
    const dispatch = useDispatch()
    let currUser = useSelector(state => state.currentUser)
    let solvedPairs = useSelector(state => state.solvedPair)
    const [cards, setCards] = useState([])
    const [flipped, setFlipped] = useState([])
    const [solved, setSolved] = useState([])
    const [disabled, setDisabled] = useState(false)
    const [second, setSecond] = useState(60)
    let deneme = false

    useEffect(() => {
        setCards(createDeck())
    }, [])

    useEffect(() => {
        setTimeout(() => {
            if (second !== 0) {
                setSecond(second - 1)
            } else {
                GameOver()
                return
            }
        }, 1000);
    });

    const sameCardClicked = (id) => { return flipped.includes(id) }

    const isMatch = (id) => {
        const clickedCard = cards.find(card => card.id === id)
        const flippedCard = cards.find(card => flipped[0] === card.id)
        return flippedCard.type === clickedCard.type
    }

    const resetCards = () => {
        setFlipped([])
        setDisabled(false)
    }

    const flipCard = (id) => {
        setDisabled(true)
        if (flipped.length === 0) {
            setFlipped([id])
            setDisabled(false)
        } else {
            if (sameCardClicked(id)) {
                resetCards()
                return
            }

            setFlipped([flipped[0], id])

            if (isMatch(id)) {
                setSolved([...solved, flipped[0], id])
                if (solvedPairs === 5)
                    deneme = true
                dispatch(increaseSolved())
                resetCards()
            } else {
                setTimeout(resetCards, 1000)
            }
        }
        GameOver()
    }

    const GameOver = () => {
        if (!deneme)
            return
        
        let point = solvedPairs * 10
        
        if (second !== 0) {
            point *= second
            setSecond(0)
        }
        
        dispatch(updateBestScore({ id: currUser.id, score: point }))
        // alert('Game Over')
        setTimeout(dispatch(changePage(2)),500)
        return
    }

    return (
        <div className="container-fluid">
            <div className="row">
                {cards.map((card) => (
                    <div className="col-4 mb-2"
                        key={card.id}
                    >
                        <Card
                            id={card.id}
                            type={card.type}
                            flipped={flipped.includes(card.id)}
                            solved={solved.includes(card.id)}
                            handleClick={flipCard}
                            disabled={disabled || solved.includes(card.id)}
                        />
                    </div>
                ))}
            </div>
            <div className="row board-footer">
                <div className="col-6 timer">
                    <span>{second}</span>
                </div>
                <div className="col-6">

                </div>
            </div>
        </div>
    )
}