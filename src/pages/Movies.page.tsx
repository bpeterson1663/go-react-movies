import React, { useEffect, useState} from 'react'
interface MovieT {
    id: number,
    title: string,
    runtime: number
}
export default function Movies(): JSX.Element {
    const [movies, setMovies] = useState<MovieT[]>([])
    
    useEffect(() => {
        setMovies([
            {id: 1, title: "The Shawshank Redemption", runtime: 142 },
            {id: 2, title: "The Godfather", runtime: 175 },
            {id: 3, title: "The Dark Knight", runtime: 153},
        ])
    }, [])
    return (
        <>
          <h2>Movies</h2>
          <ul>
              {movies.map( m => (
                  <li key={m.id}>
                      {m.title}
                  </li>
              ))}
          </ul>
        </>
    )
}