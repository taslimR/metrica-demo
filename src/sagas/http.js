import { takeLatest, call, put } from 'redux-saga/effects';

import * as ActionTypes from '../actions/types';
import * as Api from '../service/Api';

export default function* httpSaga() {
  yield console.log('running http saga');

  yield takeLatest(ActionTypes.GENERATE_ADVICE, generateAdvice);
}

function* generateAdvice(actions) {
  yield console.log('generating advice');
  // console.log(token);

  try {
    const resp = yield call(Api.generateAdvice, actions.payload.data);
    yield put({ type: ActionTypes.GENERATE_ADVICE_SUCCEEDED, payload: resp.data });
  } catch (error) {
    yield put({ type: ActionTypes.GENERATE_ADVICE_FAILED, payload: error });
  }
}