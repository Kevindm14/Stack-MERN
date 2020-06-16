import React from 'react'
import './styles/Card.css'

const Card = ({ notes }) => (
    <div className="card">
        <div className="card__head">
            <h4>{notes.title}</h4>
        </div>
        <div className="card__body">
            <small>{notes.author.toLowerCase()}</small>
            <p>{notes.content}</p>
        </div>
    </div>
)

export default Card