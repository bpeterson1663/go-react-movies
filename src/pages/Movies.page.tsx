import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { FetchStatusT } from '../constants'
import { getMovieList } from '../api'

interface MovieT {
  id: number
  title: string
  runtime: number
}

export default function Movies(): JSX.Element {
  const [movies, setMovies] = useState<MovieT[]>([])
  const [fetchStatus, setFetchStatus] = useState<FetchStatusT>('idle')
  const [error, setError] = useState('')
  const getMovies = async () => {
    setFetchStatus('pending')
    try {
      const { movies } = await getMovieList()
      setFetchStatus('success')
      setMovies(movies)
    } catch (err) {
      setFetchStatus('error')
      setError(`An Error Occurred: ${err}`)
    }
  }
  useEffect(() => {
    getMovies()
  }, [])
  return (
    <>
      <h2>Movies</h2>
      {fetchStatus === 'pending' && <h3>Loading...</h3>}
      {fetchStatus === 'error' && <h3>{error}</h3>}
      {fetchStatus === 'success' && (
        <div className="list-group">
          {movies.map((m) => (
            <Link key={m.id} to={`/movies/${m.id}`} className="list-group-item list-group-item-action">
              {m.title}
            </Link>
          ))}
        </div>
      )}
    </>
  )
}
