import produce from 'immer';
import {
  CHANGE_USERNAME,
  LOAD_REPOS_SUCCESS,
  LOAD_REPOS,
  LOAD_ORGS,
  LOAD_ORGS_SUCCESS,
  ERROR,
} from './actions';

// The initial state of the App
export const initialState = {
  username: '',
  loading: false,
  error: false,
  currentUser: false,
  userData: {
    repositories: false,
    organizations: false,
  },
};

/* eslint-disable default-case, no-param-reassign */
const homeReducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case CHANGE_USERNAME:
        draft.username = action.username.replace(/@/gi, '');
        break;

      case LOAD_REPOS:
        draft.loading = true;
        draft.error = false;
        draft.userData.repositories = false;
        break;

      case LOAD_REPOS_SUCCESS:
        draft.userData.repositories = action.repos;
        draft.loading = false;
        draft.currentUser = action.username;
        break;

      case LOAD_ORGS:
        draft.loading = true;
        draft.error = false;
        draft.userData.organizations = false;
        break;

      case LOAD_ORGS_SUCCESS:
        draft.userData.organizations = action.orgs;
        draft.loading = false;
        draft.currentUser = action.username;
        break;

      case ERROR:
        draft.error = action.error;
        draft.loading = false;
        break;
    }
  });

export default homeReducer;
