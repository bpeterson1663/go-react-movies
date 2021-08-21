import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { FetchStatusT } from '../constants'
import { getGenresList } from '../api'
interface GenreT {
  id: string
  genreName: string
}

export default function Genres() {
  const [genres, setGenres] = useState<GenreT[]>([])
  const [fetchStatus, setFetchStatus] = useState<FetchStatusT>('idle')
  const [error, setError] = useState('')
  const getGenres = async () => {
    setFetchStatus('pending')
    try {
      const { genres } = await getGenresList()
      setGenres(genres)
      setFetchStatus('success')
    } catch (err) {
      setFetchStatus('error')
      setError(`An Error Occurred: ${err}`)
    }
  }

  useEffect(() => {
    getGenres()
  }, [])
  return (
    <>
      <h2>Genres</h2>
      {fetchStatus === 'pending' && <h3>Loading...</h3>}
      {fetchStatus === 'error' && <h3>{error}</h3>}
      {fetchStatus === 'success' && (
        <div className="list-group">
          {genres.map((genre) => (
            <Link
              key={genre.id}
              className="list-group-item list-group-item-action"
              to={{
                pathname: `/genre/${genre.id}`,
                state: {
                  genreName: genre.genreName,
                },
              }}
            >
              {genre.genreName}
            </Link>
          ))}
        </div>
      )}
    </>
  )
}
