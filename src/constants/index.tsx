export type FetchStatusT = 'idle' | 'pending' | 'success' | 'error'

export interface GenreT{
    id: string,
    genreName: string,
}

export interface MovieT {
    id: string,
    title: string,
    runtime: number,
    genres: GenreT[],
    mpaaRating: string,
}