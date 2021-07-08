import {
    GET_MOVIE_LIST,
    SAVE_MOVIE_LIST,
    ERROR_GET_MOVIE_LIST,
    UPDATE_MOVIE,
    RESET_MOVIE,
    SAVE_AUTO_COMPLETE,
    AUTO_COMPLETE,
    FAIL_AUTO_COMPLETE
  } from './actionTypes'
  
  const initialState = {
    error: null,
    loading: false,
    listMovies: [],
    // loadingAutoComplete: false,
    // autoCompleteList: [],
    // errorAutoComplete: null
  }
  
  const home = (state = initialState, action) => {
    switch (action.type) {
      case GET_MOVIE_LIST:
        state = {
          ...state,
          loading: true,
          error: null,
        }
        break
      case SAVE_MOVIE_LIST:
        state = {
          ...state,
          loading: false,
          listMovies: action.payload
        }
        break
      case UPDATE_MOVIE:
        state = {
          ...state,
          listMovies: [...state.listMovies, ...action.payload],
          loading: false
        }
      break
      case RESET_MOVIE:
        state  ={
          ...state,
          listMovies: []
        }
        break
      case ERROR_GET_MOVIE_LIST:
        state = { ...state, loading: false, error: action.payload }
        break
      // case SAVE_AUTO_COMPLETE:
      //   state = {
      //     ...state,
      //     loadingAutoComplete: false,
      //     autoCompleteList: action.payload
      //   }
      // break
      // case AUTO_COMPLETE:
      //   state = {
      //     ...state,
      //     loadingAutoComplete: true
      //   }
      // break
      // case FAIL_AUTO_COMPLETE:
      //   state = {
      //     ...state,
      //     loadingAutoComplete: false,
      //     errorAutoComplete: action.payload
      //   }
      // break
      default:
        state = { ...state }
        break
    }
    return state
  }
  
  export default home
  