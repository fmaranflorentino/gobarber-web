import { takeLatest, call, put, all } from 'redux-saga/effects';

import history from '~/services/history';
import api from '~/services/api';

import { signInSuccess } from './actions';

export function* signIn({ payload }) {
  const { email, password } = payload;

  const response = yield call(api.post, 'sessions', {
    email,
    password,
  });

  const { user } = response.data;

  if (!user.provider) {
    console.tron.error(`usuario não é prestador`);
    return;
  }

  yield put(signInSuccess(user.token, user));

  history.push('/dashboard');
}

export default all([takeLatest('@auth/SIGN_IN_REQUEST', signIn)]);
