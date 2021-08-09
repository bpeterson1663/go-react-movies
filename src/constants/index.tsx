export type FetchStatusT = 'idle' | 'pending' | 'success' | 'error'

export interface GenreT{
    id: string,
    genreName: string,
}

type MPAARatingT = 'G' | 'PG' | 'PG-13' | 'R' | 'MC17'

export interface MovieT {
    id: string,
    title: string,
    runtime: number,
    genres: GenreT[],
    mpaaRating: MPAARatingT,
    releaseDate: string,
    rating: string,
    description: string,
}