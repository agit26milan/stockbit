import { takeEvery, put, call } from 'redux-saga/effects'

// Login Redux States
import { FAIL_GET_MOVIE_DETAIL, GET_MOVIE_DETAIL, SUCCESS_GET_MOVIE_DETAIL } from './actionTypes'

// Include Both Helper File with needed methods
import { requestApi } from '../../utils/request'

function * getMovieDetail ({ payload }) {
  if(payload.params) {
    const url = `${payload.params}`
    const processGetDetailMovie = yield call(requestApi, url, 'get')
    if(processGetDetailMovie.Response === "True") {
      yield put({
        type: SUCCESS_GET_MOVIE_DETAIL,
        payload: processGetDetailMovie
      })
    } else {
      yield put({
        type: FAIL_GET_MOVIE_DETAIL,
        payload: processGetDetailMovie.Error
      })
    }
  }
 

}



function * detailSaga () {
  yield takeEvery(GET_MOVIE_DETAIL, getMovieDetail)
}

export default detailSaga
