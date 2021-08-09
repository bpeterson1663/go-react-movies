import React, { useState } from 'react'
import { MovieT } from '../../constants'
import './add-movie.styles.css'

const DEFAULT_MOVIE: MovieT = {
  id: '0',
  title: '',
  releaseDate: '',
  runtime: 0,
  mpaaRating: 'G',
  rating: '',
  description: '',
  genres: [],
}
export default function AddMovie() {
  const [movie, setMovie] = useState<MovieT>(DEFAULT_MOVIE)
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

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault()
  }
  return (
    <>
      <h2>Add/Edit Movie</h2>
      <hr />
      <form onSubmit={handleSubmit}>
        <input type="hidden" name="id" id="id" value={movie.id} onChange={handleInputChange} />
        <div className="mb-3">
          <label htmlFor="title" className="form-label">
            Title
          </label>
          <input
            type="text"
            className="form-control"
            id="title"
            name="title"
            value={movie.title}
            onChange={handleInputChange}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="releaseDate" className="form-label">
            Release Date
          </label>
          <input
            type="text"
            className="form-control"
            id="releaseDate"
            name="releaseDate"
            value={movie.releaseDate}
            onChange={handleInputChange}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="runtime" className="form-label">
            Runtime
          </label>
          <input
            type="text"
            className="form-control"
            id="runtime"
            name="runtime"
            value={movie.runtime}
            onChange={handleInputChange}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="mpaaRating" className="form-label">
            MPAA Rating
          </label>
          <select name="mpaaRating" className="form-select" value={movie.mpaaRating} onChange={handleSelectChange}>
            <option className="form-select">Choose...</option>
            <option className="form-select" value="G">
              G
            </option>
            <option className="form-select" value="PG">
              PG
            </option>
            <option className="form-select" value="PG-13">
              PG-13
            </option>
            <option className="form-select" value="R">
              R
            </option>
            <option className="form-select" value="NC17">
              NC17
            </option>
          </select>
        </div>
        <div className="mb-3">
          <label htmlFor="rating" className="form-label">
            Rating
          </label>
          <input
            type="text"
            className="form-control"
            id="rating"
            name="rating"
            value={movie.rating}
            onChange={handleInputChange}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="description" className="form-label">
            Description
          </label>
          <textarea
            className="form-control"
            rows={3}
            id="description"
            name="description"
            onChange={handleTextareaChange}
            value={movie.description}
          />
        </div>
        <hr />

        <button className="btn btn-primary">Save</button>
      </form>
    </>
  )
}
