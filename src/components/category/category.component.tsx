import React from 'react'
interface CategoryT {
    title: string
}
export default function Category({title}: CategoryT): JSX.Element {
    return (
        <h2>Category {title}</h2>
    )
}