import {
   GET_MOVIE_DETAIL,
   SUCCESS_GET_MOVIE_DETAIL,
   FAIL_GET_MOVIE_DETAIL
  } from './actionTypes'
  
  const initialState = {
    error: null,
    loading: false,
    detail: null
  }
  
  const detail = (state = initialState, action) => {
    switch (action.type) {
      case GET_MOVIE_DETAIL:
        state = {
          ...state,
          loading: true,
          error: null,
        }
        break
      case SUCCESS_GET_MOVIE_DETAIL:
        state = {
          ...state,
          loading: false,
          detail: action.payload
        }
        break
      case FAIL_GET_MOVIE_DETAIL:
        state = {
          ...state,
          error: action.payload,
          loading: false
        }
      break
      default:
        state = { ...state }
        break
    }
    return state
  }
  
  export default detail
  