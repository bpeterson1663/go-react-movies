import React, { useEffect } from 'react'
import { useLazyQuery } from '@apollo/client'
import { Link } from 'react-router-dom'
import { FETCH_MOVIES } from '../queries'
import { FormInput } from '../components'
interface MovieT {
  id: number
  title: string
  description: string
  year: number
}

const Search = () => {
  const [executeSearch, { data, loading }] = useLazyQuery(FETCH_MOVIES)

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    let value = event.target.value
    executeSearch({
      variables: { titleContains: value.toLowerCase() },
    })
  }
  useEffect(() => {
    executeSearch({
      variables: { titleContains: '' },
    })
  }, [executeSearch])
  return (
    <div>
      <FormInput label="Search" id="search" name="search" type="text" handleChange={handleInputChange} />
      {loading && <h3>Loading...</h3>}
      {!loading && (
        <div className="list-group">
          {data?.search.map((m: MovieT) => (
            <Link key={m.id} to={`/movies/${m.id}`} className="list-group-item list-group-item-action">
              {m.title}
            </Link>
          ))}
        </div>
      )}
    </div>
  )
}

export default Search
