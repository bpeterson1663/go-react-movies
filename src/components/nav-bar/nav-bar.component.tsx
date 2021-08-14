import React from 'react'
import { Link } from 'react-router-dom'
export default function NavBar({ jwt }: { jwt: string }): JSX.Element {
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
        {jwt !== '' && (
          <>
            <li className="list-group-item">
              <Link to="/admin/movie/0">Add Movie</Link>
            </li>
            <li className="list-group-item">
              <Link to="/admin">Manage Catalogue</Link>
            </li>
          </>
        )}
      </ul>
    </nav>
  )
}
