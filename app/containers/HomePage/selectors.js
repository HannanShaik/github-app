/**
 * Homepage selectors
 */

import { createSelector } from 'reselect';
import { initialState } from './reducer';

const selectHome = state => state.home || initialState;

const userNameSelector = () =>
  createSelector(
    selectHome,
    homeState => homeState.username,
  );

const currentUserSelector = () =>
  createSelector(
    selectHome,
    homeState => homeState.currentUser,
  );

const loadingSelector = () =>
  createSelector(
    selectHome,
    homeState => homeState.loading,
  );

const errorSelector = () =>
  createSelector(
    selectHome,
    homeState => homeState.error,
  );

const reposSelector = () =>
  createSelector(
    selectHome,
    homeState => homeState.userData.repositories,
  );

const orgsSelector = () =>
  createSelector(
    selectHome,
    homeState => homeState.userData.organizations,
  );

export {
  selectHome,
  currentUserSelector,
  loadingSelector,
  errorSelector,
  reposSelector,
  userNameSelector,
  orgsSelector,
};
