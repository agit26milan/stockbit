import { all, fork } from 'redux-saga/effects'
import HomeSaga from './home/saga'
import DetailSaga from './detail/saga'
// public

export default function * rootSaga () {
  yield all([
    fork(HomeSaga),
    fork(DetailSaga)
  ])
}
