import React, { useEffect, useState } from 'react'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'
import axios from 'axios'
import './styles/form.css'

function CreateNotes() {
    const [note, setNote] = useState({
        title: '',
        content: '',
        date: new Date(),
        author: '',
        _id: ''
    })

    const onSubmit = (e) => {
        e.preventDefault()
        const newNote = {
            title: note.title,
            content: note.content,
            date: note.date,
            author: note.author,
        }
        axios.post('http://localhost:4000/api/notes', newNote)
        window.location.href = '/'
    }

    const inputChange = (e) => {
        setNote({
            ...note,
            [e.target.name]: e.target.value
        })
    }

    // const dateChange = date => {
    //     setNote({ note: note.date })
    // }



    return (
        <div className="form">
            <div className="form__card">
                <h4>Create note</h4>
                <form onSubmit={onSubmit}>
                    <div>
                        <input type="text"
                            placeholder="Enter title note"
                            name="title"
                            value={note.title}
                            onChange={inputChange}
                        />
                    </div>
                    <div>
                        <textarea placeholder="Enter content" 
                            cols="30" 
                            rows="10"
                            name="content"
                            value={note.content}
                            onChange={inputChange}
                            required>
                        </textarea>
                    </div>
                    <div>
                        <input type="text" 
                            placeholder="Author"
                            name="author"
                            value={note.author}
                            onChange={inputChange}
                        />
                    </div>
                    <div>
                        <button className="btn-submit">Save note</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default CreateNotes