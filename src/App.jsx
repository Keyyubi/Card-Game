import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux'

import Board from './components/board'
import Landing from './components/langding'
import createDeck from './deck'

function App() {
  const [cards, setCards] = useState([])
  const [flipped, setFlipped] = useState([])
  const [solved, setSolved] = useState([])
  const [disabled, setDisabled] = useState(false)
  let pageState = useSelector(state => state.page)

  useEffect(() => {
    setCards(createDeck())
  }, [])

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
        resetCards()
      } else {
        setTimeout(resetCards, 1000)
      }
    }
  }

  if (pageState === 0)
    return (
      <Landing />
    );
  else if (pageState === 1)
    return (
      <div className="container-fluid mt-4">
        <Board
          cards={cards}
          flipped={flipped}
          handleClick={flipCard}
          solved={solved}
          disabled={disabled}
        />
      </div>
    );
  else
    return (
      <div>
        Result
      </div>
    );
}

export default App;
