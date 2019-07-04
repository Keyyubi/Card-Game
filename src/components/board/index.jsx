import React from 'react'
import PropTypes from 'prop-types'

import Card from '../card'

export default function Board({
    disabled,
    cards,
    flipped,
    solved,
    handleClick
}) {
    return (
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
                        handleClick={handleClick}
                        disabled={disabled || solved.includes(card.id)}
                    />
                </div>
            ))}
        </div>
    )
}

Card.propTypes = {
    disabled: PropTypes.bool.isRequired,
    cards: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
    flipped: PropTypes.arrayOf(PropTypes.number).isRequired,
    solved: PropTypes.arrayOf(PropTypes.number).isRequired,
    handleClick: PropTypes.func.isRequired,
}