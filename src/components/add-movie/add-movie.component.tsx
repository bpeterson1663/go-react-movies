import React, { useEffect, useState } from 'react'
import { MovieT } from '../../constants'
import './add-movie.styles.css'

export default function AddMovie () {
    const [movie, setMovie] = useState<MovieT>({} as MovieT)

    return (
        <>
        <h2>Add/Edit Movie</h2>
        <hr />
        <form method="post">
            <div className="mb-3">
                <label htmlFor="title" className="form-label">Title</label>
                <input type="text" className="form-control" id="title" name="title" value={movie.title}/>
            </div>
            <div className="mb-3">
                <label htmlFor="releaseDate" className="form-label">Release Date</label>
                <input type="text" className="form-control" id="releaseDate" name="releaseDate" value={movie.releaseDate}/>
            </div>
            <div className="mb-3">
                <label htmlFor="runtime" className="form-label">Runtime</label>
                <input type="text" className="form-control" id="runtime" name="runtime" value={movie.runtime}/>
            </div>
            <div className="mb-3">
                <label htmlFor="mpaaRating" className="form-label">MPAA Rating</label>
                <select className="form-select" value={movie.mpaaRating}>
                    <option className="form-select">Choose...</option>
                    <option className="form-select" value="G">G</option>
                    <option className="form-select" value="PG">PG</option>
                    <option className="form-select" value="PG-13">PG-13</option>
                    <option className="form-select" value="R">R</option>
                    <option className="form-select" value="NC17">NC17</option>
                </select>
            </div>
            <div className="mb-3">
                <label htmlFor="rating" className="form-label">Rating</label>
                <input type="text" className="form-control" id="rating" name="rating" value={movie.rating}/>
            </div>
            <div className="mb-3">
                <label htmlFor="description" className="form-label">Description</label>
                <textarea className="form-control" rows={3} id="description" name="description">
                    {movie.description}
                </textarea>
            </div>
            <hr />

            <button className="btn btn-primary">Save</button>
        </form>
        </>
    )
}