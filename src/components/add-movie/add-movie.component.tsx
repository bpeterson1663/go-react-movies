import React, { useState } from 'react'
import { MovieT } from '../../constants'
import { FormInput, FormSelect, FormTextarea } from '../../components'
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
        <FormInput label="" type="hidden" name="id" id="id" value={movie.id} handleChange={handleInputChange} />
        <FormInput 
            label="Title"
            id="title"
            name="title"
            type="text"
            value={movie.title}
            handleChange={handleInputChange} />
        <FormInput 
            label="Release Date"
            id="releaseDate"
            name="releaseDate"
            type="text"
            value={movie.releaseDate}
            handleChange={handleInputChange} />
        <FormInput 
            label="Runtime"
            id="runtime"
            name="runtime"
            type="number"
            value={movie.runtime}
            handleChange={handleInputChange} />
        <FormSelect 
            label="MPAA Rating"
            id="mpaaRating"
            value={movie.mpaaRating}
            name="mpaaRating"
            options={["G", "PG", "PG-13", "R", "NC17"]}
            handleChange={handleSelectChange} />
        <FormInput 
            label="Rating"
            id="rating"
            name="rating"
            type="text"
            value={movie.rating}
            handleChange={handleInputChange} />
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
      </form>
    </>
  )
}
