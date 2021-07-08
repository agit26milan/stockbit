import { takeEvery, put, call } from 'redux-saga/effects'

// Login Redux States
import { GET_MOVIE_LIST, SAVE_MOVIE_LIST, ERROR_GET_MOVIE_LIST, UPDATE_MOVIE, AUTO_COMPLETE, SAVE_AUTO_COMPLETE, FAIL_AUTO_COMPLETE } from './actionTypes'

// Include Both Helper File with needed methods
import { requestApi } from '../../utils/request'
import { handleParamUrl } from '../../utils/commons'

function * getMobieListSaga ({ payload }) {
  let url = handleParamUrl('', payload.params)
  const processGetListMovie = yield call(requestApi, url, 'GET')
  if(processGetListMovie.Response === "True") {
    if(payload.params.page <= 1) {
      yield put({
        type: SAVE_MOVIE_LIST,
        payload: processGetListMovie.Search
      })
    } else {
      yield put({
        type: UPDATE_MOVIE,
        payload: processGetListMovie.Search
      })
    }
  
  } else {
    if(payload.params.page <= 1) { 
      yield put({
        type: ERROR_GET_MOVIE_LIST,
        payload: processGetListMovie.Error
      })
    }
    
  }
}




function * homeSaga () {
  yield takeEvery(GET_MOVIE_LIST, getMobieListSaga)
}

export default homeSaga
