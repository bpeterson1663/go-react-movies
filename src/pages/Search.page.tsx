import React from 'react'
import { useQuery } from '@apollo/client'
import { Link } from 'react-router-dom'
import { FETCH_MOVIES } from '../queries'
interface MovieT {
  id: number
  title: string
  description: string
  year: number
}

const Search = () => {
  const { loading, data } = useQuery(FETCH_MOVIES)
  return (
    <div>
      {loading && <h3>Loading...</h3>}
      {!loading && (
        <div className="list-group">
          {data?.list.map((m: MovieT) => (
            <Link key={m.id} to={`/movies/${m.id}`} className="list-group-item list-group-item-action">
              {m.title}
            </Link>
          ))}
        </div>
      )}
    </div>
  )
}

export default Search
