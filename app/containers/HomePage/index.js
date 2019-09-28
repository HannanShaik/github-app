/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 *
 */

import React from 'react';
import { FormattedMessage } from 'react-intl';
import messages from './messages';
import CenteredSection from '../../components/CenteredSection';
import Form from '../../components/Form';
import Input from '../../components/Input';
import AtPrefix from '../../components/AtPrefix';

export default function HomePage() {
  return (
    <CenteredSection>
      <h1>
        <FormattedMessage {...messages.header} />
      </h1>
      <Form onSubmit={() => {}}>
        <label htmlFor="username">
          <AtPrefix>
            <FormattedMessage {...messages.username} />
          </AtPrefix>
          <Input
            id="username"
            type="text"
            placeholder="hannanshaik"
            onChange={() => {}}
          />
        </label>
      </Form>
    </CenteredSection>
  );
}
