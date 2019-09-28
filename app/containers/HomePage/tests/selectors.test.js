import {
  selectHome,
  userNameSelector,
  currentUserSelector,
  reposSelector,
  errorSelector,
  loadingSelector,
} from '../selectors';

describe('selectHome', () => {
  it('should select the home state', () => {
    const homeState = {
      userData: {},
    };
    const mockedState = {
      home: homeState,
    };
    expect(selectHome(mockedState)).toEqual(homeState);
  });
});

describe('userNameSelector', () => {
  const usernameSelector = userNameSelector();
  it('should select the username', () => {
    const username = 'hannanshaik';
    const mockedState = {
      home: {
        username,
      },
    };
    expect(usernameSelector(mockedState)).toEqual(username);
  });
});

describe('currentUserSelector', () => {
  const currentUserSelectorInstance = currentUserSelector();
  it('should select the current user', () => {
    const username = 'hannanshaik';
    const mockedState = {
      home: {
        currentUser: username,
      },
    };
    expect(currentUserSelectorInstance(mockedState)).toEqual(username);
  });
});

describe('loadingSelector', () => {
  const loadingSelectorInstance = loadingSelector();
  it('should select the loading', () => {
    const loading = false;
    const mockedState = {
      home: {
        loading,
      },
    };
    expect(loadingSelectorInstance(mockedState)).toEqual(loading);
  });
});

describe('errorSelector', () => {
  const errorSelectorInstance = errorSelector();
  it('should select the error', () => {
    const error = 404;
    const mockedState = {
      home: {
        error,
      },
    };
    expect(errorSelectorInstance(mockedState)).toEqual(error);
  });
});

describe('reposSelector', () => {
  const reposSelectorInstance = reposSelector();
  it('should select the repos', () => {
    const repositories = [];
    const mockedState = {
      home: {
        userData: {
          repositories,
        },
      },
    };
    expect(reposSelectorInstance(mockedState)).toEqual(repositories);
  });
});
