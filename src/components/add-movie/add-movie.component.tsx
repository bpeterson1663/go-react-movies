import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import { Link, useHistory } from 'react-router-dom'
import { MovieT, FetchStatusT, AlertT } from '../../constants'
import { FormInput, FormSelect, FormTextarea, Alert } from '../../components'
import './add-movie.styles.css'

interface AddMovieParams {
  id: string
}
const DEFAULT_MOVIE: MovieT = {
  id: '0',
  title: '',
  releaseDate: '',
  runtime: '',
  mpaaRating: 'G',
  rating: '',
  description: '',
  genres: [],
}
export default function AddMovie(): JSX.Element {
  const [movie, setMovie] = useState<MovieT>(DEFAULT_MOVIE)
  const [fetchStatus, setFetchStatus] = useState<FetchStatusT>('idle')
  const [error, setError] = useState('')
  const [alert, setAlert] = useState<AlertT>({ alertType: 'd-none', message: '' })
  const { id } = useParams<AddMovieParams>()
  let history = useHistory()
  const getMovie = async (movieId: number) => {
    if (movieId > 0) {
      setFetchStatus('pending')
      try {
        const response = await fetch(`http://localhost:4000/v1/movie/${movieId}`)
        if (response.status !== 200) {
          setFetchStatus('error')
          setError(`An Error Occurred: ${response.statusText}`)
        }
        const { movie } = await response.json()
        const releaseDate = new Date(movie.releaseDate)
        movie.releaseDate = releaseDate.toISOString().split('T')[0]
        setMovie(movie)
        setFetchStatus('success')
      } catch (err) {
        setFetchStatus('error')
      }
    } else {
      setMovie(DEFAULT_MOVIE)
      setFetchStatus('success')
    }
  }
  useEffect(() => {
    getMovie(parseInt(id))
  }, [id])

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    let value = event.target.value
    let name = event.target.name
    setMovie((values) => ({ ...values, [name]: value }))
  }

  const handleSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    let value = event.target.value
    let name = event.target.name
    setMovie((values) => ({ ...values, [name]: value }))
  }

  const handleTextareaChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    let value = event.target.value
    let name = event.target.name
    setMovie((values) => ({ ...values, [name]: value }))
  }

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault()
    const { id, runtime, rating } = movie
    const request = { ...movie, id: parseInt(id), runtime: parseInt(runtime), rating: parseInt(rating) }
    try {
      const response = await fetch('http://localhost:4000/v1/admin/editmovie', {
        method: 'POST',
        body: JSON.stringify(request),
      })
      if (response.status !== 200) {
        setAlert({ alertType: 'alert-danger', message: response.statusText })
      } else {
        setAlert({ alertType: 'alert-success', message: 'Changes saved!' })
      }
    } catch (err) {
      setAlert({ alertType: 'alert-danger', message: err.message })
    }
  }

  const confirmDelete = async () => {
    const confirm = window.confirm('Are you sure you want to delete this movie?')
    if (confirm) {
      try {
        const response = await fetch(`http://localhost:4000/v1/admin/movie/${id}`, {
          method: 'DELETE',
        })
        if (response.status !== 200) {
          setAlert({ alertType: 'alert-danger', message: response.statusText })
        } else {
          history.push('/admin')
        }
      } catch (err) {
        setAlert({ alertType: 'alert-danger', message: err.message })
      }
    }
  }

  return (
    <>
      <h2>Add/Edit Movie</h2>
      <Alert alertType={alert.alertType} message={alert.message} />
      <hr />
      {fetchStatus === 'pending' && <h3>Loading...</h3>}
      {fetchStatus === 'error' && <h3>{error}</h3>}
      {fetchStatus === 'success' && (
        <form onSubmit={handleSubmit}>
          <FormInput label="" type="hidden" name="id" id="id" value={movie.id} handleChange={handleInputChange} />
          <FormInput
            label="Title"
            id="title"
            name="title"
            type="text"
            value={movie.title}
            handleChange={handleInputChange}
          />
          <FormInput
            label="Release Date"
            id="releaseDate"
            name="releaseDate"
            type="text"
            value={movie.releaseDate}
            handleChange={handleInputChange}
          />
          <FormInput
            label="Runtime"
            id="runtime"
            name="runtime"
            type="number"
            value={movie.runtime}
            handleChange={handleInputChange}
          />
          <FormSelect
            label="MPAA Rating"
            id="mpaaRating"
            value={movie.mpaaRating}
            name="mpaaRating"
            options={['G', 'PG', 'PG-13', 'R', 'NC17']}
            handleChange={handleSelectChange}
          />
          <FormInput
            label="Rating"
            id="rating"
            name="rating"
            type="text"
            value={movie.rating}
            handleChange={handleInputChange}
          />
          <FormTextarea
            label="Description"
            id="description"
            name="description"
            rows={3}
            handleChange={handleTextareaChange}
            value={movie.description}
          />
          <hr />

          <button className="btn btn-primary">Save</button>
          <Link to="/admin" className="btn btn-warning ms-1">
            Cancel
          </Link>
          {movie.id !== '0' && (
            <a href="#!" onClick={confirmDelete} className="btn btn-danger ms-1">
              Delete
            </a>
          )}
        </form>
      )}
    </>
  )
}
