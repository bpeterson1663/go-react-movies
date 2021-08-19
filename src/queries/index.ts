import { gql } from '@apollo/client'

export const FETCH_MOVIES = gql`
  query SearchMovies($titleContains: String!) {
    search(titleContains: $titleContains) {
      id
      title
    }
  }
`
