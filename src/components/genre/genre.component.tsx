import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useParams, useLocation } from 'react-router'
import { FetchStatusT, MovieT } from '../../constants'
import { getMoviesByGenreId } from '../../api'
interface GenreParams {
  id: string
}
interface stateType {
  genreName: string
}

export default function Genre(): JSX.Element {
  const [movies, setMovies] = useState<MovieT[]>([])
  const [fetchStatus, setFetchStatus] = useState<FetchStatusT>('idle')
  const [error, setError] = useState('')
  const { id } = useParams<GenreParams>()
  const { state } = useLocation<stateType>()

  const getMovies = async (genreId: string) => {
    setFetchStatus('pending')
    try {
      const { movies } = await getMoviesByGenreId(genreId)

      if (movies.length) {
        setMovies(movies)
      }
      setFetchStatus('success')
    } catch (err) {
      setFetchStatus('error')
      setError(`An Error Occurred: ${err}`)
    }
  }
  useEffect(() => {
    getMovies(id)
  }, [id])

  return (
    <>
      <h2>Genre: {state.genreName}</h2>
      {fetchStatus === 'pending' && <h3>Loading...</h3>}
      {fetchStatus === 'error' && <h3>{error}</h3>}
      {fetchStatus === 'success' && (
        <div className="list-group">
          {movies.map((movie) => (
            <Link key={movie.id} to={`/genre/${movie.id}`} className="list-group-item list-group-item-action">
              {movie.title}
            </Link>
          ))}
        </div>
      )}
    </>
  )
}
