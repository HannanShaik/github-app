export const CHANGE_USERNAME = 'CHANGE_USERNAME';
export const LOAD_REPOS = 'LOAD_REPOS';
export const LOAD_ORGS = 'LOAD_ORGS';
export const LOAD_REPOS_SUCCESS = 'LOAD_REPOS_SUCCESS';
export const ERROR = 'ERROR';
export const LOAD_ORGS_SUCCESS = 'LOAD_ORGS_SUCCESS';
export const LOAD_ORGS_ERROR = 'LOAD_ORGS_ERROR';

export function changeUsername(username) {
  return {
    type: CHANGE_USERNAME,
    username,
  };
}

export function loadRepos() {
  return {
    type: LOAD_REPOS,
  };
}

export function reposLoaded(repos, username) {
  return {
    type: LOAD_REPOS_SUCCESS,
    repos,
    username,
  };
}

export function loadOrgs() {
  return {
    type: LOAD_ORGS,
  };
}

export function orgsLoaded(orgs, username) {
  return {
    type: LOAD_ORGS_SUCCESS,
    orgs,
    username,
  };
}

export function loadingError(error) {
  return {
    type: ERROR,
    error,
  };
}
