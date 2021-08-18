import { gql } from '@apollo/client'

export const FETCH_MOVIES = gql`
  {
    list {
      id
      title
    }
  }
`
