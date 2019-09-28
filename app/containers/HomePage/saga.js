/**
 * Gets the repositories of the user from Github
 */
import { call, put, select, takeLatest } from 'redux-saga/effects';
import request from 'utils/request';
import {
  LOAD_REPOS,
  LOAD_ORGS,
  reposLoaded,
  loadingError,
  orgsLoaded,
} from './actions';
import { userNameSelector } from './selectors';

export function* getRepos() {
  // Select username from store
  const username = yield select(userNameSelector());
  const requestURL = `https://api.github.com/users/${username}/repos?type=all&sort=updated`;

  try {
    // Call our request helper (see 'utils/request')
    const repos = yield call(request, requestURL);
    yield put(reposLoaded(repos, username));
  } catch (err) {
    yield put(loadingError(err));
  }
}

export function* getOrgs() {
  // Select username from store
  const username = yield select(userNameSelector());
  const requestURL = `https://api.github.com/users/${username}/orgs?type=all&sort=updated`;

  try {
    // Call our request helper (see 'utils/request')
    const orgs = yield call(request, requestURL);
    yield put(orgsLoaded(orgs, username));
  } catch (err) {
    yield put(loadingError(err));
  }
}

/**
 * Root saga manages watcher lifecycle
 */
export default function* githubData() {
  yield takeLatest(LOAD_REPOS, getRepos);
  yield takeLatest(LOAD_ORGS, getOrgs);
}
