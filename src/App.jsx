import React, { useState, useEffect } from 'react';

import Board from './components/board'
import createDeck from './deck'

function App() {
  const [cards, setCards] = useState([])
  const [flipped, setFlipped] = useState([])
  const [solved, setSolved] = useState([])
  const [disabled, setDisabled] = useState(false)

  useEffect(() => {
    setCards(createDeck())
  }, [])

  const sameCardClicked = (id) => flipped.includes(id)
  const isMatch = (id) => {
    const clickedCard = cards.find(card => card.id === id)
    const flippedCard = cards.find(card => flipped[0] === card.id)
    return flippedCard.type === clickedCard.type
  }
  const resetCards = () => {
    setFlipped([])
    setDisabled(false)
  }
  const handleClick = (id) => {
    setDisabled(true)
    if (flipped.length === 0) {
      setFlipped([id])
      setDisabled(false)
    } else {
      if (sameCardClicked(id))
        return
      setFlipped([flipped[0], id])

      if (isMatch(id)) {
        setSolved([...solved, flipped[0], id])
        resetCards()
      } else {
        setTimeout(resetCards, 1500)
      }
    }
  }

  return (
    <div className="container-fluid mt-4">
      <Board
        cards={cards}
        flipped={flipped}
        handleClick={handleClick}
        solved={solved}
        disabled={disabled}
      />
    </div>
  );
}

export default App;
