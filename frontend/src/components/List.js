import React, { useState, useEffect } from 'react'
import Card from './Card'
import './styles/List.css'
const URI = 'http://localhost:4000/api/notes' 

function List() {
    const [notes, setNotes] = useState([])

    async function getNotes() {
        const data = await fetch(URI)
        const res = await data.json()
        setNotes(res)
    }

    useEffect(() => {
        getNotes()
    }, [])

    return (
        <div className="list__notes">
            {
                notes.map((res, i) => {
                    return <Card key={i} notes={res} notekey={i}/>
                })
            }
        </div>
    )
}

export default List