import React, { useState, useEffect } from 'react'
import Card from './Card'
import './styles/List.css'
import axios from 'axios'
const URI = 'http://localhost:4000/api/notes'

function List() {
    const [notes, setNotes] = useState([])

    async function getNotes() {
        const data = await axios.get(URI)
        setNotes(data.data)
    }

    useEffect(() => {
        getNotes()
    }, [])

    return (
        <div className="list__notes">
            <div className="cards">
                {
                    notes.map((res, i) => {
                        return <Card key={i} notes={res} notekey={i}/>
                    })
                }
            </div>
        </div>
    )
}

export default List