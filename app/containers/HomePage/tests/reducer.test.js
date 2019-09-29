import produce from 'immer';

import homeReducer from '../reducer';
import {
  changeUsername,
  loadRepos,
  loadOrgs,
  orgsLoaded,
  reposLoaded,
  loadingError,
} from '../actions';

/* eslint-disable default-case, no-param-reassign */
describe('homeReducer', () => {
  let state;
  beforeEach(() => {
    state = {
      username: '',
      loading: false,
      error: false,
      currentUser: false,
      userData: {
        repositories: false,
        organizations: false,
      },
    };
  });

  it('should return the initial state', () => {
    const expectedResult = state;
    expect(homeReducer(undefined, {})).toEqual(expectedResult);
  });

  it('should handle the changeUsername action correctly', () => {
    const fixture = 'hannanshaik';
    const expectedResult = produce(state, draft => {
      draft.username = fixture;
    });

    expect(homeReducer(state, changeUsername(fixture))).toEqual(expectedResult);
  });

  it('should handle the loadRepos action correctly', () => {
    const expectedResult = produce(state, draft => {
      draft.loading = true;
      draft.error = false;
      draft.userData.repositories = false;
    });

    expect(homeReducer(state, loadRepos())).toEqual(expectedResult);
  });

  it('should handle the reposLoaded action correctly', () => {
    const fixture = [
      {
        name: 'My Repo',
      },
    ];
    const username = 'test';
    const expectedResult = produce(state, draft => {
      draft.userData.repositories = fixture;
      draft.loading = false;
      draft.currentUser = username;
    });

    expect(homeReducer(state, reposLoaded(fixture, username))).toEqual(
      expectedResult,
    );
  });

  it('should handle the loadOrgs action correctly', () => {
    const expectedResult = produce(state, draft => {
      draft.loading = true;
      draft.error = false;
      draft.userData.organizations = false;
    });

    expect(homeReducer(state, loadOrgs())).toEqual(expectedResult);
  });

  it('should handle the orgsLoaded action correctly', () => {
    const fixture = [
      {
        login: 'My Repo',
      },
    ];
    const username = 'test';
    const expectedResult = produce(state, draft => {
      draft.userData.organizations = fixture;
      draft.loading = false;
      draft.currentUser = username;
    });

    expect(homeReducer(state, orgsLoaded(fixture, username))).toEqual(
      expectedResult,
    );
  });

  it('should handle the loading error action correctly', () => {
    const fixture = {
      msg: 'Not found',
    };
    const expectedResult = produce(state, draft => {
      draft.error = fixture;
      draft.loading = false;
    });

    expect(homeReducer(state, loadingError(fixture))).toEqual(expectedResult);
  });
});
