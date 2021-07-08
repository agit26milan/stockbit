import {AUTO_COMPLETE, GET_MOVIE_LIST, RESET_MOVIE} from './actionTypes'


export const getMovieList = (params) => ({
    type: GET_MOVIE_LIST,
    payload: {params}
})

export const resetMoviee = () => ({
    type: RESET_MOVIE
})

export const getAutoCompleteList = (params) => ({
    type: AUTO_COMPLETE,
    payload: {params}
})