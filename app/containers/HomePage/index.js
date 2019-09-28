/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 *
 */

import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage } from 'react-intl';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { useInjectReducer } from 'utils/injectReducer';
import { useInjectSaga } from 'utils/injectSaga';
import { loadRepos, changeUsername } from './actions';
import messages from './messages';
import CenteredSection from '../../components/CenteredSection';
import Form from '../../components/Form';
import Input from '../../components/Input';
import AtPrefix from '../../components/AtPrefix';

import {
  userNameSelector,
  reposSelector,
  loadingSelector,
  errorSelector,
} from './selectors';
import reducer from './reducer';
import saga from './saga';

const key = 'home';

export function HomePage({ username, onSubmitForm, onChangeUsername }) {
  useInjectReducer({ key, reducer });
  useInjectSaga({ key, saga });

  useEffect(() => {
    // When initial state username is not null, submit the form to load repos
    if (username && username.trim().length > 0) onSubmitForm();
  }, []);

  return (
    <CenteredSection>
      <h1>
        <FormattedMessage {...messages.header} />
      </h1>
      <Form onSubmit={onSubmitForm}>
        <label htmlFor="username">
          <AtPrefix>
            <FormattedMessage {...messages.username} />
          </AtPrefix>
          <Input
            id="username"
            type="text"
            placeholder="mxstbr"
            value={username}
            onChange={onChangeUsername}
          />
        </label>
      </Form>
    </CenteredSection>
  );
}

HomePage.propTypes = {
  loading: PropTypes.bool,
  error: PropTypes.oneOfType([PropTypes.object, PropTypes.bool]),
  repos: PropTypes.oneOfType([PropTypes.array, PropTypes.bool]),
  onSubmitForm: PropTypes.func,
  username: PropTypes.string,
  onChangeUsername: PropTypes.func,
};

const mapStateToProps = createStructuredSelector({
  repos: reposSelector(),
  username: userNameSelector(),
  loading: loadingSelector(),
  error: errorSelector(),
});

export function mapDispatchToProps(dispatch) {
  return {
    onChangeUsername: evt => dispatch(changeUsername(evt.target.value)),
    onSubmitForm: evt => {
      if (evt !== undefined && evt.preventDefault) evt.preventDefault();
      dispatch(loadRepos());
    },
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(HomePage);
