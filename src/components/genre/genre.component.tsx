import React from 'react'
interface GenreT {
    title: string
}
export default function Genre({title}: GenreT): JSX.Element {
    return (
        <h2>Genre {title}</h2>
    )
}