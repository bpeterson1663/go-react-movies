import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import { FetchStatusT } from '../../constants'

interface MovieParams {
  id: string
}

interface GenreT {
  id: string
  genreName: string
}

interface MovieT {
  id: string
  title: string
  runtime: number
  genres: GenreT[]
  mpaaRating: string
}
export default function Movie(): JSX.Element {
  const [movie, setMovie] = useState<MovieT>({} as MovieT)
  const [fetchStatus, setFetchStatus] = useState<FetchStatusT>('idle')
  const [error, setError] = useState('')
  const { id } = useParams<MovieParams>()
  const getMovie = async (id: string) => {
    setFetchStatus('pending')
    try {
      const response = await fetch(`http://localhost:4000/v1/movie/${id}`)
      if (response.status !== 200) {
        setFetchStatus('error')
        setError(`An Error Occurred: ${response.statusText}`)
      }
      const { movie } = await response.json()
      setMovie(movie)
      setFetchStatus('success')
    } catch (err) {
      setFetchStatus('error')
    }
  }
  useEffect(() => {
    getMovie(id)
  }, [id])
  return (
    <>
      <h2>Movie: {movie.title}</h2>
      {fetchStatus === 'pending' && <h3>Loading..</h3>}
      {fetchStatus === 'error' && <h3>{error}</h3>}
      {fetchStatus === 'success' && (
        <>
          <div className="float-start">
            <small>Rating: {movie.mpaaRating}</small>
          </div>
          <div className="float-end">
            {movie.genres.map((g) => (
              <span className="badge bg-secondary me-1" key={g.id}>
                {g.genreName}
              </span>
            ))}
          </div>
          <table className="table table-component table-striped">
            <thead></thead>
            <tbody>
              <tr>
                <td>
                  <strong>Title:</strong>
                </td>
                <td>{movie.title}</td>
              </tr>
              <tr>
                <td>
                  <strong>Run Time:</strong>
                </td>
                <td>{movie.runtime}</td>
              </tr>
            </tbody>
          </table>
        </>
      )}
    </>
  )
}
