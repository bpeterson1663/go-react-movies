import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'

interface MovieParams {
    id: string
}

interface MovieT {
    id: string,
    title: string,
    runTime: number
}
export default function Movie(): JSX.Element{
    const [movie, setMovie] = useState<MovieT>({} as MovieT)
    const { id } = useParams<MovieParams>();

    useEffect(() => {
        setMovie({
            id: id,
            title: "Title of the Movie",
            runTime: 150
        })
    }, [id])
    return (
        <>
            <h2>Movie: {movie.title}</h2>
            <table className="table table-component table-striped">
                <thead></thead>
                <tbody>
                    <tr>
                        <td><strong>Title:</strong></td>
                        <td>{movie.title}</td>
                    </tr>
                    <tr>
                        <td><strong>Run Time:</strong></td>
                        <td>{movie.runTime}</td>
                    </tr>
                </tbody>

            </table>
        </>        
    )
}