import React from 'react'
import { Link } from 'react-router-dom'
export default function NavBar(): JSX.Element {
  return (
    <nav>
      <ul className="list-group">
        <li className="list-group-item">
          <Link to="/">Home</Link>
        </li>
        <li className="list-group-item">
          <Link to="/movies">Movies</Link>
        </li>
        <li className="list-group-item">
          <Link to="/genres">Genres</Link>
        </li>
        <li className="list-group-item">
          <Link to="/admin/add">Add Movie</Link>
        </li>
        <li className="list-group-item">
          <Link to="/admin">Manage Catalogue</Link>
        </li>
      </ul>
    </nav>
  )
}
