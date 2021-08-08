import React from 'react'
import {useRouteMatch, Link} from 'react-router-dom'

export default function Genres() {
    let { path } = useRouteMatch()
    return (
      <div>
      <h2>Genres</h2>
      <ul>
        <li><Link to={`${path}/comedy`}>Comedy</Link></li>
  
        <li><Link to={`${path}/drama`}>Drama</Link></li>
      </ul>
      </div>
    )
  }