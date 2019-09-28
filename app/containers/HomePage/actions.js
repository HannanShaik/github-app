export const CHANGE_USERNAME = 'CHANGE_USERNAME';
export const LOAD_REPOS = 'LOAD_REPOS';
export const LOAD_REPOS_SUCCESS = 'LOAD_REPOS_SUCCESS';
export const LOAD_REPOS_ERROR = 'LOAD_REPOS_ERROR';

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

export function repoLoadingError(error) {
  return {
    type: LOAD_REPOS_ERROR,
    error,
  };
}
