import React from 'react'
import './styles/Navigation.css'
import { Link } from 'react-router-dom'

const Navigation = () => (
    <nav className="navbar">
        <div className="navbar__title">
            <Link to="/" className="navbar-title">Tasks</Link>
        </div>
        <div className="navbar__links">
            <Link to="/create">Create Notes</Link>
            <Link to="/users">Create User</Link>
        </div>
    </nav>
)

export default Navigation