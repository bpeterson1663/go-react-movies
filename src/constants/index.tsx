export type FetchStatusT = 'idle' | 'pending' | 'success' | 'error'

export interface GenreT {
  id: string
  genreName: string
}

type MPAARatingT = 'G' | 'PG' | 'PG-13' | 'R' | 'MC17'

export interface MovieT {
  id: number
  title: string
  runtime: number
  genres: GenreT[]
  mpaaRating: MPAARatingT
  releaseDate: string
  rating: number
  description: string
}

export interface AlertT {
  alertType: 'd-none' | 'alert-success' | 'alert-danger'
  message: string
}

export interface UserAuthT {
  email: string
  password: string
}
