import {GET_MOVIE_DETAIL} from './actionTypes'


export const getMovieDetail = (params) => ({
    type: GET_MOVIE_DETAIL,
    payload: {params}
})
