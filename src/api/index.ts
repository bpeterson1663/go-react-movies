import { GenreT, MovieT, UserAuthT } from '../constants'

interface RequestT extends Omit<MovieT, 'id' | 'runtime' | 'rating'> {
  id: number
}

interface ResponseType {
  movie: MovieT
  movies: MovieT[]
  genres: GenreT[]
}
export const uri =
  process.env.REACT_APP_MODE === 'production' ? 'https://go-movies-backend.herokuapp.com' : 'http://localhost:4000'

export const getMovieWithId = async (movieId: number): Promise<ResponseType> =>
  await fetch(`${uri}/v1/movie/${movieId}`).then((res) => res.json())

export const getMovieList = async (): Promise<ResponseType> => await fetch(`${uri}/v1/movies`).then((res) => res.json())

export const getMoviesByGenreId = async (genreId: string): Promise<ResponseType> =>
  await fetch(`${uri}/v1/movies/${genreId}`).then((res) => res.json())

export const addEditMovie = async (jwt: string, request: RequestT) => {
  const headers = new Headers()
  headers.append('Content-Type', 'application/json')
  headers.append('Authorization', 'Bearer ' + jwt)
  return await fetch(`${uri}/v1/admin/editmovie`, {
    method: 'POST',
    body: JSON.stringify(request),
    headers,
  })
}

export const getGenresList = async (): Promise<ResponseType> => fetch(`${uri}/v1/genres`).then((res) => res.json())

export const deleteMovie = async (jwt: string, id: string) => {
  const headers = new Headers()
  headers.append('Content-Type', 'application/json')
  headers.append('Authorization', 'Bearer ' + jwt)
  return await fetch(`${uri}/v1/admin/movie/${id}`, {
    method: 'DELETE',
    headers,
  })
}

export const signIn = async (userAuth: UserAuthT): Promise<{ token: string }> => {
  return await fetch(`${uri}/v1/signin`, {
    method: 'POST',
    body: JSON.stringify(userAuth),
  }).then((res) => res.json())
}
