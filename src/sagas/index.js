import { all } from 'redux-saga/effects';

import httpSaga from './http';

export function* mainSaga() {
  console.log('running main saga');
  yield all([httpSaga()]);
}
