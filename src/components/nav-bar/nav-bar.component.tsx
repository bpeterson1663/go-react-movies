import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import AuthContext from '../../context/auth-context'

export default function NavBar(): JSX.Element {
  const auth = useContext(AuthContext)

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
        {auth.jwt !== '' && (
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
