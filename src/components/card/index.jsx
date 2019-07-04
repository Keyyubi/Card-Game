import React from 'react'
import PropTypes from 'prop-types'

import './style.css'

export default function Card({ 
    handleClick,
    id,
    type,
    flipped,
    solved,
    disabled,
}) {
    return (
        <div
            className="card"
            className={`flip-container card ${flipped ? 'flipped' : ''}`}
            onClick={() => disabled ? null : handleClick(id)}
        >
            <div className="flipper">
                <img 
                    alt=""
                    className={flipped ? 'front' : 'back'}
                    src={flipped || solved ? `/img/characters/${type}.png` : '/img/back.svg'}
                />
            </div>
        </div>
    )
}

Card.propTypes = {
    handleClick: PropTypes.func.isRequired,
    id: PropTypes.number.isRequired,
    flipped: PropTypes.bool.isRequired,
    solved: PropTypes.bool.isRequired,
    back: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    width: PropTypes.number.isRequired,
    disabled: PropTypes.bool.isRequired,
}