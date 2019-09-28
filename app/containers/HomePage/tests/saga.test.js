/**
 * Tests for HomePage sagas
 */

import { put, takeLatest } from 'redux-saga/effects';

import {
  LOAD_REPOS,
  LOAD_ORGS,
  reposLoaded,
  loadingError,
  orgsLoaded,
} from '../actions';

import githubData, { getRepos, getOrgs } from '../saga';

const username = 'hannanshaik';

/* eslint-disable redux-saga/yield-effects */
describe('getRepos Saga', () => {
  let getReposGenerator;

  // We have to test twice, once for a successful load and once for an unsuccessful one
  // so we do all the stuff that happens beforehand automatically in the beforeEach
  beforeEach(() => {
    getReposGenerator = getRepos();

    const selectDescriptor = getReposGenerator.next().value;
    expect(selectDescriptor).toMatchSnapshot();

    const callDescriptor = getReposGenerator.next(username).value;
    expect(callDescriptor).toMatchSnapshot();
  });

  it('should dispatch the reposLoaded action if it requests the data successfully', () => {
    const response = [
      {
        name: 'First repo',
      },
      {
        name: 'Second repo',
      },
    ];
    const putDescriptor = getReposGenerator.next(response).value;
    expect(putDescriptor).toEqual(put(reposLoaded(response, username)));
  });

  it('should call the loadingError action if the response errors', () => {
    const response = new Error('Some error');
    const putDescriptor = getReposGenerator.throw(response).value;
    expect(putDescriptor).toEqual(put(loadingError(response)));
  });
});

describe('getOrgs Saga', () => {
  let getOrgsGenerator;

  // We have to test twice, once for a successful load and once for an unsuccessful one
  // so we do all the stuff that happens beforehand automatically in the beforeEach
  beforeEach(() => {
    getOrgsGenerator = getOrgs();

    const selectDescriptor = getOrgsGenerator.next().value;
    expect(selectDescriptor).toMatchSnapshot();

    const callDescriptor = getOrgsGenerator.next(username).value;
    expect(callDescriptor).toMatchSnapshot();
  });

  it('should dispatch the orgsLoaded action if it requests the data successfully', () => {
    const response = [
      {
        url: 'First org url',
      },
      {
        url: 'Second org url',
      },
    ];
    const putDescriptor = getOrgsGenerator.next(response).value;
    expect(putDescriptor).toEqual(put(orgsLoaded(response, username)));
  });

  it('should call the loadingError action if the response errors', () => {
    const response = new Error('Some error');
    const putDescriptor = getOrgsGenerator.throw(response).value;
    expect(putDescriptor).toEqual(put(loadingError(response)));
  });
});

describe('githubDataSaga Saga', () => {
  const githubDataSaga = githubData();

  it('should start task to watch for LOAD_REPOS action', () => {
    const takeLatestDescriptor = githubDataSaga.next().value;
    expect(takeLatestDescriptor).toEqual(takeLatest(LOAD_REPOS, getRepos));
  });

  it('should start task to watch for LOAD_ORGS action', () => {
    const takeLatestDescriptor = githubDataSaga.next().value;
    expect(takeLatestDescriptor).toEqual(takeLatest(LOAD_ORGS, getOrgs));
  });
});
