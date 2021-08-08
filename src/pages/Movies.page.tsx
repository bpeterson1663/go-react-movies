import React, { useEffect, useState} from 'react'
import { Link } from 'react-router-dom'
import { FetchStatusT } from '../constants'

interface MovieT {
    id: number,
    title: string,
    runtime: number
}

export default function Movies(): JSX.Element {
    const [movies, setMovies] = useState<MovieT[]>([])
    const [fetchStatus, setFetchStatus] = useState<FetchStatusT>('idle')
    const [error, setError] = useState('')
    const getMovies = async () => {
        setFetchStatus('pending')
        try {
            const response = await fetch("http://localhost:4000/v1/movies")
            if(response.status !== 200) {
                setFetchStatus('error')
                setError(`An Error Occurred: ${response.statusText}`)
            }
            const { movies } = await response.json()
            setFetchStatus('success')
            setMovies(movies)
        } catch (err) {
            setFetchStatus('error')
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
          {fetchStatus === 'success' && 
            <ul>
                {movies.map( m => (
                    <li key={m.id}>
                        <Link to={`/movies/${m.id}`}>{m.title}</Link>
                    </li>
                ))}
            </ul>
          }
        </>
    )
}