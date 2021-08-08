import React, { useState, useEffect} from 'react'
import { Link } from 'react-router-dom'
import { FetchStatusT } from '../constants'
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
            const response = await fetch(`http://localhost:4000/v1/genres`)
            if(response.status !== 200) {
                setFetchStatus('error')
                setError(`An Error Occurred: ${response.statusText}`)
            }
            const { genres } = await response.json()
            setGenres(genres)
            setFetchStatus('success') 
        } catch (err) {
            setFetchStatus('error')
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
          {fetchStatus === 'success' && 
            <ul>
                {genres.map( genre => (
                    <li key={genre.id}>
                        <Link to={`/genre/${genre.id}`}>{genre.genreName}</Link>
                    </li>
                ))}
            </ul>
          }
        </>
    )
  }